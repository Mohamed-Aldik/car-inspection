import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";
import FullPageSpinner from "./pages/FullPageSpinner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<FullPageSpinner />}>
      <BrowserRouter>
        <ReduxProvider store={store}>
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </ReduxProvider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
