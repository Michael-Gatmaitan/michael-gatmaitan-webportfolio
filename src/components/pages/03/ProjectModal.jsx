import { useEffect } from 'react';
import './ProjectModal.css';

const ProjectModal = props => {

  /* Data Sample
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
  */

  const {
    showProjectModal,
    setShowProjectModal,

    projectData,
    // setProjectData
  } = props;

  const {
    title,
    typeOfWeb,
    galleryLength,
    galleryDirectory,
    siteLink,
    githubRepoLink
  } = projectData;

  const modalStyle = {
    pointerEvents: showProjectModal ? 'auto' : 'none',
    opacity: showProjectModal ? 1 : 0
  };

  return (
    <div className="project-modal-container"
    // @ts-ignore
      style={modalStyle}
      onClick={() => setShowProjectModal(false)}
    >

      <div className="project-modal">

        <div className="modal-mobile-nav">
          <div />
    
          <div className="logo">
            <img src="./svg/my-logo/mg_logo_white.svg" alt="close_modal" />
          </div>

          <div className="close-project-modal">
            <img src="./svg/body-icons/close_white.svg" alt="close_modal" />
          </div>
        </div>

        <div className="project-gallery">
          <div className="gallery-slider-container">
            {galleryLength}
            {Array(galleryLength).fill().map(
              (_, i) => <ProjectGallerySlides key={i} imageIndex={i+1} />)}
          </div>
        </div>

      </div>

    </div>
  )
}

const ProjectGallerySlides = ({ imageIndex }) => {

  return (
    <div className="slide-container">
      {imageIndex}
    </div>
  )
}

export default ProjectModal;