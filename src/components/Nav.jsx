import './styles/Nav.css';
import { motion } from 'framer-motion';

const Nav = () => {

  const bttnAnimationProps = {
    hover: {
      backgroundColor: "#f00"
    },

    transition: {
      default: {
        duration: 0.5,
        ease: [1, 2, 2, 1]
      }
    }
  }

  return (
    <nav>
      <div className="nav-wrapper">

        <div className="logo-container">
          <div className="logo-image-container">
            <img src="./svg/my-logo/mg_logo_white.svg" alt="white-logo" />
          </div>

          <div className="logo-name">
            MICHAEL<br />GATMAITAN
          </div>

        </div>

        <div className="burger-menu">
          <img src="./svg/body-icons/burger-menu.svg" alt="burger-menu" />
        </div>

        {/* VISIBLE on Tablet & Desktop mode only */}
        <div className="button-container">
          <motion.button
            whileHover={bttnAnimationProps.hover}
            animate={bttnAnimationProps.transition}
          >ABOUT</motion.button>
          <motion.button
            whileHover={bttnAnimationProps.hover}
            transition={bttnAnimationProps.transition}
          >WORKS</motion.button>
          <motion.button
            whileHover={bttnAnimationProps.hover}
            transition={bttnAnimationProps.transition}
          >CONTACT</motion.button>
        </div>
        
      </div>
    </nav>
  )
}

export default Nav;