import "./styles/SideBar.css";
import { motion } from "framer-motion";

const SideBar = ({ buttons, setShowSideBar }) => {
  const closeSideBar = () => setShowSideBar(false);
  return (
    <motion.div
      key='sidebar'
      className='sidebar'
      initial={{
        opacity: 0,
        pointerEvents: "auto",
      }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, pointerEvents: "none" }}
      transition={{ ease: "linear", duration: 0.1 }}
    >
      <div className='sidebar-nav'>
        <img
          src='./svg/body-icons/close_white.svg'
          alt='alt'
          onClick={closeSideBar}
        />
      </div>

      <div className='button-container'>
        {buttons.map((button) => (
          <a
            href={`#${button.title.toLowerCase()}`}
            key={button.key}
            onClick={closeSideBar}
          >
            <button>{button.title}</button>
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default SideBar;
