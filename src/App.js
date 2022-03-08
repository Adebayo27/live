import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Routes from './routes/Index';
import theme from './utils/theme';
import '../src/utils/style.css'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  );
}

export default App;
