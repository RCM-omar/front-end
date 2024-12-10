// src/Redux/slices/themeSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  mode: "light" | "dark";
  direction: "ltr" | "rtl";
  globalLoading: boolean;
}

const initialState: ThemeState = {
  globalLoading: false,
  mode: localStorage.getItem("mode") === "dark" ? "dark" : "light",
  direction:
    (document.documentElement.getAttribute("dir") as "ltr" | "rtl") || "ltr",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("mode", state.mode);
    },
    setDirection: (state, action: PayloadAction<"ltr" | "rtl">) => {
      state.direction = action.payload;
      document.documentElement.setAttribute("dir", action.payload);
    },
    setGlobalLoading: (state, action: PayloadAction<boolean>) => {
        state.globalLoading = action.payload; // Add the setLoading action to update the loading state
      },
  },
});

export const { toggleTheme, setDirection , setGlobalLoading } = themeSlice.actions;

export default themeSlice.reducer;
