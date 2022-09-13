import '../styles/globals.css'
import type { AppProps } from 'next/app'
import store from '../redux/store'
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react'
import { appTheme } from '../styles/theme';


function MyApp({ Component, pageProps }: AppProps) {
  return (<Provider store={store}>
    <ChakraProvider resetCSS theme={appTheme}>
      <Component {...pageProps} />
      
    </ChakraProvider>
  </Provider>)
}

export default MyApp
