import React from 'react';
import GLOBALSTYLE from './global/GlobalStyle';
import { Watch } from './components/Watch';

function App() {
  return (
    <>
      <GLOBALSTYLE />
      {/* <GLOBALSTYLE_BACKGROUND/> */}
      <Watch />
    </>
    );
}

export default App;
