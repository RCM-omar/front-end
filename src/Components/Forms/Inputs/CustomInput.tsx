import { CheckboxField } from "./CheckBoxField";
import SelectField from "./SelectField";
import { TextField } from "./TextField";
import { PasswordField } from "./PasswordField";
import { RadioGroupField } from "./RadioGroupField";

type CustomInputProps = {
  name: string;
  label: string;
  type?: string;
  options?: string[];
  size?: "small" | "medium";
  withIcon?: boolean;
  icon?: React.ReactNode;
  position?: "start" | "end";
  margin?: "dense" | "normal" | "none";
  widthPercentage ?: string;
  handleIconClick ?: ()=> void
};

export default function CustomInput({
  name,
  label,
  type = "text",
  options,
  size = "small",
  withIcon = false,
  icon,
  position = "start",
  margin = "none",
  widthPercentage,
  handleIconClick
}: CustomInputProps) {

  switch (type) {

    case "select":
      return (
        <SelectField
          widthPercentage={widthPercentage}
          name={name}
          label={label}
          options={options!}
          size={size}
         
        />
      );
    case "checkbox":
      return <CheckboxField name={name} label={label} size={size} />;
    case "password":
      return (
        <PasswordField
          widthPercentage={widthPercentage}
          name={name}
          label={label}
          size={size}
        />
      );
    case "radio":
      return <RadioGroupField name={name} label={label} options={options!} />;
    default:
      return (
        <TextField
          name={name}
          label={label}
          widthPercentage={widthPercentage}
          type={type}
          size={size}
          margin={margin}
          withIcon={withIcon}
          icon={icon}
          position={position}
          handleIconClick={handleIconClick}
        />
      );
  }
}
