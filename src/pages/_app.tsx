import "../styles/globals.css";
import type { AppProps } from "next/app";
import store, { persistor } from "../redux/store";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { appTheme } from "../styles/theme";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <ChakraProvider resetCSS theme={appTheme}>

          <Component {...pageProps} />
        </ChakraProvider>
      </PersistGate>

    </Provider>
  );
}

export default MyApp;
