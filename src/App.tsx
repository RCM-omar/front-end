
import { useThemeManagement } from "./Hooks/useThemeManagement";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import { createCacheConfig } from "./Utils/cacheConfig";
import "./i18n";
import Routes from "./Routes";


function App() {
  const { theme , direction } = useThemeManagement();
  const cache = createCacheConfig(direction);

  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={cache}>
        <CssBaseline />
        <Routes />
      </CacheProvider>
    </ThemeProvider>
  );
}

export default App;
