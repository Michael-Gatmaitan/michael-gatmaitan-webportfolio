import { motion } from 'framer-motion';
import './styles/ScrollDown.css';

const ScrollDown = () => {

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  return (
    <motion.div
      className="scroll-down"
      initial="hidden"
      animate="visible"
      variants={variants}
    >

      <div className="text">Scroll Down</div>
      <div className="arrow-container">
        <img src="./svg/body-icons/arrow.svg" alt="arrow" />
      </div>

    </motion.div>
  )
}

export default ScrollDown;