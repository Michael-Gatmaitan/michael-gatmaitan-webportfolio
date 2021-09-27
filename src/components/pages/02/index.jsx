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
            A simple personal portfolio website can never do you wrong. Simple can be beautiful. When going for a minimalist approach, you must focus on other things to grab the user’s attention and really understand the experience the user will take away from viewing your online portfolio.
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