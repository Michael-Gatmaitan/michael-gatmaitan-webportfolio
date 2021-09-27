// Page 01
import PageNumber from '../../PageNumber';
import './Page01.css';

const Page01 = () => {
  return (
    <div className="page page-01">

      <div className="page-01-content">
      
        <div className="creative-developer">
          <div className="creative">CREATIVE</div>
          <div className="developer">DEVELOPER</div>
          <div className="fe-dev">FRONT-END DEVELOPER</div>
        </div>

        <div className="overflow-image">
          <img src="./images/my-pics/profile-overflow.png" alt="overflow" />
        </div>
        
      </div>

      <PageNumber pageNumber={"01"} />
    </div>
  )
}

export default Page01;