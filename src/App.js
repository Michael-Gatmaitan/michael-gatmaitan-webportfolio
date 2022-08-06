
import React, { useState } from 'react';
// import { motion } from 'framer-motion';

import './components/styles/FloatingLogoQueries.css';

// Components
import Nav from './components/Nav';
import SocMedIcons from './components/SocMedIcons';
import ModalToolsMobile from './components/ModalToolsMobile';
import ProjectModal from './components/pages/03/ProjectModal';

// Pages
import Page01 from './components/pages/01/index';
import Page02 from './components/pages/02/index';
import Page03 from './components/pages/03/index';

function App() {
  
  let [showModal, setShowModal] = useState(false);

  // Project's Modal states
  let [showProjectModal, setShowProjectModal] = useState(false);
  let [projectData, setProjectData] = useState({});

  return (
    <>
      {/* <Root> */}

      <Nav />
      <SocMedIcons />
      <ModalToolsMobile
        showModal={showModal}
        setShowModal={setShowModal}
        modalType={true}
      />
      <ProjectModal
        showProjectModal={showProjectModal}
        setShowProjectModal={setShowProjectModal}
        projectData={projectData}
        setProjectData={setProjectData}
      />

      <div className="page-container">
        <Page01 />
        <Page02 setShowModal={setShowModal} />
        <Page03
          setShowProjectModal={setShowProjectModal}
          setProjectData={setProjectData}
        />
      </div>

      {/* </Root> */}
    </>
  );
}

export default App;
