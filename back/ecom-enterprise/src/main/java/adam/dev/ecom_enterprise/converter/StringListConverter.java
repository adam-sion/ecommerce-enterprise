package adam.dev.ecom_enterprise.converter;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Converter
public class StringListConverter implements AttributeConverter<List<String>, String> {

    private final String STRING_DELIMITER = ",";

    @Override
    public String convertToDatabaseColumn(List<String> list) {
        return list == null ? "" : String.join(STRING_DELIMITER, list);
    }

    @Override
    public List<String> convertToEntityAttribute(String joined) {
        if (joined == null || joined.trim().isEmpty()) {
            return new ArrayList<>();
        }

        return new ArrayList<>(Arrays.asList(joined.split(STRING_DELIMITER)));
    }

}