import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { Field } from "formik";

type SelectFieldProps = {
  name: string;
  label: string;
  size?: "small" | "medium";
  margin?: "dense" | "normal" | "none";
  position?: "start" | "end";
  options: string[];
  widthPercentage ?: string;
  value?: string
};

export default function SelectField({
  name,
  label,
  size = "small",
  margin = "dense",
  options,
  widthPercentage,
  value
}: SelectFieldProps): JSX.Element {
  return (
    <Field name={name} >
      {({ field, meta }: any) => (
        <FormControl
          sx={{
            width: widthPercentage, 
          }}
          size={size}
          fullWidth
          error={meta.touched && Boolean(meta.error)}

          
        >
          <InputLabel>{label}</InputLabel>
          <Select value={value}  {...field} label={label} margin={margin}>
            {options?.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
          {meta.touched && Boolean(meta.error) && (
            <FormHelperText>{meta.error}</FormHelperText>
          )}
        </FormControl>
      )}
    </Field>
  );
}
