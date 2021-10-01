import PageNumber from '../../PageNumber';
import './Page02.css';

const Page02 = () => {

  const statBarsData =[
    { language: "HTML", percentage: 90, key: 0 },
    { language: "CSS", percentage: 80, key: 1 },
    { language: "SASS", percentage: 75, key: 2 },
    { language: "JS", percentage: 85, key: 3 },
    { language: "React", percentage: 85, key: 4 },
    { language: "TS", percentage: 60, key: 5 },
  ]

  const toolsUsed = [
    {
      subHeaderTitle: "Coding",
      toolIcons: ['git', 'vscode', 'vscode-insiders', 'sublime-text']
    }, {
      subHeaderTitle: "Designing",
      toolIcons: ['adobe-xd', 'figma']
    }
  ];

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
          <button className="more-button">More</button>
        </div>

      </div>

      <div className="tools-container">
        <div className="tools-wrapper">
          
          <div className="tools">
            <div className="tools-header-container">
              <div className="tools-header">Tools I use</div>
              <div className="close-tools">
                <img src="./svg/body-icons/close-tools.svg" alt="" />
              </div>
            </div>

            {toolsUsed.map((tool, i) => (
              <ToolsUsedSection
                subHeaderTitle={tool.subHeaderTitle}
                toolIcons={tool.toolIcons}
                key={i}
              />
            ))}

          </div>

          <button className="see-resume">
            SEE RESUME
          </button>

        </div>
      </div>
      
      
      <PageNumber pageNumber={"02"} />
    </div>
  )
}

const ToolsUsedSection = ({ subHeaderTitle, toolIcons }) => (
  <div className="tools-used-section" style={{ marginTop: 20 }}>
    <div className="tools-sub-header">{subHeaderTitle}</div>
    <div className="tool-icons-container">
      {toolIcons.map((toolIcon, i) => (
        <div className="tool-icon" key={i}>
          <img src={`./svg/tools-logo/${toolIcon}.svg`} alt="" />
        </div>
      ))}
    </div>
  </div>
)

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