
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from "../styles/theme";
import { AuthProvider } from "../src/context/AuthContext"; 

function MyApp({ Component, pageProps }) {
  return (<>
 <ChakraProvider theme={theme} >
  <AuthProvider >
  <Component {...pageProps} />
  </AuthProvider>
  </ChakraProvider >
  </>
  );
}

export default MyApp
