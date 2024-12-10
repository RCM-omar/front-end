import {
  TextField as MUITextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Field, FieldProps } from "formik";
import { ReactNode } from "react";

type InputProps = {
  name: string;
  label: string;
  type?: string;
  size?: "small" | "medium";
  margin?: "dense" | "normal" | "none";
  withIcon?: boolean;
  icon?: ReactNode;
  position?: "start" | "end";
  handleIconClick?: () => void;
  widthPercentage ?: string;
};

export function TextField({
  name,
  label,
  type = "text",
  size = "small",
  margin = "none",
  //! handle the icon
  withIcon = false,
  icon,
  position = "start",
  handleIconClick,
  widthPercentage,
}: InputProps): JSX.Element {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => (
         
        <MUITextField
          //! onblur , change , name ...
          {...field}
          label={label}
          
          size={size}
          fullWidth
          type={type}
          margin={margin}
          error={meta.touched && Boolean(meta.error)}
          sx={{
            width: widthPercentage,
          }}
          helperText={meta.touched && meta.error}
          slotProps={
            withIcon
              ? {
                  input: {
                    
                    // [`${actualPosition}Adornment`]: (
                    //   <InputAdornment position={position}>
                    //     <IconButton onClick={handleIconClick}>
                    //       {icon}
                    //     </IconButton>
                    //   </InputAdornment>
                    // ),
                    [`startAdornment`]: (
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
