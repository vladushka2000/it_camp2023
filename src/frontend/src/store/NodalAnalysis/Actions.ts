import { nodalAnalysisSlice } from "./Slices";
import { AppDispatch } from "../store";

export const changeHResAction =
  (value: string | null) => (dispatch: AppDispatch) =>
    dispatch(nodalAnalysisSlice.actions.changeHRes(value));

export const changeGeoGradAction =
  (value: string | null) => (dispatch: AppDispatch) =>
    dispatch(nodalAnalysisSlice.actions.changeGeoGrad(value));

export const changePWhAction =
  (value: string | null) => (dispatch: AppDispatch) =>
    dispatch(nodalAnalysisSlice.actions.changePWh(value));

export const changeTResAction =
  (value: string | null) => (dispatch: AppDispatch) =>
    dispatch(nodalAnalysisSlice.actions.changeTRes(value));

export const changeGammaWatAction =
  (value: string | null) => (dispatch: AppDispatch) =>
    dispatch(nodalAnalysisSlice.actions.changeGammaWat(value));

export const changeGammaGasAction =
  (value: string | null) => (dispatch: AppDispatch) =>
    dispatch(nodalAnalysisSlice.actions.changeGammaGas(value));

export const changeGammaOilAction =
  (value: string | null) => (dispatch: AppDispatch) =>
    dispatch(nodalAnalysisSlice.actions.changeGammaOil(value));

export const changeRpAction =
  (value: string | null) => (dispatch: AppDispatch) =>
    dispatch(nodalAnalysisSlice.actions.changeRp(value));

export const changeWctAction =
  (value: string | null) => (dispatch: AppDispatch) =>
    dispatch(nodalAnalysisSlice.actions.changeWct(value));

export const changeHMesAction =
  (value: string | null) => (dispatch: AppDispatch) =>
    dispatch(nodalAnalysisSlice.actions.changeHMes(value));

export const changeCasingDAction =
  (value: string | null) => (dispatch: AppDispatch) =>
    dispatch(nodalAnalysisSlice.actions.changeCasingD(value));

export const changeTubingDAction =
  (value: string | null) => (dispatch: AppDispatch) =>
    dispatch(nodalAnalysisSlice.actions.changeTubingD(value));

export const changeTVDAction =
  (value: string | null) => (dispatch: AppDispatch) =>
    dispatch(nodalAnalysisSlice.actions.changeTVD(value));

export const changeMDAction =
  (value: string | null) => (dispatch: AppDispatch) =>
    dispatch(nodalAnalysisSlice.actions.changeMD(value));

export const changePResAction =
  (value: string | null) => (dispatch: AppDispatch) =>
    dispatch(nodalAnalysisSlice.actions.changePRes(value));


export const clearAllMetrics = 
  () => (dispatch: AppDispatch) =>
    dispatch(nodalAnalysisSlice.actions.clearAllMetrics());