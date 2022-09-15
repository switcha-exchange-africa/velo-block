import '../styles/globals.css'
import type { AppProps } from 'next/app'
import store from '../redux/store'
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react'
import { appTheme } from '../styles/theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function MyApp({ Component, pageProps }: AppProps) {
  return (<Provider store={store}>
    <ChakraProvider resetCSS theme={appTheme}>
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
      <Component {...pageProps} />
      
    </ChakraProvider>
  </Provider>)
}

export default MyApp
