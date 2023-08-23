from fastapi import APIRouter
import fastapi.encoders as encoder

from calculations import intersection_point as i_point
from models import node_calc_model as ncm

router = APIRouter(tags=["calc"])


@router.post("/intersection_point/calc")
def calc_intersection_point(
    body: ncm.NodalCalcRequest
):
    intersection_point = i_point.calc_intersection_point(
        ipr_data=body.ipr_calc,
        vlp_data=body.vlp_calc
    )

    return encoder.jsonable_encoder(intersection_point)
