from pydantic import BaseModel, Field

from models import vlp_calc_model as vcm
from models import ipr_calc_model as icm


class NodalCalcRequest(BaseModel):
    ipr_calc: icm.IprCalcResponse = Field(title="Ответ из сервиса ipr")
    vlp_calc: vcm.VlpCalcResponse = Field(title="Ответ из сервиса vlp")


class NodalCalcResponse(BaseModel):
    p_coord: float = Field(title="Координата по давлению, атм")
    q_coord: float = Field(title="Координата по дебиту, м3/сут")
