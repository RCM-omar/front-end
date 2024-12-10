import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Field, FieldProps } from "formik";

type PasswordFieldProps = {
  name: string;
  label: string;
  withIcon?: boolean;
  icon?: React.ReactNode;
  position?: "start" | "end";
  handleIconClick?: () => void;
  size : "small" | "medium";
  widthPercentage  ?:string
};

export function PasswordField({
  name,
  label,
  withIcon = false,
  icon,
  position = "start",
  handleIconClick,
  size ,
  widthPercentage
}: PasswordFieldProps): JSX.Element {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => (
        <TextField
          {...field}
          label={label}
          type="password"
          fullWidth
          margin="normal"
          error={meta.touched && Boolean(meta.error)}
          helperText={meta.touched && meta.error}
          sx={{
            width: widthPercentage, 
          }}
          slotProps={
            withIcon
              ? {
                  input: {
                    endAdornment: (
                      <InputAdornment position={position}>
                        <IconButton onClick={handleIconClick}>
                          {icon}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }
              : undefined
          }
        />
      )}
    </Field>
  );
}
