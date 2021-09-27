import './styles/SocMedIcons.css';

const SocMedIcons = () => {

  let icons = ['facebook', 'github', 'instagram', 'soundcloud', 'sololearn'];
  let links = [
    'https://www.facebook.com/michael.gatmaitan29',
    'https://github.com/Michael-Gatmaitan',
    'https://www.instagram.com/mchlgtmtn/',
    'https://soundcloud.com/michael-gatmaitan',
    'https://www.sololearn.com/profile/9807990'
  ]
  return (
    <div className="socmed-icons">
      {icons.map((icon, key) => (
        <div className="socmed-container" key={key}>
          <a href={links[key]}>
            <img src={`./svg/soc-meds-icons/white-icons/${icon}.svg`} alt={icon} />
          </a>
        </div>
      ))}
    </div>
  )
};

export default SocMedIcons;