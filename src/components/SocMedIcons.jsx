import './styles/SocMedIcons.css';

const SocMedIcons = () => {

  let icons = ['facebook', 'github', 'instagram', 'soundcloud', 'sololearn'];

  return (
    <div className="socmed-icons">
      {icons.map(icon => (
        <div className="socmed-container">
          <img src={`./svg/soc-med-icons/white-icons/${icon}.svg`} alt="socmed-icon" />
        </div>
      ))}
    </div>
  )
};

export default SocMedIcons;