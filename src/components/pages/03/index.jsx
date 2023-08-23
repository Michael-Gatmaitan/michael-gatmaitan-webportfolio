import { lazy, Suspense } from "react";
import PageNumber from "../../PageNumber";
import "./Page03.css";
import { Skeleton } from "../../skeletons/Skeletons";

const Card = lazy(() => import("./Card.jsx"));

const Page03 = (props) => {
  const { setProjectData, setShowProjectModal, cardInfos } = props;

  return (
    <div className='page page-03'>
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
