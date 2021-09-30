import PageNumber from '../../PageNumber';
import './Page02.css';

const Page02 = () => {
  return (
    <div className="page page-02">

      <div className="stats">

        <div className="stat-des">
          <div className="stat-header">
            IM A FRONT-END DEVELOPER
          </div>
          <div className="stat-body-text">
          from Marilao, Bulacan, Philippines. I’m 18 years old, 
          and I taught myself how to code for 3 years now. 
          I finished my senior high-school last year (2020) 
          and now, I’m hoping that I can land my first job 
          in tech to help my parents financially stabled.
          </div>
        </div>

        <div className="stats-container">
          <StatBar languageLabel="HTML" percentage={90}/>
          <StatBar languageLabel="CSS" percentage={80}/>
          <StatBar languageLabel="SASS" percentage={75}/>
          <StatBar languageLabel="JS" percentage={85}/>
          <StatBar languageLabel="REACT" percentage={85}/>
          <StatBar languageLabel="TS" percentage={60}/>
        </div>

        <div className="more-button-container">
          <button className="more-button">More</button>
        </div>

      </div>

      <div className="tools"></div>
      
      
      <PageNumber pageNumber={"02"} />
    </div>
  )
}

const StatBar = ({ languageLabel, percentage }) => {

  return (
    <div className="stat-bar">
      <div className="percentage-container">

        <div className="percentage-wrapper">
          <div className="percentage-value" style={{ width: `${percentage}%`}} />
        </div>

      </div>
      
      <div className="language-label">{languageLabel}</div>
    </div>
  )
}

export default Page02;