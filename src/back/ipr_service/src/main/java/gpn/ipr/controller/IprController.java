package gpn.ipr.controller;

import gpn.ipr.model.IprCalculationRequest;
import gpn.ipr.model.IprCalculationResponse;
import gpn.ipr.model.IprCurve;
import gpn.ipr.service.IIprService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ipr")
@AllArgsConstructor
@Tag(name = "IPR controller")
public class IprController {

    private static final int DEFAULT_POINT_COUNT = 21;

    private final IIprService iprService;

    /**
     * Эндпоинт расчёта IPR
     */
    @Operation(description = "Эндпоинт расчёта IPR")
    @PostMapping("/calc")
    public IprCalculationResponse calculateCurve(@Valid @RequestBody IprCalculationRequest request) {
        IprCurve curve = iprService.calculate(
                request.getReservoirPressure(),
                request.getWatercut(),
                request.getProductivityIndex(),
                request.getBubblePressure(),
                DEFAULT_POINT_COUNT
        );
        return new IprCalculationResponse(
                curve.getLiquidRates(),
                curve.getBottomholePressures()
        );
    }

}
