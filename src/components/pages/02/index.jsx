// import { useState } from 'react';
import PageNumber from '../../PageNumber';
import './Page02.css';

import ModalForTools from './ModalForTools.jsx';

const Page02 = ({ setShowModal }) => {

  const statBarsData =[
    { language: "HTML", percentage: 90, key: 0 },
    { language: "CSS", percentage: 80, key: 1 },
    { language: "SASS", percentage: 75, key: 2 },
    { language: "JS", percentage: 85, key: 3 },
    { language: "React", percentage: 85, key: 4 },
    { language: "TS", percentage: 60, key: 5 },
  ]

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

          {statBarsData.map(statData => (
            <StatBar
              languageLabel={statData.language}
              percentage={statData.percentage}
              key={statData.key}
            />
          ))}

        </div>

        <div className="more-button-container">
          <button
            className="more-button"
            onClick={ () => setShowModal(true) }
          >More</button>
        </div>

      </div>

      <div className="tools-container" >
        <ModalForTools
          setShowModal={setShowModal}
          // @ts-ignore
          modalType={true}
        />
      </div>
      
      
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