from pydantic import BaseModel, Field


class QRateAndPressureValues(BaseModel):
    q_liq: list[float] = Field(title="Дебит жидкости, м3/сут")
    p_wf: list[float] = Field(title="Давление, атм")


class NodalCalcRequest(BaseModel):
    ipr_calc: QRateAndPressureValues = Field(title="Расчеты ipr")
    vlp_calc: QRateAndPressureValues = Field(title="Расчеты vlp")


class NodeCalcResponse(BaseModel):
    p_coord: float = Field(title="Точка пересчения по оси давлений, атм")
    q_coord: float = Field(title="Точка пересечения по оси дебитов, м3/сут")
