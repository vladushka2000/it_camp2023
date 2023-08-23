from typing import List

from pydantic import BaseModel, confloat, conlist, Field


class PVT(BaseModel):
    wct: confloat(ge=0, le=100) = Field(title="Обводненность, %")
    rp: confloat(ge=0) = Field(title="Газовый фактор, м3/т")
    gamma_oil: confloat(ge=0.6, le=1) = Field(title="Отн. плотность нефти")
    gamma_gas: confloat(ge=0.5, le=1) = Field(title="Отн. плотность газа")
    gamma_wat: confloat(ge=0.98, le=1.2) = Field(title="Отн. плотность воды")
    t_res: confloat(ge=10, le=500) = Field(title="Пластовая температура, C")


class Inclinometry(BaseModel):
    MD: conlist(item_type=confloat(ge=0)) = Field(
        title="Измеренная по стволу глубина, м")
    TVD: List[confloat(ge=0)] = Field(title="Вертикальная глубина, м")


class Pipeline(BaseModel):
    d: confloat(gt=0) = Field(title="Диаметр трубы, м")


class Tubing(Pipeline):
    h_mes: confloat(gt=0) = Field(title="Глубина спуска НКТ, м")


class VlpCalcRequest(BaseModel):
    inclinometry: Inclinometry = Field(title="Инклинометрия")
    casing: Pipeline = Field(title="Данные по ЭК")
    tubing: Tubing = Field(title="Данные по НКТ")
    pvt: PVT = Field(title="PVT")
    p_wh: confloat(ge=0) = Field(title="Буферное давление, атм")
    geo_grad: confloat(ge=0) = Field(title="Градиент температуры, C/100 м")
    h_res: confloat(ge=0) = Field(title="Глубина Верхних Дыр Перфорации, м")


class VlpCalcResponse(BaseModel):
    q_liq: list[float] = Field(title="Дебит жидкости, м3/сут")
    p_wf: list[float] = Field(title="Давление, атм")
