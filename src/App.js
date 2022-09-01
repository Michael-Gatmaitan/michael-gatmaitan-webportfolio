
import React, { useState } from 'react';
// import { motion } from 'framer-motion';

import './components/styles/FloatingLogoQueries.css';

// Components
import Nav from './components/Nav';
import SocMedIcons from './components/SocMedIcons';
import ModalToolsMobile from './components/ModalToolsMobile';
import ProjectModal from './components/pages/03/ProjectModal';
import BackgroundLogo from './components/BackgroundLogo';

// Pages
import Page01 from './components/pages/01/index';
import Page02 from './components/pages/02/index';
import Page03 from './components/pages/03/index';

function App() {
  
  let [showModal, setShowModal] = useState(false);

  // Project's Modal states
  let [showProjectModal, setShowProjectModal] = useState(false);
  let [projectData, setProjectData] = useState({});

  const cardInfos = [
    {
      id: 0,
      siteLink: "https://mchlgtmtn-posty.netlify.app/",
      githubRepoLink: "https://github.com/Michael-Gatmaitan/music-player-posty",
      typeOfWeb: "Music Website",
      bgHexColor: "#2F2F2F",
      title: "Posty",
      imgSrc: "posty",
      galleryDirectory: "posty-gallery",
      galleryLength: 5
    },
    {
      id: 1,
      siteLink: "https://omo-music.netlify.app",
      githubRepoLink: "https://github.com/Michael-Gatmaitan/omo-music",
      typeOfWeb: "Music Website",
      bgHexColor: "#0B0B14",
      title: "OMO Music",
      imgSrc: "omo",
      galleryDirectory: "omo-music-gallery",
      galleryLength: 11
    },
    {
      id: 2,
      siteLink: "https://aileen-molina-18.netlify.app/",
      githubRepoLink: "https://github.com/Michael-Gatmaitan/Aileen-18th",
      typeOfWeb: "Birthday celebration website",
      bgHexColor: "#FCCAC5",
      title: "Birthday Website",
      imgSrc: "",
      galleryDirectory: "birthday-website-gallery",
      galleryLength: 8
    },
    {
      id: 3,
      siteLink: "https://indicies.netlify.app/",
      githubRepoLink: "https://github.com/Michael-Gatmaitan/Indicies",
      typeOfWeb: "Website Template",
      bgHexColor: "#F7ECEE",
      title: "Indicies",
      imgSrc: "indicies",
      galleryDirectory: "indicies-gallery",
      galleryLength: 4
    },
    {
      id: 4,
      siteLink: "https://swarsplanets.netlify.app/",
      githubRepoLink: "https://github.com/Michael-Gatmaitan/starwars_react-query",
      typeOfWeb: "Data-fetching Website",
      bgHexColor: "#121212",
      title: "Star Wars' Planets",
      imgSrc: "starwars",
      galleryDirectory: "starwars-gallery",
      galleryLength: 0
    }
  ];

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

      <BackgroundLogo />
      
      <div className="page-container">

        <Page01 />
        <Page02 setShowModal={setShowModal} />
        <Page03
          setShowProjectModal={setShowProjectModal}
          setProjectData={setProjectData}
          cardInfos={cardInfos}
        />
      </div>

      {/* </Root> */}
    </>
  );
}

export default App;
