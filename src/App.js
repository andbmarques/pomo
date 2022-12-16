import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TimerContextProvider from './Contexts/SettingsContext';

import Home from './Pages/Home';
import Settings from './Pages/Settings';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <TimerContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </BrowserRouter>
      </TimerContextProvider>
    </ChakraProvider>
  );
}

export default App;
