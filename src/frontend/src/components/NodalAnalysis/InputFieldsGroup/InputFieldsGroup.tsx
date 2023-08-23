import { TextField } from "@consta/uikit/TextField";
import { AppDispatch, useAppDispatch } from "../../../store/store";
import { useSelector } from "react-redux";
import { nodalAnalysisStateSelector } from "../../../store/NodalAnalysis/Selectors";

import {
    changeGammaOilAction,
    changeGammaWatAction,
    changeGammaGasAction,
    changeGeoGradAction,
    changeHMesAction,
    changeHResAction,
    changePWhAction,
    changeRpAction,
    changeTResAction,
    changeTubingDAction,
    changeCasingDAction,
    changeWctAction,
    changeTVDAction,
    changeMDAction,
    changePResAction,
  } from "../../../store/NodalAnalysis/Actions";
  
import { changePi } from "../../../store/NodalAnalysis/Slices";
import css from "./InputFieldsGroup.module.css";


export function InputFieldsGroup() {

  const textFieldSize = "m";
  const nodalAnalysisState = useSelector(nodalAnalysisStateSelector);
  const dispatch = useAppDispatch();
  const getValue = (value: string | null): string | undefined => {
    return value === null ? undefined : String(value);
  };

  return (
    <div className={css.textFieldsGroup}>
            <TextField label="Обводненность" 
            placeholder="Введите значение"
            value={getValue(nodalAnalysisState.pvt.wct)}
            size={textFieldSize}
            type="number"
            incrementButtons={false}
            onChange={({ value }) => {
              dispatch(changeWctAction(value));
            }}></TextField>
            <TextField label="Газовый фактор" 
            placeholder="Введите значение"
            value={getValue(nodalAnalysisState.pvt.rp)}
              size={textFieldSize}
              type="number"
              incrementButtons={false}
              onChange={({ value }) => {
                dispatch(changeRpAction(value));
              }}></TextField>
            <TextField label="Относительная плотность нефти" 
            placeholder="Введите значение"
            value={getValue(nodalAnalysisState.pvt.gamma_oil)}
              size={textFieldSize}
              type="number"
              incrementButtons={false}
              onChange={({ value }) => {
                dispatch(changeGammaOilAction(value));
              }}></TextField>
            <TextField label="Относительная плотность газа" 
            placeholder="Введите значение"
            value={getValue(nodalAnalysisState.pvt.gamma_gas)}
              size={textFieldSize}
              type="number"
              incrementButtons={false}
              onChange={({ value }) => {
                dispatch(changeGammaGasAction(value));
              }}></TextField>
            <TextField label="Относительная плотность воды" 
            placeholder="Введите значение"
            value={getValue(nodalAnalysisState.pvt.gamma_wat)}
              size={textFieldSize}
              type="number"
              incrementButtons={false}
              onChange={({ value }) => {
                dispatch(changeGammaWatAction(value));
              }}></TextField>
            <TextField label="Устевая температура" 
            placeholder="Введите значение"
            value={getValue(nodalAnalysisState.pvt.t_res)}
              size={textFieldSize}
              type="number"
              incrementButtons={false}
              onChange={({ value }) => {
                dispatch(changeTResAction(value));
              }}></TextField>
            <TextField label="Инклинометрия скважины в формате MD1" 
            placeholder="Введите значение"
            value={getValue(nodalAnalysisState.inclinometry.MD)}
              size={textFieldSize}
              type="number"
              incrementButtons={false}
              onChange={({ value }) => {
                dispatch(changeMDAction(value));
              }}></TextField>
            <TextField label="Инклинометрия скважины в формате TVD" 
            placeholder="Введите значение"
            value={getValue(nodalAnalysisState.inclinometry.TVD)}
              size={textFieldSize}
              type="number"
              incrementButtons={false}
              onChange={({ value }) => {
                dispatch(changeTVDAction(value));
              }}></TextField>
            <TextField label="Диаметр по ЭК" 
            placeholder="Введите значение"
            value={getValue(nodalAnalysisState.casing.casing_d)}
              size={textFieldSize}
              type="number"
              incrementButtons={false}
              onChange={({ value }) => {
                dispatch(changeCasingDAction(value));
              }}></TextField>
            <TextField label="Диаметр НКТ" 
            placeholder="Введите значение"
            value={getValue(nodalAnalysisState.tubing.tubing_d)}
              size={textFieldSize}
              type="number"
              incrementButtons={false}
              onChange={({ value }) => {
                dispatch(changeTubingDAction(value));
              }}></TextField>
            <TextField label="Глубина спуска НКТ" 
            placeholder="Введите значение"
            value={getValue(nodalAnalysisState.tubing.h_mes)}
              size={textFieldSize}
              type="number"
              incrementButtons={false}
              onChange={({ value }) => {
                dispatch(changeHMesAction(value));
              }}></TextField>
            <TextField label="Буферное давление" 
            placeholder="Введите значение"
            value={getValue(nodalAnalysisState.p_wh)}
              size={textFieldSize}
              type="number"
              incrementButtons={false}
              onChange={({ value }) => {
                dispatch(changePWhAction(value));
              }}></TextField>
            <TextField label="Градиент температуры" 
            placeholder="Введите значение"
            value={getValue(nodalAnalysisState.geo_grad)}
              size={textFieldSize}
              type="number"
              incrementButtons={false}
              onChange={({ value }) => {
                dispatch(changeGeoGradAction(value));
              }}></TextField>
            <TextField label="Глубина верхних дыр перфорации" 
            placeholder="Введите значение"
            value={getValue(nodalAnalysisState.h_res)}
              size={textFieldSize}
              type="number"
              incrementButtons={false}
              onChange={({ value }) => {
                dispatch(changeHResAction(value));
              }}></TextField>
            <TextField label="Пластовое давление" 
            placeholder="Введите значение"
            value={getValue(nodalAnalysisState.p_res)}
              size={textFieldSize}
              type="number"
              incrementButtons={false}
              onChange={({ value }) => {
                dispatch(changePResAction(value));
              }}></TextField>
            <TextField label="Коэффициент продуктивности" 
            placeholder="Введите значение"
            value={getValue(nodalAnalysisState.pi)}
              size={textFieldSize}
              type="number"
              incrementButtons={false}
              onChange={({ value }) => {
                dispatch(changePi(value));
              }}></TextField>
          </div>
  );
}




