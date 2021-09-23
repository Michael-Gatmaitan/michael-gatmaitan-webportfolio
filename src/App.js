
import React from 'react';
// import { motion } from 'framer-motion';

// Components
import Nav from './components/Nav';
import FloatingLogo from './components/_FloatingLogo';

function App() {
  
  return (
    <React.Fragment>
      {/* <Root> */}

      <Nav />
      <FloatingLogo posStyles={{ top: -92, left: 220 }} />

      {/* </Root> */}
    </React.Fragment>
  );
}

export default App;
