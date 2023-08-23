from pydantic import BaseModel, Field


class PvtCalcRequest(BaseModel):
    P: float = Field()
    T: float = Field()
    GammaOil: float = Field()
    GammaGas: float = Field()
    GammaWat: float = Field()
    Wct: float = Field()
    Rp: float = Field()
    QLiq: float = Field()


class PvtCalcResponse(BaseModel):
    QMix: float = Field()
    RhoMix: float = Field()
    MuMix: float = Field()
