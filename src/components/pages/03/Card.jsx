import "./Card.css";

const Card = ({ cardInfo, setShowProjectModal, setProjectData }) => {
  const { title, logoSrc, bgHexColor } = cardInfo;

  const projectLogo = `./images/project-logos/${logoSrc}.png`;

  return (
    <div
      className='project-card'
      onClick={() => {
        setShowProjectModal(true);
        setProjectData(cardInfo);
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

export default Card;
