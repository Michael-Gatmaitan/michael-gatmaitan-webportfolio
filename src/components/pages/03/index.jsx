// @ts-nocheck
import PageNumber from '../../PageNumber';
import './Page03.css';

const Page03 = () => {

  const cardInfos = [
    {
      id: 0,
      title: "Posty",
      imgSrc: "posty",
      galleryDirectory: "posty-gallery",
      galleryLength: 5
    },
    {
      id: 1,
      title: "OMO Music",
      imgSrc: "omo-music",
      galleryDirectory: "omo-music-gallery",
      galleryLength: 11
    },
    {
      id: 2,
      title: "Birthday Website",
      imgSrc: "",
      galleryDirectory: "birthday-website-gallery",
      galleryLength: 8
    },
    {
      id: 3,
      title: "Indicies",
      imgSrc: "indicies",
      galleryDirectory: "indicies-gallery",
      galleryLength: 4
    },
    {
      id: 4,
      title: "Star Wars' Planets",
      imgSrc: "starwars",
      galleryDirectory: "starwars-gallery",
      galleryLength: 0
    }
  ]

  return (
    <div className="page page-03">
      <div className="card-container">
        {cardInfos.map(cardInfo => (
          <Card cardInfo={cardInfo} id={cardInfo.id} />
        ))}
      </div>

      <PageNumber pageNumber={"03"} />
    </div>
  )
}

const Card = ({ cardInfo }) => {

  return (
    <div className="project-card">
      <div className="dark-bg" />
      <div className="project-title">
        {cardInfo.title}
      </div>
    </div>
  )
}

export default Page03;