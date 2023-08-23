from pydantic import Field

from models import ipr_calc_model as icm
from models import vlp_calc_model as vcm
from models import node_calc_model as ncm


class PVT(vcm.PVT):
    pb: float = Field(title="Давление насыщения, атм")


class CalcRequest(vcm.VlpCalcRequest):
    pvt: PVT = Field(title="PVT")
    p_res: float = Field(title="Пластовое давление, атм")
    pi: float = Field(title="Коэффициент продуктивности, м3/сут/атм")


class CalcResponse(ncm.NodalCalcResponse):
    vlp: vcm.VlpCalcResponse = Field(title="Точки для построения кривой vlp")
    ipr: icm.IprCalcResponse = Field(title="Точки для построения кривой ipr")
