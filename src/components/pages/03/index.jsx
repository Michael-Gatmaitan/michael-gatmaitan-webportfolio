// @ts-nocheck
import PageNumber from '../../PageNumber';
import './Page03.css';

const Page03 = props => {

  const {
    setProjectData,
    setShowProjectModal,
    cardInfos
  } = props;

  return (
    <div className="page page-03">

      <div className="my-works-header">My Works</div>
      <div className="card-container">
        {cardInfos.map((cardInfo, i) => (
          <Card
            cardInfo={cardInfo}
            id={cardInfo.id}
            setShowProjectModal={setShowProjectModal}
            setProjectData={setProjectData}
            key={i}
          />
        ))}
      </div>

      <PageNumber pageNumber={"03"} />
    </div>
  )
}

const Card = ({ cardInfo, setShowProjectModal, setProjectData }) => {

  const {
    title,
    imgSrc,
    bgHexColor
    // galleryDirectory
  } = cardInfo;

  const projectLogo = `./images/project-logos/${imgSrc}.png`;

  return (
    <div className="project-card"
      onClick={() => {
        setShowProjectModal(true);
        setProjectData(cardInfo);
      }}
    >
      <div className="project-title">{title}</div>
      <div className="dark-bg" />
      <div className="project-logo-container"
        style={{backgroundColor: bgHexColor}}
      >
        <img src={projectLogo} alt="" />
      </div>
    </div>
  )
}

export default Page03;