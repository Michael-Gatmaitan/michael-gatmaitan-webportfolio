import React, { useRef } from 'react';
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
      galleryDirectory: "omo-music-gallery",
      imageName: "omo-music-snip-",
      gallerySnips: 11
    },
  */

  const {
    showProjectModal,
    setShowProjectModal,

    projectData,
    setProjectData
  } = props;

  const {
    title,
    typeOfWeb,
    gallerySnips,
    galleryDirectory,
    imageName,
    description,
    siteLink,
    githubRepoLink
  } = projectData;

  const modalStyle = {
    pointerEvents: showProjectModal ? 'auto' : 'none',
    opacity: showProjectModal ? 1 : 0
  };

  // Initializing DOM element handler
  let projectModal = useRef(null);
  let gallerySlider = useRef(null);
  const closeModal = e => {
    let targetClass = e.target.className;
    console.log(targetClass);
    if (!(targetClass === "project-modal-container" ||
        targetClass === "close-project-modal")) return

    setShowProjectModal(false);

    setProjectData([]);

    // Resetting Scroll have made by user
    projectModal.current.scrollTo(0, 0);
    gallerySlider.current.scrollTo(0, 0);
  }

  let totalScrollWidth;
  let viewableWidth;
  let barWidth;
  let scrollIndicator = useRef(null);
  const modalOnScroll = e => {
    totalScrollWidth = e.currentTarget.scrollWidth;
    viewableWidth = e.currentTarget.offsetWidth;
    barWidth = (e.currentTarget.scrollLeft / (totalScrollWidth - viewableWidth)) * 100;

    console.log(e.currentTarget.scrollWidth);
    scrollIndicator.current.style.width = `${barWidth}%`; 

    console.log(barWidth);
  }

  return (
    <div className="project-modal-container" style={modalStyle} onClick={closeModal}>

      <div className="project-modal" ref={projectModal}>

        <div className="modal-mobile-nav">
          <div />

          <div className="logo">
            <img src="./svg/my-logo/mg_logo_white.svg" alt="close_modal" />
          </div>

          <div className="close-project-modal">
            <img src="./svg/body-icons/close_white.svg" alt="close_modal" />
          </div>
        </div>

        <div className="project-modal-contents">

          {/* Project Gallery */}
          <div className="project-gallery">
            <div className="gallery-slider-container" ref={gallerySlider} onScroll={modalOnScroll}>
              <GallerySliderContainer
                gallerySnips={gallerySnips}
                galleryDirectory={galleryDirectory}
                imageName={imageName}
              />
            </div>

            <div className="gallery-scroll-indicator">
              <div className="indicator">
                <div className="bar" ref={scrollIndicator}/>
              </div>
            </div>
          </div>

          {/* Project Info */}
          <div className="project-info">
            <div className="project-title">{title}</div>
            <div className="project-type">{typeOfWeb}</div>
            <div className="project-description">{description}</div>

          </div>
          
          <div className="bottom-buttons">

            <div className="button-container">
              <a href={siteLink} target="_blank" rel="noreferrer">
                <button className="to-site">View site</button>
              </a>
              <a href={githubRepoLink} target="_blank" rel="noreferrer">
                <button className="to-repo">GitHub Repo</button>
              </a>
            </div>
            
            <div className="close-project-modal">
              <img src="./svg/body-icons/close_white.svg" alt="close_modal" />
            </div>
          </div>


        </div>

      </div>

    </div>
  )
}

const GallerySliderContainer = props => {
  const {
    gallerySnips,
    galleryDirectory,
    imageName
    // title
  } = props;
  // const imageSrc = `./images/project-gallery/${galleryDirectory}/${title.toLowerCase().replaceAll(" ", "-")}-snip-${imageIndex}.png`;

  return (
    <React.Fragment>
      {Array(gallerySnips).fill(0).map((e, i) => (
        <div className="slider-container" key={i}>
          <img src={`./images/project-gallery/${galleryDirectory}/${imageName}${i + 1}.jpg`} alt="project_image" />
        </div>
      ))}
    </React.Fragment>
  )
}

export default ProjectModal;