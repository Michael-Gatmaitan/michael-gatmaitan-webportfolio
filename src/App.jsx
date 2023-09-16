import React, { useState, Suspense, lazy } from "react";
// import { motion } from 'framer-motion';

import "./components/styles/FloatingLogoQueries.css";

// Components
// import Nav from "./components/Nav";
import SocMedIcons from "./components/SocMedIcons";
// import ProjectModal from "./components/pages/03/ProjectModal";
import BackgroundLogo from "./components/BackgroundLogo";

// Pages
// import Page01 from "./components/pages/01/index";
// import Page02 from "./components/pages/02/index";
// import Page03 from "./components/pages/03/index";

// Skeletons for code-splitting
import { Skeleton } from "./components/skeletons/Skeletons";
import Loading from "./components/Loading";

// import Skeleton from "react-loading-skeleton";
// import { Skeleton } from "./components/skeletons/Skeletons";

const Nav = lazy(() => import("./components/Nav"));
const ProjectModal = lazy(() => import("./components/pages/03/ProjectModal"));
const ModalToolsMobile = lazy(() => import("./components/ModalToolsMobile"));

const Page01 = lazy(() => import("./components/pages/01/index"));
const Page02 = lazy(() => import("./components/pages/02/index"));
const Page03 = lazy(() => import("./components/pages/03/index"));

function App() {
  let [showModal, setShowModal] = useState(false);

  // Project's Modal states
  let [showProjectModal, setShowProjectModal] = useState(false);
  let [projectData, setProjectData] = useState({});

  return (
    <>
      {/* <Root> */}

      <Suspense fallback={<Skeleton elementClassName='nav' />}>
        <Nav />
      </Suspense>

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

      {showProjectModal ? (
        <Suspense fallback={"Loading"}>
          <ProjectModal
            setShowProjectModal={setShowProjectModal}
            projectData={projectData}
            setProjectData={setProjectData}
          />
        </Suspense>
      ) : null}

      <BackgroundLogo />

      <div className='page-container'>

        <Suspense fallback={<>LOADING....</>}>
          <Page01 />
        </Suspense>

        <Suspense fallback={<>LOADING....</>}>
          <Page02 />
        </Suspense>

        <Suspense fallback={<>LOADING....</>}>
          <Page03 />
        </Suspense>

        {/* <Page01 />
        <Page02 setShowModal={setShowModal} />
        <Page03
          setShowProjectModal={setShowProjectModal}
          setProjectData={setProjectData}
        /> */}
      </div>

      {/* Skeleton debug view */}
      {/* <Skeleton elementClassName='modal-for-tools' /> */}
      {/* <Skeleton elementClassName='nav' /> */}

      {/* </Root> */}
    </>
  );
}

export default App;
