// @ts-nocheck
import PageNumber from '../../PageNumber';
import './Page03.css';

const Page03 = ({ setShowProjectModal }) => {

  const cardInfos = [
    {
      id: 0,
      bgHexColor: "#2F2F2F",
      title: "Posty",
      imgSrc: "posty",
      galleryDirectory: "posty-gallery",
      galleryLength: 5
    },
    {
      id: 1,
      bgHexColor: "#0B0B14",
      title: "OMO Music",
      imgSrc: "omo",
      galleryDirectory: "omo-music-gallery",
      galleryLength: 11
    },
    {
      id: 2,
      bgHexColor: "#FCCAC5",
      title: "Birthday Website",
      imgSrc: "",
      galleryDirectory: "birthday-website-gallery",
      galleryLength: 8
    },
    {
      id: 3,
      bgHexColor: "#F7ECEE",
      title: "Indicies",
      imgSrc: "indicies",
      galleryDirectory: "indicies-gallery",
      galleryLength: 4
    },
    {
      id: 4,
      bgHexColor: "#121212",
      title: "Star Wars' Planets",
      imgSrc: "starwars",
      galleryDirectory: "starwars-gallery",
      galleryLength: 0
    }
  ]

  return (
    <div className="page page-03">

      <div className="my-works-header">My Works</div>
      <div className="card-container">
        {cardInfos.map(cardInfo => (
          <Card
            cardInfo={cardInfo}
            id={cardInfo.id}
            setShowProjectModal={setShowProjectModal}
          />
        ))}
      </div>

      <PageNumber pageNumber={"03"} />  
    </div>
  )
}

const Card = ({ cardInfo, setShowProjectModal }) => {

  const {
    title,
    imgSrc,
    bgHexColor
    // galleryDirectory
  } = cardInfo;

  const projectLogo = `./images/project-logos/${imgSrc}.png`;

  return (
    <div className="project-card"
      onClick={() => setShowProjectModal(true)}
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