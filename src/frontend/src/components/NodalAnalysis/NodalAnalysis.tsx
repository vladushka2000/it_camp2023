import { useAppDispatch } from "../../store/store";
import { clearAllMetrics } from "../../store/NodalAnalysis/Actions";
import { InputFieldsGroup } from "../../components/NodalAnalysis/InputFieldsGroup"
import { Chart } from "../../components/NodalAnalysis/Chart"

import { useSelector } from "react-redux";
import { nodalAnalysisStateSelector } from "../../store/NodalAnalysis/Selectors";

import { setDataAction } from "../../store/NodalAnalysis/Actions";
import { useEffect, useState } from "react"
import axios from "axios"

import { Text } from "@consta/uikit/Text";
import { Button } from "@consta/uikit/Button";

import css from "./NodalAnalysis.module.css";

type dataType = {
  inclinometry: {
    MD: string | string[] | null;
    TVD: string | string[] | null;
  };
  casing: {
    d: string | null;
  };
  tubing: {
    d: string | null;
    h_mes: string | null;
  };
  pvt: {
    wct: string | null;
    rp: string | null;
    gamma_oil: string | null;
    gamma_gas: string | null;
    gamma_wat: string | null;
    t_res: string | null;
    pb: string | null;
  };
  p_wh: string | null;
  geo_grad: string | null;
  h_res: string | null;
  pi: string | null;
  p_res: string | null;
};

export function NodalAnalysis() {
  const nodalAnalysisState = useSelector(nodalAnalysisStateSelector);
  const dispatch = useAppDispatch();
  const [calculateBtnIsEnable, setCalculateBtnIsEnable] = useState<boolean>(false)


async function sendData(data: dataType) {
    await axios.post("http://localhost:8005/node_analysis/calc", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        dispatch(setDataAction(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const calculate = function(){
    const data: dataType = {
      inclinometry: {
        MD: null,
        TVD: null,
      },
      casing: {
        d: null,
      },
      tubing: {
        d: null,
        h_mes: null,
      },
      pvt: {
        wct: null,
        rp: null,
        gamma_oil: null,
        gamma_gas: null,
        gamma_wat: null,
        t_res: null,
        pb: null,
      },
      p_wh: null,
      geo_grad: null,
      h_res: null,
      pi: null,
      p_res: null,
    };
    data.inclinometry.MD =
    nodalAnalysisState.inclinometry.MD && nodalAnalysisState.inclinometry.MD.split(",");
    data.inclinometry.TVD =
    nodalAnalysisState.inclinometry.TVD && nodalAnalysisState.inclinometry.TVD.split(",");
    data.casing.d = nodalAnalysisState.casing.casing_d;
    data.tubing.d = nodalAnalysisState.tubing.tubing_d;
    data.tubing.h_mes = nodalAnalysisState.tubing.h_mes;
    data.pvt.wct = nodalAnalysisState.pvt.wct;
    data.pvt.rp = nodalAnalysisState.pvt.rp;
    data.pvt.gamma_oil = nodalAnalysisState.pvt.gamma_oil;
    data.pvt.gamma_gas = nodalAnalysisState.pvt.gamma_gas;
    data.pvt.gamma_wat = nodalAnalysisState.pvt.gamma_wat;
    data.pvt.t_res = nodalAnalysisState.pvt.t_res;
    data.p_wh = nodalAnalysisState.p_wh;
    data.geo_grad = nodalAnalysisState.geo_grad;
    data.h_res = nodalAnalysisState.h_res;
    data.pi = nodalAnalysisState.pi;
    data.p_res = nodalAnalysisState.p_res;
    data.pvt.pb = "150";


    sendData(data);
  }  

  useEffect(() => {
    if (
      nodalAnalysisState.casing.casing_d !== null &&
      nodalAnalysisState.geo_grad !== null &&
      nodalAnalysisState.h_res !== null &&
      nodalAnalysisState.inclinometry.MD !== null &&
      nodalAnalysisState.inclinometry.TVD !== null &&
      nodalAnalysisState.p_wh !== null &&
      nodalAnalysisState.pvt.gamma_gas !== null &&
      nodalAnalysisState.pvt.gamma_oil !== null &&
      nodalAnalysisState.pvt.gamma_wat !== null &&
      nodalAnalysisState.pvt.rp !== null &&
      nodalAnalysisState.pvt.t_res !== null &&
      nodalAnalysisState.tubing.h_mes !== null &&
      nodalAnalysisState.tubing.tubing_d !== null &&
      nodalAnalysisState.p_res !== null
    ) {
      setCalculateBtnIsEnable(false);
    }
  }, [nodalAnalysisState]);

  return (
    <div className={css.nodalAnalysis}>
      <div className={css.buttonGroup}>
        <Button label="История" view="primary" size="s"/>
        <Button label="Загрузить отчет" view="primary" size="s"/>
      </div>
      <div className={css.nodalAnalysisContainer}>
        <div className={css.inputContainer}>
          <div className={css.inputContainerHeader}>
            <Text size="m" weight="black">Расчет режима работы добывающих скважин</Text>
          </div>
          <div className={css.textFieldsContainer}>
            <InputFieldsGroup></InputFieldsGroup>
          </div>        
          <div className={css.inputContainerFooter}>        
                <Button label="Очистить" view="secondary" size="s" onClick={() => dispatch(clearAllMetrics())}/>
                <Button label="Расчитать" view="primary" size="s" onClick={() => calculate()}/>
            </div>      
        </div>
        <div className={css.chartContainer}>
          <Chart></Chart>
        </div>
      </div>
    </div>
  );
}