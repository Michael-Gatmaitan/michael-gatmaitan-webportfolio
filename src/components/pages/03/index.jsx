import { lazy, Suspense } from "react";
import PageNumber from "../../PageNumber";
import "./Page03.css";
import { Skeleton } from "../../skeletons/Skeletons";

const Card = lazy(() => import("./Card.jsx"));

const cardInfos = [
  {
    id: 0,
    siteLink: "https://mchlgtmtn-posty.netlify.app/",
    githubRepoLink: "https://github.com/Michael-Gatmaitan/music-player-posty",
    bgHexColor: "#2F2F2F",
    description:
      "My first project of music website and understood the concepts of web audio.",
    typeOfWeb: "Music Website",
    title: "Posty",
    logoSrc: "posty",
    galleryDirectory: "posty-gallery",
    imageName: "posty-snip-",
    gallerySnips: 5,
  },
  {
    id: 1,
    siteLink: "https://omo-music.netlify.app",
    githubRepoLink: "https://github.com/Michael-Gatmaitan/omo-music",
    bgHexColor: "#0B0B14",
    description:
      "OMO Music is a music website where you can play some songs of international artists. Enjoy over 500+ songs and 50+ artists.",
    typeOfWeb: "Music Website",
    title: "OMO Music",
    logoSrc: "omo",
    galleryDirectory: "omo-music-gallery",
    imageName: "omo-music-snip-",
    gallerySnips: 11,
  },
  // {
  //   id: 2,
  //   siteLink: "https://aileen-molina-18.netlify.app/",
  //   githubRepoLink: "https://github.com/Michael-Gatmaitan/Aileen-18th",
  //   bgHexColor: "#FCCAC5",
  //   description: "A Birthday website commision.",
  //   typeOfWeb: "Birthday celebration website",
  //   title: "Birthday Website",
  //   logoSrc: "", // No logo
  //   galleryDirectory: "birthday-website-gallery",
  //   imageName: "birthday-website-snip-",
  //   gallerySnips: 8,
  // },
  {
    id: 3,
    siteLink: "https://indicies.netlify.app/",
    githubRepoLink: "https://github.com/Michael-Gatmaitan/Indicies",
    bgHexColor: "#F7ECEE",
    description: "Basic HTML, CSS, JS template.",
    typeOfWeb: "Website Template",
    title: "Indicies",
    logoSrc: "indicies",
    galleryDirectory: "indicies-gallery",
    imageName: "indicies-snip-",
    gallerySnips: 4,
  },
  {
    id: 4,
    siteLink: "https://swarsplanets.netlify.app/",
    githubRepoLink: "https://github.com/Michael-Gatmaitan/starwars_react-query",
    bgHexColor: "#121212",
    description: "Data fetching of swars free API using react-query.",
    typeOfWeb: "Data-fetching Website",
    title: "Star Wars' Planets",
    logoSrc: "starwars",
    galleryDirectory: "starwars-planets-gallery",
    imageName: "star-wars-planets-snip-",
    gallerySnips: 4,
  },
  {
    id: 5,
    siteLink: "https://taskit-mg.netlify.app",
    githubRepoLink: "https://github.com/Michael-Gatmaitan/Task-it",
    bgHexColor: "#fcfdff",
    description:
      "Task-it is a web-based project management system. It is inspired by Trello that uses Kanban boards, cards and lists to easily organize projects.", // Fill up this field
    typeOfWeb: "Project manager website",
    title: "Taskit",
    logoSrc: "taskit", // FGill uip this field
    galleryDirectory: "task-it",
    imageName: "task-it-snip-",
    gallerySnips: 10,
  },
];

const Page03 = (props) => {
  const { setProjectData, setShowProjectModal } = props;

  return (
    <div className='page page-03' id='projects'>
      <div className='my-works-header'>My Projects</div>
      <div className='card-container'>
        {cardInfos.map((cardInfo) => (
          <Suspense
            fallback={<Skeleton elementClassName='card' />}
            key={cardInfo.id}
          >
            <Card
              cardInfo={cardInfo}
              id={cardInfo.id}
              setShowProjectModal={setShowProjectModal}
              setProjectData={setProjectData}
            />
          </Suspense>
        ))}
      </div>

      <PageNumber pageNumber={"03"} />
    </div>
  );
};

export default Page03;
