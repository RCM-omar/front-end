import { Checkbox, FormControlLabel, FormHelperText } from "@mui/material";
import { Field, FieldProps } from "formik";

type CheckboxProps = {
  name: string;
  label: string;
  size?: "small" | "medium";
};

export function CheckboxField({
  name,
  label,
  size = "small",
}: CheckboxProps): JSX.Element {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => (
        <>
          <FormControlLabel
            control={<Checkbox size={size} {...field} />}
            label={label}
          />
          {meta.touched && Boolean(meta.error) && (
            <FormHelperText sx={{ color: (theme) => theme.palette.error.main }}>
              {meta.error}
            </FormHelperText>
          )}
        </>
      )}
    </Field>
  );
}
