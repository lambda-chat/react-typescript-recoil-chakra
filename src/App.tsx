import React from 'react';
import { RecoilRoot } from 'recoil';
import { ChakraProvider } from '@chakra-ui/react';
// import logo from './logo.svg';
// import './App.css';
import RecoilSamplePage from './components/page/recoil-sample-page';

function App() {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <RecoilSamplePage />
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default App;
