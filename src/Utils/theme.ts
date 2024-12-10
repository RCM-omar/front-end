import { createTheme } from "@mui/material/styles";

// ! TODO :- Make separated 2 files for dark and light mode
export const createCustomTheme = (
  mode: "light" | "dark",
  dir: "rtl" | "ltr"
) => {
  return createTheme({
    direction: dir,
    palette: {
      mode,
      background: {
        default: mode === "light" ? "#eee" : "#121212",
        paper: mode === "light" ? "#f5f5f5" : "#1d1d1d",
      },
      loadingBg: mode === "light" ? "#eeeeee55" : "#12121255",
    },
  });
};
