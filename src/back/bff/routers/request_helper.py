import requests
from typing import Optional

from models import calc_request as cr, ipr_calc_model as icm, vlp_calc_model as vcm, node_calc_model as ncm


def get_data_from_post_request(url, json: dict, data: Optional[dict] = None):
    return requests.post(url=url, data=data, json=json)


def create_ipr_input_values(well_calc: cr.CalcRequest) -> icm.IprCalcModel:
    return icm.IprCalcModel(
        p_res=well_calc.p_res,
        wct=well_calc.pvt.wct,
        pi=well_calc.pi,
        pb=well_calc.pvt.pb
    )


def create_vlp_input_values(well_calc: cr.CalcRequest) -> vcm.VlpCalcRequest:
    return vcm.VlpCalcRequest(
        inclinometry=well_calc.inclinometry,
        casing=well_calc.casing,
        tubing=well_calc.tubing,
        pvt=well_calc.pvt,
        p_wh=well_calc.p_wh,
        geo_grad=well_calc.geo_grad,
        h_res=well_calc.h_res
    )
