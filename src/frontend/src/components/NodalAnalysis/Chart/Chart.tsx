import Highcharts from "highcharts";
import { HighchartsReact } from "highcharts-react-official";
import { useSelector } from "react-redux";
import { nodalAnalysisStateSelector } from "../../../store/NodalAnalysis/Selectors";
import { TextField } from "@consta/uikit/TextField";

import css from "./Chart.module.css";


export function Chart() {


  const nodalAnalysisState = useSelector(nodalAnalysisStateSelector);

  const getVlpData = () => {
    return nodalAnalysisState.data && nodalAnalysisState.data.vlp.q_liq && nodalAnalysisState.data.vlp.p_wf
      ? nodalAnalysisState.data.vlp.q_liq.reduce(
          (acc: string[][], item: string, index: number) => {
            nodalAnalysisState.data && acc.push([item, nodalAnalysisState.data.vlp.p_wf[index]]);
            return acc;
          },
          []
        )
      : [];
  };

  const getIprData = () => {
    return nodalAnalysisState.data && nodalAnalysisState.data.ipr.q_liq && nodalAnalysisState.data.ipr.p_wf
      ? nodalAnalysisState.data.ipr.q_liq.reduce(
          (acc: string[][], item: string, index: number) => {
            nodalAnalysisState.data && acc.push([item, nodalAnalysisState.data.ipr.p_wf[index]]);
            return acc;
          },
          []
        )
      : [];
  };

  const getPoint = () => {
    return (
      nodalAnalysisState.data && [
        [nodalAnalysisState.data.q_coord, nodalAnalysisState.data.p_coord],
      ]
    );
  };
    const options = {
      chart: {
        type: "spline",
      },
      title: {
        text: "График узлового анализа",
      },
  
      xAxis: {
        reversed: false,
        maxPadding: 0.05,
        showLastLabel: true,
        title: {
          text: "Дебит жидкости, м3/cут",
        },
      },
      yAxis: {
        lineWidth: 4,
        title: {
          text: "Забойное давление, бар",
        },
      },
      legend: {
        enabled: false,
      },
      tooltip: {
        headerFormat: "<b>{series.name}</b><br/>",
        pointFormat: "Дебит жидкости : {point.x}, Забойное давление : {point.y}",
      },
      plotOptions: {
        spline: {
          marker: {
            enable: false,
          },
        },
      },
      series: [
        {
          name: "ИПР",
          data: getIprData(),
        },
        {
          name: "ВЛП",
          data: getVlpData(),
        },
        {
          name: "Режим работы",
          data: getPoint(),
        },
      ],
    };
  return (
    <>        
        <HighchartsReact highcharts={Highcharts} options={options} />
        <div className={css.resultContainer}>
          <TextField leftSide="P:" size="s" style={{ width: '10rem' }} disabled={true} value={nodalAnalysisState.data?.p_coord}></TextField>
          <TextField leftSide="Q:" size="s" style={{ width: '10rem' }} disabled={true} value={nodalAnalysisState.data?.q_coord}></TextField>
        </div>
    </>
  );
}