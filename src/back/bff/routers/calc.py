import json

from fastapi import APIRouter
import fastapi.encoders as encoder

import config
from models import calc_request as cr
from models import ipr_calc_model as icm
from models import vlp_calc_model as vcm
from models import node_calc_model as ncm
from redis_tools import tools
from routers import request_helper as rh
from utils import hashing

router = APIRouter(tags=["calc"])


@router.post("/node_analysis/calc")
def get_intersection_point(
    body: cr.CalcRequest
):
    ipr_data = get_ipr_data(body)
    vlp_data = get_vlp_data(body)
    node_input_data = ncm.NodalCalcRequest(
        ipr_calc=ipr_data,
        vlp_calc=vlp_data
    )
    node_data = get_node_data(node_input_data)

    return node_data


def get_ipr_data(init_data: cr.CalcRequest):
    init_data = encoder.jsonable_encoder(rh.create_ipr_input_values(init_data))
    hashed_data = hashing.hash_by_service_name(init_data, config.config.ipr_name)
    data = tools.RedisTools.get_val(hashed_data)

    if not data:
        data = rh.get_data_from_post_request(
            url=f"{config.config.ipr_host}/ipr/calc",
            json=init_data
        ).json()

        tools.RedisTools.set_val(hashed_data, json.dumps(data))
    else:
        data = json.loads(data.decode("utf-8"))

    return icm.IprCalcResponse(
        q_liq=data.get("q_liq"),
        p_wf=data.get("p_wf")
    )


def get_vlp_data(init_data: cr.CalcRequest):
    init_data = encoder.jsonable_encoder(rh.create_vlp_input_values(init_data))
    hashed_data = hashing.hash_by_service_name(init_data, config.config.vlp_name)
    data = tools.RedisTools.get_val(hashed_data)

    if not data:
        data = rh.get_data_from_post_request(
            url=f"{config.config.vlp_host}/vlp/calculator",
            json=init_data
        ).json()

        tools.RedisTools.set_val(hashed_data, json.dumps(data))
    else:
        data = json.loads(data.decode("utf-8"))

    return vcm.VlpCalcResponse(
        q_liq=data.get("q_liq"),
        p_wf=data.get("p_wf")
    )


def get_node_data(init_data: ncm.NodalCalcRequest):
    init_data = encoder.jsonable_encoder(init_data)
    hashed_data = hashing.hash_by_service_name(init_data, config.config.node_name)
    data = tools.RedisTools.get_val(hashed_data)

    if not data:
        data = rh.get_data_from_post_request(
            url=f"{config.config.node_host}/intersection_point/calc",
            json=init_data
        ).json()

        tools.RedisTools.set_val(hashed_data, json.dumps(data))
    else:
        data = json.loads(data.decode("utf-8"))

    return ncm.NodalCalcResponse(
        p_coord=data.get("p_coord"),
        q_coord=data.get("q_coord")
    )
