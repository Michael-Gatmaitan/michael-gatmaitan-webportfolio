import './ProjectModal.css';

const ProjectModal = (props) => {

  const {
    showProjectModal,
    setShowProjectModal
  } = props;

  const modalStyle = {
    pointerEvents: showProjectModal ? 'auto' : 'none',
    opacity: showProjectModal ? 1 : 0
  };

  const propagationStopper = e => e.stopPropagation();

  return (
    <div className="project-modal-container"
    // @ts-ignore
      style={modalStyle}
      onClick={() => setShowProjectModal(false)}
    >
      <div className="prev-container">
        <div className="prev">
          <img src="./svg/body-icons/prev.svg" alt="" />
        </div>
      </div>

      <div className="project-modal" onClick={ propagationStopper }>
        <div></div>
        <div></div>
      </div>

      <div className="next-container">
        <div className="next">
          <img src="./svg/body-icons/next.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default ProjectModal;