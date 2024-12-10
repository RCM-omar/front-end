import { IconButton } from "@mui/material";
import { useThemeManagement } from "../../../Hooks/useThemeManagement";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function ThemeToggleButton({ sx }: { sx: any }) {
  const { mode, toggleThemeHandler } = useThemeManagement(); 

  return (
    <IconButton onClick={toggleThemeHandler} sx={sx}>
      {mode == "light" ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
}
