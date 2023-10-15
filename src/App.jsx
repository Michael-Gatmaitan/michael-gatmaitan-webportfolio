import React, { useState, Suspense, lazy } from "react";
// import { motion } from 'framer-motion';

import "./components/styles/FloatingLogoQueries.css";

// Components
import SocMedIcons from "./components/SocMedIcons";
import BackgroundLogo from "./components/BackgroundLogo";

import Loading from "./components/Loading";

import { Skeleton } from "./components/skeletons/Skeletons";
import SideBar from "./components/SideBar";

import { AnimatePresence } from "framer-motion";

const Nav = lazy(() => import("./components/Nav"));
const ProjectModal = lazy(() => import("./components/pages/03/ProjectModal"));
const ModalToolsMobile = lazy(() => import("./components/ModalToolsMobile"));

const Page01 = lazy(() => import("./components/pages/01/index"));
const Page02 = lazy(() => import("./components/pages/02/index"));
const Page03 = lazy(() => import("./components/pages/03/index"));
const Page04 = lazy(() => import("./components/pages/04/index"));

const buttons = [
  { title: "ABOUT", key: 0 },
  { title: "PROJECTS", key: 1 },
  { title: "CONTACT", key: 2 },
];

function App() {
  const [showSideBar, setShowSideBar] = useState(false);

  const [showModal, setShowModal] = useState(false);

  // Project's Modal states
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [projectData, setProjectData] = useState({});

  return (
    <>
      {/* <Root> */}

      <Suspense fallback={<Skeleton elementClassName="nav" />}>
        <Nav buttons={buttons} setShowSideBar={setShowSideBar} />
      </Suspense>

      <AnimatePresence>
        {showSideBar && (
          <SideBar buttons={buttons} setShowSideBar={setShowSideBar} />
        )}
      </AnimatePresence>

      <SocMedIcons />

      <Suspense fallback={<Loading />}>
        <ModalToolsMobile
          showModal={showModal}
          setShowModal={setShowModal}
          modalType={true}
        />
      </Suspense>

      {/* Showing PROJECT MODAL */}
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

      <div className="page-container">
        <Suspense fallback={<>LOADING....</>}>
          <Page01 />
        </Suspense>

        <Suspense fallback={<>LOADING....</>}>
          <Page02 setShowModal={setShowModal} />
        </Suspense>

        <Suspense fallback={<>LOADING....</>}>
          <Page03
            setShowProjectModal={setShowProjectModal}
            setProjectData={setProjectData}
          />
        </Suspense>

        <Suspense fallback={<>LOADING....</>}>
          <Page04 />
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
