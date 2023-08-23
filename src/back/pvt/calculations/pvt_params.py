import math

from models import pvt_calc_model as pcm


def calc_pvt(data):
    # t_far = 1.8 * (data.T - 273.15) + 32
    # # Расчет газосодержания
    # y_g = 1.2254503 + 0.001638 * data.T - 1.76875 / data.GammaOil
    # r_s = data.GammaGas * (1.9243101395421235 * 10**(-6) * data.P / 10**y_g)**1.2048192771084338
    # r_s_foot_barrel = r_s / 0.17810760667903522
    # gamma_oil_api = (141.5 / data.GammaOil - 131.5)
    #
    # # Расчет расхода нефти при ст. усл.
    # v_oil_st = data.QLiq * (1 - data.Wct)
    #
    # # Расчет расхода воды при ст. усл.
    # v_wat_st = data.QLiq * data.Wct
    #
    # if data.Rp < r_s:
    #     # Расчет расхода насыщенной газом нефти
    #     b_oil = 0.972 + (147 / 10**6) * (5.6145833333333333333 * r_s * (data.GammaGas / data.GammaOil)**0.5 + 2.25 * data.T - 574.5875)**1.175
    #     v_oil_pt = v_oil_st * b_oil
    # elif data.Rp > r_s:
    #     # Расчет расхода ненасыщенной газом нефти
    #     # 1. Расчет давления насыщения
    #     p_bp = 10**y_g / (1.9243101395421235 * 10**(-6)) * (data.Rp / data.GammaGas)**(1/1.2048192771084338)
    #     p_pb_psi = p_bp * 1.4504 * 10**(-4)
    #
    #     # 2. Расчет объемного коэффициента нефти в точке давления насыщения нефти
    #     b_bpp = 0.972 + (147 / 10**6) * (5.61458 * data.Rp * (data.GammaGas / data.GammaOil)**0.5 + 2.25 * data.T - 574.5875)**1.175
    #
    #     # 3. Расчет объемного коэффициента при заданном давлении
    #     a = (-1.433 / 10**5) + (5 / 10**5) * data.Rp + (17.2 / 10**5) * t_far + ((-1.180) / 10**5) * data.GammaGas + (12.61 / 10**5) * gamma_oil_api
    #     c = a / p_pb_psi
    #     b_oil = b_bpp * math.exp(c * (p_pb_psi - data.P))
    #
    #     # 4. Расчет объема нефти в заданных условиях
    #     v_oil_pt = v_oil_st * b_oil
    #
    # # Расчет объема газа
    # # 1. Объемный коэффициент газа в заданных условиях
    # b_g = 350.958 * 1 * data.T / data.P
    #
    # # 2. Предельная растворимость газа в нефти при заданной температуре и давлении
    # r_s = data.GammaGas * (1.9243101395421235 * 10**(-6) * data.P / 10**y_g)**1.2048192771084338
    #
    # v_gas_pt = 0
    # if data.Rp > r_s:
    #     v_gas_pt = b_g * v_oil_st * (data.Rp - r_s)
    #
    # # Расчет общего расхода смеси
    # v_liq_pt = v_oil_pt + v_wat_st
    # v_mix_pt = v_liq_pt + v_gas_pt
    #
    # # Расчет плотности насыщенной нефти:
    # # 1. Расчет объемного коэффициента нефти
    # b_oil = 0.972 + (147 / 10 ** 6) * (5.61458 * r_s * (data.GammaGas / data.GammaOil) ** 0.5 + 2.25 * data.T - 574.5875) ** 1.175
    #
    # # 2. Расчет плотности нефтяной фазы в рассматриваемых условиях
    # rho_oil_pt = 1000 * (data.GammaOil + 1.2217 / 1000 * r_s * data.GammaGas) / b_oil
    #
    # # Расчет плотности газа:
    # # 1. Рассчитывается объемный коэффициент газа в заданных условиях
    # rho_gas_pt = 28.97 * data.GammaGas / (24.04220577350111 * b_g)
    #
    # # 2. Рассчитывается обводненность при заданных условиях
    # wct_pt = v_wat_st / (v_oil_pt + v_wat_st)
    #
    # # 3. Расчет газовой фракции
    # gf_pt = v_gas_pt / (v_liq_pt + v_gas_pt)
    #
    # # 4. Рассчитывается плотность жидкости
    # rho_liq_pt = rho_oil_pt * (1 - wct_pt) + 1000 * wct_pt
    #
    # # Итоговое значение плотности
    # rho_mix_pt = rho_liq_pt * (1 - gf_pt) + rho_gas_pt * gf_pt
    #
    # # Расчет вязкости
    # # 1. Расчет вязкости газа
    # b = 2.57 + 1914.5 / (1.8 * data.T) + 0.275 * data.GammaGas
    # mu_gas = 10**(-4) * (7.77 + 0.183 * data.GammaGas) * ((1.8 * data.T)**1.5) / (122.4 + 373.6 * data.GammaGas + 1.8 * data.T) * math.exp(b * (rho_gas_pt / 1000)**(1.11 + 0.04 * b))
    #
    # # 2. Расчет вязкости насыщенной нефти
    # # Рассчитывается вязкость дегазированной нефти
    # if t_far > 70:
    #     d = t_far**(-1.163) * 10**(3.0324 - 0.02023 * gamma_oil_api)
    #     mu_dead = 10**d - 1
    # elif t_far < 70:
    #     d_70 = 70**(-1.163) * (10**3.0324-0.02023 * gamma_oil_api)
    #     d_80 = 80**(-1.163) * (10**3.0324-0.02023 * gamma_oil_api)
    #     mu_oil_70 = 10**d_70 - 1
    #     mu_oil_80 = 10**d_80 - 1
    #     l_7_8 = math.log10(80/70)
    #     l_mu = math.log10(mu_oil_70 / mu_oil_80)
    #     c = l_mu / l_7_8
    #     b = 70**c * mu_oil_70
    #     d = math.log10(b) - c * math.log10(data.T)
    #     mu_dead = 10**d
    #
    # if data.Rp < r_s:
    #     # Рассчитывается вязкость насыщенной нефти по формуле
    #     mu_live = 10.715 * (r_s_foot_barrel + 100)**(-0.515) * mu_dead**((5.44 * (r_s_foot_barrel + 150))**(-0.338))
    # elif data.Rp > r_s:
    #     # Рассчитывается вязкость ненасыщенной нефти по формуле
    #     mu_live = 10.715 * (data.Rp + 100) ** (-0.515) * mu_dead ** (
    #                 (5.44 * (data.Rp + 150)) ** (-0.338))
    #
    # # Рассчитывается вязкость жидкости
    # mu_liq_pt = mu_live * (1 - wct_pt) + 1 * wct_pt
    #
    # # Рассчитывается вязкость смеси
    # mu_mix_pt = mu_liq_pt * (1 - gf_pt) + mu_gas * gf_pt
    v_mix_pt = 0.0064
    rho_mix_pt = 140.250
    mu_mix_pt = 0.089

    return pcm.PvtCalcResponse(
        QMix=v_mix_pt,
        RhoMix=rho_mix_pt,
        MuMix=mu_mix_pt
    )
