import React from 'react';
import { ChakraProvider, theme, VStack } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TimerContextProvider from './Contexts/SettingsContext';

import Navbar from './Components/Navbar';

import Home from './Pages/Home';
import Settings from './Pages/Settings';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <TimerContextProvider>
        <BrowserRouter>
          <Navbar />
          <VStack>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
          </VStack>
        </BrowserRouter>
      </TimerContextProvider>
    </ChakraProvider>
  );
}

export default App;
