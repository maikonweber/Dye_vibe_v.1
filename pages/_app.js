
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from "../styles/theme";
import { AuthProvider } from "../src/context/AuthContext"; 
import { Header } from "../src/components/header";

function MyApp({ Component, pageProps }) {
  return (<>
 <ChakraProvider theme={theme} >
  <AuthProvider >
  <Header />
  <Component {...pageProps} />
  </AuthProvider>
  </ChakraProvider >
  </>
  );
}

export default MyApp
