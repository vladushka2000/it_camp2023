from pydantic import Field

from models import vlp_calc_model as vcm


class PVT(vcm.PVT):
    pb: float = Field(title="Давление насыщения, атм")


class CalcRequest(vcm.VlpCalcRequest):
    pvt: PVT = Field(title="PVT")
    p_res: float = Field(title="Пластовое давление, атм")
    pi: float = Field(title="Коэффициент продуктивности, м3/сут/атм")
