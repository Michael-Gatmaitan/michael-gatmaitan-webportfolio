import "./styles/Nav.css";
import { motion } from "framer-motion";

const Nav = ({ buttons, setShowSideBar }) => {
  const bttnAnimationProps = {
    hover: {
      backgroundColor: "#fff",
      color: "#000",

      default: {
        duration: 0.2,
      },
    },

    transition: {
      default: {
        duration: 0.5,
        ease: [1, 2, 2, 1],
      },
    },
  };

  return (
    <nav>
      <div className='nav-wrapper'>
        <div className='logo-container'>
          <div className='logo-image-container'>
            <img src='./svg/my-logo/mg_logo_white.svg' alt='white-logo' />
          </div>

          <div className='logo-name'>
            MICHAEL
            <br />
            GATMAITAN
          </div>
        </div>

        <div className='burger-menu' onClick={() => setShowSideBar(true)}>
          <img src='./svg/body-icons/burger-menu.svg' alt='burger-menu' />
        </div>

        {/* VISIBLE on Tablet & Desktop mode only */}
        <div className='button-container'>
          {buttons.map((button) => (
            <a href={`#${button.title.toLowerCase()}`} key={button.key}>
              <motion.button
                whileHover={bttnAnimationProps.hover}
                animate={bttnAnimationProps.transition}
              >
                {button.title}
              </motion.button>
            </a>
          ))}

          {/* <motion.button
            whileHover={bttnAnimationProps.hover}
            animate={bttnAnimationProps.transition}
          >ABOUT</motion.button>
          <motion.button
            whileHover={bttnAnimationProps.hover}
            transition={bttnAnimationProps.transition}
          >PROJECTS</motion.button>
          <motion.button
            whileHover={bttnAnimationProps.hover}
            transition={bttnAnimationProps.transition}
          >CONTACT</motion.button> */}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
