package gpn.ipr.service;

import gpn.ipr.model.IprCurve;

public interface IIprService {

    IprCurve calculate(double reservoirPressure,
                       double watercut,
                       double productivityIndex,
                       double bubblePressure,
                       int pointCount);

}
