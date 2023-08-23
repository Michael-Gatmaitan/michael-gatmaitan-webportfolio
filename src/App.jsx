import React, { useState, Suspense, lazy } from "react";
// import { motion } from 'framer-motion';

import "./components/styles/FloatingLogoQueries.css";

// Components
import Nav from "./components/Nav";
import SocMedIcons from "./components/SocMedIcons";
import ProjectModal from "./components/pages/03/ProjectModal";
import BackgroundLogo from "./components/BackgroundLogo";

// Pages
import Page01 from "./components/pages/01/index";
import Page02 from "./components/pages/02/index";
import Page03 from "./components/pages/03/index";

// Skeletons for code-splitting
// import { Skeleton } from "./components/skeletons/Skeletons";
import Loading from "./components/Loading";
import { Skeleton } from "./components/skeletons/Skeletons";

const ModalToolsMobile = lazy(() => import("./components/ModalToolsMobile"));

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
      logoSrc: "posty",
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
      logoSrc: "omo",
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
      logoSrc: "", // No logo
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
      logoSrc: "indicies",
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
      logoSrc: "starwars",
      galleryDirectory: "starwars-planets-gallery",
      imageName: "star-wars-planets-snip-",
      gallerySnips: 4,
    },
    {
      id: 5,
      siteLink: "https://taskit-mg.netlify.app",
      githubRepoLink: "https://github.com/Michael-Gatmaitan/Task-it",
      bgHexColor: "#00f",
      description: "", // Fill up this field
      typeOfWeb: "Project manager website",
      title: "Taskit",
      logoSrc: "", // FGill uip this field
      galleryDirectory: "task-it",
      imageName: "task-it-snip-",
      gallerySnips: 10,
    },
  ];

  return (
    <>
      {/* <Root> */}

      <Nav />
      <SocMedIcons />

      {
        <Suspense fallback={<Loading />}>
          <ModalToolsMobile
            showModal={showModal}
            setShowModal={setShowModal}
            modalType={true}
          />
        </Suspense>
      }

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

      {/* Skeleton debug view */}
      <Skeleton elementClassName='modal-for-tools' />

      {/* </Root> */}
    </>
  );
}

export default App;
