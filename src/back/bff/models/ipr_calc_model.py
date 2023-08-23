from pydantic import BaseModel, Field


class IprCalcModel(BaseModel):
    p_res: float = Field(title="Пластовое давление, атм")
    wct: float = Field(title="Обводненность, %")
    pi: float = Field(title="Коэффициент продуктивности, м3/сут/атм")
    pb: float = Field(title="Давление насыщения, атм")


class IprCalcResponse(BaseModel):
    q_liq: list[float] = Field(title="Дебит жидкости, м3/сут")
    p_wf: list[float] = Field(title="Давление, атм")
