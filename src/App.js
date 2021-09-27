
import React from 'react';
// import { motion } from 'framer-motion';

import './components/styles/FloatingLogoQueries.css';

// Components
import Nav from './components/Nav';
import FloatingLogo from './components/_FloatingLogo';
import SocMedIcons from './components/SocMedIcons';
// Pages
import Page01 from './components/pages/01/index';

function App() {
  
  return (
    <React.Fragment>
      {/* <Root> */}

      <div className="floating-logo-holder">
        <FloatingLogo posStyles={{ top: -170, left: -22 }} elId={0} />
        <FloatingLogo posStyles={{ top: 617, right: -29 }} elId={1} />
      </div>

      <Nav />
      <SocMedIcons />

      <div className="page-container">
        <Page01 />
      </div>
      

      {/* </Root> */}
    </React.Fragment>
  );
}

export default App;
