package gpn.ipr.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Schema(
        title = "Результат расчета IPR",
        example =
        "{" +
                "\"q_liq\": [" +
                    "190.04, 187.46, 184.87, 182.12, 177.57, 171.26, 163.59, " +
                    "154.82, 145.13, 134.67, 123.53, 111.82, 99.60, 87.15, " +
                    "74.70, 62.25, 49.80, 37.35, 24.90, 12.45, 0" +
                "], " +
                "\"p_wf\": [" +
                    "1, 13.45, 25.9, 38.34, 50.8, 63.25, 75.69, " +
                    "88.14, 100.6, 113.05, 125.5, 137.95, 150.39, 162.85, " +
                    "175.29, 187.75, 200.2, 212.64, 225.1, 237.54, 250" +
                "]" +
        "}"
)
public class IprCalculationResponse {

    @JsonProperty("q_liq")
    @Schema(title = "Дебиты жидкости, м3/сут")
    private List<@PositiveOrZero Double> liquidRates;

    @JsonProperty("p_wf")
    @Schema(title = "Забойные давления, атм")
    private List<@Positive Double> bottomholePressures;

}
