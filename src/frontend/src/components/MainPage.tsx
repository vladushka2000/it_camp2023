import { Button } from "@consta/uikit/Button";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function MainPage() {
  const options = {
    title: {
      text: "My chart",
    },
    series: [
      {
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 23, 4],
      },
    ],
  };

  return (
    <>
      <div className="">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
      <div>
        <Button label="Кнопка" />
      </div>
    </>
  );
}
