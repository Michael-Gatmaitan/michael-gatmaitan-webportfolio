import './styles/SocMedIcons.css';

const SocMedIcons = () => {

  let icons = ['facebook', 'github', 'instagram', 'soundcloud', 'sololearn'];

  return (
    <div className="socmed-icons">
      {icons.map(icon => (
        <div className="socmed-container">
          <img src={`./svg/soc-meds-icons/white-icons/${icon}.svg`} alt={icon} />
        </div>
      ))}
    </div>
  )
};

export default SocMedIcons;