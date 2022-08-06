import { useEffect } from 'react';
import './ProjectModal.css';

const ProjectModal = props => {

  const {
    showProjectModal,
    setShowProjectModal,

    projectData,
    // setProjectData
  } = props;

  const {
    bgHexColor,
    title,
    typeOfWeb,
    imgSrc
  } = projectData;

  useEffect(() => {
    console.log(projectData);
  }, [projectData]);

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

        <div className="project-info">
          <div className="project-info-header">
            <div className="project-logo" style={{ backgroundColor: bgHexColor }}>
              <img src={`./images/project-logos/${imgSrc}.png`} alt="" />
            </div>
            <div className="project-title">
              <div className="project-name">{title}</div>
              <div className="project-type">{typeOfWeb}</div>
            </div>
          </div>

          {/*  */}

          <div className="project-info-gallery">
            <div className="gallery-container">

              <div className="gallery-card">
                <img src="./images/project-gallery/omo-music-gallery/omo-music-snip-7.jpg" alt="" />
              </div>

            </div>
          </div>

          {/*  */}

          <div className="project-info-footer">
            <button>Open Website</button>
            <button>Github repo</button>
          </div>
        </div>

        <div className="project-description"></div>
      </div>

    </div>
  )
}

export default ProjectModal;