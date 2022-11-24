import { useCallback, useState } from "react";
import { FormGroup, NumericInput } from "@blueprintjs/core";

const NumberField = () => {
  const [value, setValue] = useState("");

  const onValueChange = useCallback((value, valueAsString) => {
    if (Number.isNaN(value) && !value) {
      return;
    }
    if (value === 0 && valueAsString === "") {
      setValue(valueAsString);
    } else {
      setValue(value);
    }
  }, []);

  return (
    <FormGroup label="Number field">
      <NumericInput
        fill
        value={value ?? ""}
        allowNumericCharactersOnly
        onValueChange={onValueChange}
      />
    </FormGroup>
  );
};

export default NumberField;
