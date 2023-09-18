// Page 01
import PageNumber from "../../PageNumber";
import "./Page01.css";
import { motion } from "framer-motion";

const Page01 = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div className='page page-01' id='main'>
      <div className='page-01-content'>
        <motion.div
          variants={container}
          initial='hidden'
          animate='show'
          whileInView={{ scale: 1.5 }}
          className='creative-developer'
        >
          <motion.div variants={item} className='creative'>
            CREATIVE
          </motion.div>
          <motion.div variants={item} className='developer'>
            DEVELOPER
          </motion.div>
          <motion.div variants={item} className='fe-dev'>
            FRONT-END DEVELOPER
          </motion.div>
        </motion.div>

        <motion.div variants={item} className='overflow-image'>
          <img
            src='./images/my-pics/profile-overflow.png'
            alt='overflow'
            loading='lazy'
          />
        </motion.div>
      </div>

      <PageNumber pageNumber={"01"} />
    </div>
  );
};

export default Page01;
