
import './ModalForTools.css';

const ModalForTools = ({ setShowModal }) => {

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
    <div className="tools-wrapper">
      
      <div className="tools">
        <div className="tools-header-container">
          <div className="tools-header">Tools I use</div>
          <div className="close-tools" onClick={ () => setShowModal(false) }>
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
);

export default ModalForTools;