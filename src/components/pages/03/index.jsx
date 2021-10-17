// @ts-nocheck
import PageNumber from '../../PageNumber';
import './Page03.css';

const Page03 = props => {

  const {
    setProjectData,
    setShowProjectModal
  } = props;

  const cardInfos = [
    {
      id: 0,
      siteLink: "https://mchlgtmtn-posty.netlify.app/",
      githubRepoLink: "https://github.com/Michael-Gatmaitan/music-player-posty",
      typeOfWeb: "Music Website",
      bgHexColor: "#2F2F2F",
      title: "Posty",
      imgSrc: "posty",
      galleryDirectory: "posty-gallery",
      galleryLength: 5
    },
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
    {
      id: 2,
      siteLink: "https://aileen-molina-18.netlify.app/",
      githubRepoLink: "https://github.com/Michael-Gatmaitan/Aileen-18th",
      typeOfWeb: "Birthday celebration website",
      bgHexColor: "#FCCAC5",
      title: "Birthday Website",
      imgSrc: "",
      galleryDirectory: "birthday-website-gallery",
      galleryLength: 8
    },
    {
      id: 3,
      siteLink: "https://indicies.netlify.app/",
      githubRepoLink: "https://github.com/Michael-Gatmaitan/Indicies",
      typeOfWeb: "Website Template",
      bgHexColor: "#F7ECEE",
      title: "Indicies",
      imgSrc: "indicies",
      galleryDirectory: "indicies-gallery",
      galleryLength: 4
    },
    {
      id: 4,
      siteLink: "https://swarsplanets.netlify.app/",
      githubRepoLink: "https://github.com/Michael-Gatmaitan/starwars_react-query",
      typeOfWeb: "Data-fetching Website",
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