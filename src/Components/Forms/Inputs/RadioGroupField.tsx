import { FormControl, RadioGroup, FormLabel, FormControlLabel, Radio, FormHelperText } from "@mui/material";
import { Field, FieldProps } from "formik";

type RadioGroupProps = {
  name: string;
  label: string;
  options: string[];
};

export function RadioGroupField({
  name,
  label,
  options,
}: RadioGroupProps): JSX.Element {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => (
        <FormControl fullWidth error={meta.touched && Boolean(meta.error)}>
          <FormLabel>{label}</FormLabel>
          <RadioGroup {...field} aria-labelledby={label}>
            {options.map((option) => (
              <FormControlLabel
                key={option}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
          {meta.touched && Boolean(meta.error) && (
            <FormHelperText>{meta.error}</FormHelperText>
          )}
        </FormControl>
      )}
    </Field>
  );
}
