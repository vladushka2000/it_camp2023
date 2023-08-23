import shapely as sh

from models import node_calc_model as ncm


def calc_intersection_point(ipr_data, vlp_data):
    ipr_arr = sh.LineString([[ipr_data.q_liq[i], ipr_data.p_wf[i]] for i in range(len(ipr_data.q_liq))])
    vlp_arr = sh.LineString([[vlp_data.q_liq[i], vlp_data.p_wf[i]] for i in range(len(vlp_data.q_liq))])
    intersection_point = ipr_arr.intersection(vlp_arr)

    return ncm.NodeCalcResponse(
        p_coord=intersection_point.y,
        q_coord=intersection_point.x
    )
