package gpn.ipr.service;

import gpn.ipr.model.IprCalculationRequest;
import gpn.ipr.model.IprCalculationResponse;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;

@SpringBootTest(
        webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT
)
class VogelIprCalculatorTest {

    private static final double COMPARING_PRECISION = 0.01;

    @Value("${local.server.port}")
    int port;

    @Autowired
    TestRestTemplate httpClient;

    @Test
    void givenSampleDataWhenCalculateIprThenReturnIprCurve() {
        String url = String.format("http://localhost:%d/ipr/calc", port);
        IprCalculationRequest request = new IprCalculationRequest(
                250, 50, 1, 150
        );
        IprCalculationResponse response = httpClient.postForObject(
                url, request, IprCalculationResponse.class
        );
        double[] expectedLiquidRates = {
                190.04, 187.46, 184.87, 182.12, 177.57, 171.26, 163.59,
                154.82, 145.13, 134.67, 123.53, 111.82, 99.60, 87.15,
                74.70, 62.25, 49.80, 37.35, 24.90, 12.45, 0.0
        };
        double[] expectedBottomholePressures = {
                1.0, 13.45, 25.9, 38.34, 50.8, 63.25, 75.69,
                88.14, 100.6, 113.05, 125.5, 137.95, 150.39, 162.85,
                175.29, 187.75, 200.2, 212.64, 225.1, 237.54, 250.0
        };
        assertArrayEquals(
                expectedBottomholePressures,
                convertListToArray(response.getBottomholePressures()),
                COMPARING_PRECISION
        );
        assertArrayEquals(
                expectedLiquidRates,
                convertListToArray(response.getLiquidRates()),
                COMPARING_PRECISION
        );
    }

    private double[] convertListToArray(List<Double> list) {
        return list.stream().mapToDouble(d -> d).toArray();
    }

}