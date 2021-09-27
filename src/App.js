
import React from 'react';
// import { motion } from 'framer-motion';

import './components/styles/FloatingLogoQueries.css';

// Components
import Nav from './components/Nav';
import FloatingLogo from './components/_FloatingLogo';
import SocMedIcons from './components/SocMedIcons';
// import ScrollDown from './components/ScrollDown';

// Pages
import Page01 from './components/pages/01/index';
import Page02 from './components/pages/02/index';

function App() {
  
  return (
    <React.Fragment>
      {/* <Root> */}

      <div className="floating-logo-holder">
        <FloatingLogo posStyles={{ top: -170, left: -22 }} elId={0} />
        <FloatingLogo posStyles={{ top: 617, right: -22 }} elId={1} />
        <FloatingLogo posStyles={{ top: 617 + 597, left: -22 }} elId={2} />
      </div>

      <Nav />
      <SocMedIcons />
      {/* <ScrollDown /> */}

      <div className="page-container">
        <Page01 />
        <Page02 />
      </div>

      {/* </Root> */}
    </React.Fragment>
  );
}

export default App;
