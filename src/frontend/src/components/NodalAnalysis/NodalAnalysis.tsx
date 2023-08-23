import { useAppDispatch } from "../../store/store";
import { clearAllMetrics } from "../../store/NodalAnalysis/Actions";
import { InputFieldsGroup } from "../../components/NodalAnalysis/InputFieldsGroup"
import { Chart } from "../../components/NodalAnalysis/Chart"
import { Text } from "@consta/uikit/Text";
import { Button } from "@consta/uikit/Button";
import axios from "axios";

import css from "./NodalAnalysis.module.css";


export function NodalAnalysis() {

  const dispatch = useAppDispatch();
  const calculate = function(){
  }  

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