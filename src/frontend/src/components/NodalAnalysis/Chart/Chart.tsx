import Highcharts from "highcharts";
import { HighchartsReact } from "highcharts-react-official";
import { TextField } from "@consta/uikit/TextField";

import css from "./Chart.module.css";


export function Chart() {

    const options = {
        title: {
          text: "Chart",
        },
        series: [
          {
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 23, 4],
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




