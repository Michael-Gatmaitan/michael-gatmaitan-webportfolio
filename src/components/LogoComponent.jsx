import Logo from "/svg/my-logo/mg_logo_white.svg";
import './styles/LogoComponent.css';

const LogoComponent = () => {
  return (
    <div className="logo-container">
      <div className="logo-image-container">
        <img src={Logo} alt="white-logo" />
      </div>

      <div className="logo-name">
        MICHAEL
        <br />
        GATMAITAN
      </div>
    </div>
  );
};

export default LogoComponent;
