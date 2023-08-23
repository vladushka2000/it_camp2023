package gpn.ipr.exception;

import gpn.ipr.model.ErrorMessage;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@ControllerAdvice
public class ControllerAdvise {

    @SuppressWarnings("unchecked")
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorMessage> handleValidationException(MethodArgumentNotValidException exception) {
        Object[] details = Optional.ofNullable(exception.getDetailMessageArguments()).orElse(new Object[0]);
        String description = Arrays.stream(details)
                .map(d -> (List<String>) d)
                .flatMap(Collection::stream)
                .filter(d -> !d.isEmpty())
                .collect(Collectors.joining(", "));
        return ResponseEntity
                .badRequest()
                .body(new ErrorMessage(
                        "Ошибка валидации. Проверьте корректность запроса",
                        description
                ));
    }

}
