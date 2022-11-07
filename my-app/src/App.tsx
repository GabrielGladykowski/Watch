import React from 'react';
import GLOBALSTYLE from './global/GlobalStyle';
import { Watch } from './components/Watch';
import { HandsContext, HandsProvider } from './components/dial/hands/HandsContext';

function App() {
  return (
    <HandsProvider>
      <GLOBALSTYLE />
      <Watch />
    </HandsProvider>
    );
}

export default App;
