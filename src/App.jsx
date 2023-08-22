import React, { useState } from "react";
// import { motion } from 'framer-motion';

import "./components/styles/FloatingLogoQueries.css";

// Components
import Nav from "./components/Nav";
import SocMedIcons from "./components/SocMedIcons";
import ModalToolsMobile from "./components/ModalToolsMobile";
import ProjectModal from "./components/pages/03/ProjectModal";
import BackgroundLogo from "./components/BackgroundLogo";

// Pages
import Page01 from "./components/pages/01/index";
import Page02 from "./components/pages/02/index";
import Page03 from "./components/pages/03/index";

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
      bgHexColor: "#2F2F2F",
      description: "",
      typeOfWeb: "Music Website",
      title: "Posty",
      imgSrc: "posty",
      galleryDirectory: "posty-gallery",
      imageName: "posty-snip-",
      gallerySnips: 5,
    },
    {
      id: 1,
      siteLink: "https://omo-music.netlify.app",
      githubRepoLink: "https://github.com/Michael-Gatmaitan/omo-music",
      bgHexColor: "#0B0B14",
      description:
        "OMO Music is a music website where you can play some songs of international artists. Enjoy over 500+ songs and 50+ artists.",
      typeOfWeb: "Music Website",
      title: "OMO Music",
      imgSrc: "omo",
      galleryDirectory: "omo-music-gallery",
      imageName: "omo-music-snip-",
      gallerySnips: 11,
    },
    {
      id: 2,
      siteLink: "https://aileen-molina-18.netlify.app/",
      githubRepoLink: "https://github.com/Michael-Gatmaitan/Aileen-18th",
      bgHexColor: "#FCCAC5",
      description: "",
      typeOfWeb: "Birthday celebration website",
      title: "Birthday Website",
      imgSrc: "",
      galleryDirectory: "birthday-website-gallery",
      imageName: "birthday-website-snip-",
      gallerySnips: 8,
    },
    {
      id: 3,
      siteLink: "https://indicies.netlify.app/",
      githubRepoLink: "https://github.com/Michael-Gatmaitan/Indicies",
      bgHexColor: "#F7ECEE",
      description: "",
      typeOfWeb: "Website Template",
      title: "Indicies",
      imgSrc: "indicies",
      galleryDirectory: "indicies-gallery",
      imageName: "indicies-snip-",
      gallerySnips: 4,
    },
    {
      id: 4,
      siteLink: "https://swarsplanets.netlify.app/",
      githubRepoLink:
        "https://github.com/Michael-Gatmaitan/starwars_react-query",
      bgHexColor: "#121212",
      description: "",
      typeOfWeb: "Data-fetching Website",
      title: "Star Wars' Planets",
      imgSrc: "starwars",
      galleryDirectory: "star-wars-planets-gallery",
      imageName: "star-wars-planets-snip-",
      gallerySnips: 4,
    },
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

      <div className='page-container'>
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
