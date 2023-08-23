package gpn.ipr.service;

import gpn.ipr.model.IprCurve;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class IprService implements IIprService {

    private final IIprCalculator iprCalculator;

    @Override
    public IprCurve calculate(double reservoirPressure,
                              double watercut,
                              double productivityIndex,
                              double bubblePressure,
                              int pointCount) {
        return iprCalculator.calculate(
                reservoirPressure, watercut, productivityIndex,
                bubblePressure, pointCount
        );
    }

}
