package gpn.ipr.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Schema(
        title = "Запрос на расчет IPR",
        example = "{\"p_res\": 250, \"wct\": 50, \"pi\": 1, \"pb\": 150}"
)
public class IprCalculationRequest {

    @JsonProperty("p_res")
    @Schema(title = "Пластовое давление, атм")
    @Positive
    private double reservoirPressure;

    @JsonProperty("wct")
    @Schema(title = "Обводненность, %")
    @PositiveOrZero
    @Max(100)
    private double watercut;

    @JsonProperty("pi")
    @Schema(title = "Коэффициент продуктивности, м3/сут/атм")
    @PositiveOrZero
    private double productivityIndex;

    @JsonProperty("pb")
    @Schema(title = "Давление насыщения, атм")
    @PositiveOrZero
    private double bubblePressure;

}
