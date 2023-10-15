import './ProjectCard.css';

const ProjectCard = ({ projectCardInfo, setShowProjectModal, setProjectData }) => {
  const { title, logoSrc, bgHexColor } = projectCardInfo;

  const projectLogo = `./images/project-logos/${logoSrc}.png`;

  return (
    <div
      className='project-card'
      onClick={() => {
        setShowProjectModal(true);
        setProjectData(projectCardInfo);
      }}
    >
      <div className='project-title'>{title}</div>
      <div className='dark-bg' />
      <div
        className='project-logo-container'
        style={{ backgroundColor: bgHexColor }}
      >
        <img src={projectLogo} alt='' />
      </div>
    </div>
  );
};

export default ProjectCard;
