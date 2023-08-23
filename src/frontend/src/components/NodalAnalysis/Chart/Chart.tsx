import Highcharts from "highcharts";
import { HighchartsReact } from "highcharts-react-official";
import { useSelector } from "react-redux";
import { nodalAnalysisStateSelector } from "../../../store/NodalAnalysis/Selectors";
import { TextField } from "@consta/uikit/TextField";

import css from "./Chart.module.css";


export function Chart() {

  const responseIpr = {
    q_liq: [190.04, 187.46, 184.87, 182.12, 177.57, 171.26, 163.59, 154.82, 145.13, 134.67, 123.53, 111.82, 99.60, 87.15,
      74.70, 62.25, 49.80, 37.35, 24.90, 12.45, 0],
    p_wf: [1, 13.45, 25.9, 38.34, 50.8, 63.25, 75.69, 88.14, 100.6, 113.05, 125.5, 137.95, 150.39, 162.85,
      175.29, 187.75, 200.2, 212.64, 225.1, 237.54, 250]
  };

  const responseVlp = {
    q_liq: [
      0,
      21.05,
      42.11,
      63.16,
      84.21,
      105.26,
      126.32,
      147.37,
      168.42,
      189.47,
      210.53,
      231.58,
      252.63,
      273.68,
      294.74,
      315.79,
      336.84,
      357.89,
      378.95,
      400
    ],
    p_wf: [
      34.94,
      15.27,
      14.36,
      15.18,
      17.23,
      20.23,
      24,
      28.41,
      33.38,
      38.86,
      44.81,
      51.23,
      58.1,
      65.42,
      73.2,
      81.44,
      90.15,
      99.33,
      109,
      119.18
    ]
  }

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
        [nodalAnalysisState.data.point.p_wf, nodalAnalysisState.data.point.q_liq],
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
          data: responseIpr//getIprData(),
        },
        {
          name: "ВЛП",
          data: responseVlp//getVlpData(),
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
          <TextField leftSide="P:" size="s" style={{ width: '10rem' }} disabled={true}></TextField>
          <TextField leftSide="Q:" size="s" style={{ width: '10rem' }} disabled={true}></TextField>
        </div>
    </>
  );
}