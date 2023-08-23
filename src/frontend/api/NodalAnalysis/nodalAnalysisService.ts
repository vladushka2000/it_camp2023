import axios from "axios"

type dataType = {
    inclinometry: {
      MD: string | string[] | null;
      TVD: string | string[] | null;
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
  };


async function sendData(data: dataType) {
    await axios
      .post("http://localhost:8080/data", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        dispatch(setDataAction(response));
        dispatch(setLoadingAction(false));
      })
      .catch(function (error) {
        console.log(error);
      });
  }