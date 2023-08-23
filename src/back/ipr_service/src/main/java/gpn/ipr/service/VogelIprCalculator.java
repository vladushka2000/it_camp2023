package gpn.ipr.service;

import gpn.ipr.model.IprCurve;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

import static java.lang.Math.*;

/**
 * Класс для построения IPR по обыкновенному Вогелю
 */
@Component
public class VogelIprCalculator implements IIprCalculator {

    /**
     * Расчет кривой IPR
     *
     * @param reservoirPressure пластовое давление, атм
     * @param watercut          обводненность, %
     * @param productivityIndex коэффициент продуктивности, м3/сут/атм
     * @param bubblePressure    давления насыщения, атм
     * @param pointCount        число точек
     * @return IPR кривая
     */
    @Override
    public IprCurve calculate(double reservoirPressure,
                              double watercut,
                              double productivityIndex,
                              double bubblePressure,
                              int pointCount) {

        List<Double> bottomholePressures = calculateBottomholePressures(
                reservoirPressure,
                pointCount
        );
        List<Double> liquidRates = bottomholePressures.stream()
                .map(pwf -> calculateLiquidRate(
                        pwf, productivityIndex,
                        reservoirPressure, watercut,
                        bubblePressure
                ))
                .toList();
        return new IprCurve(
                liquidRates,
                bottomholePressures
        );
    }

    private List<Double> calculateBottomholePressures(double reservoirPressure,
                                                      int pointCount) {
        List<Double> pressures = new ArrayList<>(pointCount);
        double start = 1.0;
        double step = (reservoirPressure - start) / (pointCount - 1);
        for (int i = 0; i < pointCount; i++) {
            double pressure = start + i * step;
            pressures.add(pressure);
        }
        return pressures;
    }

    /**
     * Расчет дебита жидкости по обыкновенному Вогелю
     *
     * @param pwf  забойное давление, атм
     * @param pi   коэффициент продуктивности, м3/сут/атм
     * @param pRes пластовое давление, атм
     * @param wtc  обводненность, %
     * @param pb   давления насыщения, атм
     * @return дебит жидкости
     */
    private double calculateLiquidRate(double pwf,
                                       double pi,
                                       double pRes,
                                       double wtc,
                                       double pb) {

        // вычисляем дебит при давлении равном давлению насыщения
        double qb = pi * (pRes - pb);

        if (wtc == 100 || pwf >= pb) {
            return pi * (pRes - pwf);
        }

        double fw = wtc / 100;
        double fo = 1 - fw;

        // максимальный дебит чистой нефти
        double qo_max = qb + (pi * pb) / 1.8;
        double pWfg = fw * (pRes - qo_max / pi);

        if (pwf > pWfg) {
            double a = 1 + (pwf - (fw * pRes)) / (0.125 * fo * pb);
            double b = fw / (0.125 * fo * pb * pi);
            double c = (2 * a * b) + 80 / (qo_max - qb);
            double d = pow(a, 2) - (80 * qb / (qo_max - qb)) - 81;

            if (b == 0) {
                return abs(d / c);
            }

            return (-c + sqrt(c * c - 4 * b * b * d)) / (2 * pow(b, 2));

        }

        double cg = 0.001 * qo_max;
        double cd = fw * (cg / pi) + fo * 0.125 * pb
                * (-1 + sqrt(1 + 80 * ((0.001 * qo_max) / (qo_max - qb))));

        return (pWfg - pwf) / (cd / cg) + qo_max;
    }

}
