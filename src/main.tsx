import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// !!! robot font
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Provider } from "react-redux";
import store from "../Redux/store.ts";



createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
    // <App />
  // </StrictMode>,
);
