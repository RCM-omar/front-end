import { useMemo } from "react";

import { createCustomTheme } from "../Utils/theme";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { setDirection, toggleTheme } from "../../Redux/slices/themeSlice";

export function useThemeManagement() {
  const dispatch = useDispatch();
  const { mode, direction } = useSelector((state: RootState) => state.theme);

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };

  //! to set it manually
  const setDirectionHandler = (dir: "ltr" | "rtl") => {
    dispatch(setDirection(dir));
  };

  const theme = useMemo(
    () => createCustomTheme(mode, direction),
    [mode, direction]
  );

  return { toggleThemeHandler, setDirectionHandler, mode, theme, direction };
}
