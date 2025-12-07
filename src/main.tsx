import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ReduxProvider from "./providers/ReduxProvider";
import QueryProvider from "./providers/QueryProvider";
import "./styles/animations.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider>
      <QueryProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryProvider>
    </ReduxProvider>
  </StrictMode>
);
