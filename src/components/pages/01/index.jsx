// Page 01
import PageNumber from '../../PageNumber';
import './Page01.css';
import { motion } from 'framer-motion';

const Page01 = () => {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  return (
    <div className="page page-01">

      <div className="page-01-content">
      
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="creative-developer"
        >
          <motion.div variants={item} transiton={item.transiton} className="creative">CREATIVE</motion.div>
          <motion.div variants={item} transiton={item.transiton} className="developer">DEVELOPER</motion.div>
          <motion.div variants={item} transiton={item.transiton} className="fe-dev">FRONT-END DEVELOPER</motion.div>
        </motion.div>

        <div className="overflow-image">
          <img src="./images/my-pics/profile-overflow.png" alt="overflow" />
        </div>
        
      </div>

      <PageNumber pageNumber={"01"} />
    </div>
  )
}

export default Page01;