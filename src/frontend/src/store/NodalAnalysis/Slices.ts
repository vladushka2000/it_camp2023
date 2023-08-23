import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type responseType = {
  point: { p_wf: string; q_liq: string };
  ipr: {
    q_liq: string[];
    p_wf: string[];
  };
  vlp: {
    q_liq: string[];
    p_wf: string[];
  };
};

export interface NodalAnalysisState {
    inclinometry: {
        MD: string | null;
        TVD: string | null;
      };
      casing: {
        casing_d: string | null;
      };
      tubing: {
        tubing_d: string | null;
        h_mes: string | null;
      };
      pvt: {
        wct: string | null;
        rp: string | null;
        gamma_oil: string | null;
        gamma_gas: string | null;
        gamma_wat: string | null;
        t_res: string | null;
      };
      p_wh: string | null;
      geo_grad: string | null;
      h_res: string | null;
      pi: string | null;
      p_res: string | null;
      data: responseType | null;
}

const initialState: NodalAnalysisState = {
    inclinometry: {
        MD: null,
        TVD: null,
      },
      casing: {
        casing_d: null,
      },
      tubing: {
        tubing_d: null,
        h_mes: null,
      },
      pvt: {
        wct: null,
        rp: null,
        gamma_oil: null,
        gamma_gas: null,
        gamma_wat: null,
        t_res: null,
      },
      p_wh: null,
      geo_grad: null,
      h_res: null,
      pi: null,
      p_res: null,
      data: null,
};

export const nodalAnalysisSlice = createSlice({
    name: "nodalAnalysis",
    initialState,
    reducers: {
      changeMD: (state, action: PayloadAction<string | null>) => {
        state.inclinometry.MD = action.payload;
      },
      changeTVD: (state, action: PayloadAction<string | null>) => {
        console.log(action.payload);
        state.inclinometry.TVD = action.payload;
      },
      changeCasingD: (state, action: PayloadAction<string | null>) => {
        state.casing.casing_d = action.payload;
      },
      changeTubingD: (state, action: PayloadAction<string | null>) => {
        state.tubing.tubing_d = action.payload;
      },
      changeHMes: (state, action: PayloadAction<string | null>) => {
        state.tubing.h_mes = action.payload;
      },
      changeWct: (state, action: PayloadAction<string | null>) => {
        state.pvt.wct = action.payload;
      },
      changeRp: (state, action: PayloadAction<string | null>) => {
        state.pvt.rp = action.payload;
      },
      changeGammaOil: (state, action: PayloadAction<string | null>) => {
        state.pvt.gamma_oil = action.payload;
      },
      changeGammaGas: (state, action: PayloadAction<string | null>) => {
        state.pvt.gamma_gas = action.payload;
      },
      changeGammaWat: (state, action: PayloadAction<string | null>) => {
        state.pvt.gamma_wat = action.payload;
      },
      changeTRes: (state, action: PayloadAction<string | null>) => {
        state.pvt.t_res = action.payload;
      },
      changePWh: (state, action: PayloadAction<string | null>) => {
        state.p_wh = action.payload;
      },
      changeGeoGrad: (state, action: PayloadAction<string | null>) => {
        state.geo_grad = action.payload;
      },
      changeHRes: (state, action: PayloadAction<string | null>) => {
        state.h_res = action.payload;
      },
      changePi: (state, action: PayloadAction<string | null>) => {
        state.pi = action.payload;
      },
      changePRes: (state, action: PayloadAction<string | null>) => {
        state.p_res = action.payload;
      },
      setData: (state, action: PayloadAction<any>) => {
        state.data = action.payload;
      },
      clearAllMetrics: (state) => {
        state.inclinometry.MD = null;
        state.inclinometry.TVD = null;
        state.casing.casing_d = null;
        state.tubing.tubing_d = null;
        state.tubing.h_mes = null;
        state.pvt.wct = null;
        state.pvt.rp = null;
        state.pvt.gamma_oil = null;
        state.pvt.gamma_gas = null;
        state.pvt.gamma_wat = null;
        state.pvt.t_res = null;
        state.p_wh = null;
        state.geo_grad = null;
        state.h_res = null;
        state.pi = null;
        state.p_res = null;
      },  
      checkMetrics: (state) => {},
    },
});

export const { 
    changeMD,
    changeTVD,
    changeCasingD,
    changeTubingD,
    changeHMes,
    changeWct,
    changeRp,
    changeGammaOil,
    changeGammaGas,
    changeGammaWat,
    changeTRes,
    changePWh,
    changeGeoGrad,
    changeHRes,
    changePi,
    changePRes,  
    clearAllMetrics,  
    checkMetrics,
 } = nodalAnalysisSlice.actions;

export default nodalAnalysisSlice.reducer;