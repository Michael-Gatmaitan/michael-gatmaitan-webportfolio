
import './styles/Nav.css';

const Nav = () => {
  return (
    <nav>
      <div className="nav-wrapper">

        <div className="logo-container">
          <div className="logo-image-container">
            <img src="./svg/my-logo/mg_logo_white.svg" alt="white-logo" />
          </div>

          <div className="logo-name">
            MICHAEL<br />
            GATMAITAN
          </div>

        </div>

        <div className="burger-menu">
          <img src="./svg/body-icons/burger-menu.svg" alt="burger-menu" />
        </div>

        {/* VISIBLE on Tablet & Desktop mode only */}
        <div className="button-container">
          <button>ABOUT</button>
          <button>WORKS</button>
          <button>CONTACT</button>
        </div>
        
      </div>
    </nav>
  )
}

export default Nav;