from fastapi import APIRouter
import fastapi.encoders as encoder

from calculations import pvt_params
from models import pvt_calc_model as pcm

router = APIRouter(tags=["calc"])


@router.post("/calculator")
def calc_intersection_point(
    body: pcm.PvtCalcRequest
):
    calculated_data = pvt_params.calc_pvt(body)

    return encoder.jsonable_encoder(calculated_data)
