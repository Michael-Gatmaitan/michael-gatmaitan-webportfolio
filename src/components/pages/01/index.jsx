// Page 01
import PageNumber from "../../PageNumber";
import "./Page01.css";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.1,
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

const Page01 = () => {
  return (
    <div className="page page-01" id="main">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        // whileInView={{ scale: 1.5 }}
        className="page-01-content"
      >
        <div className="creative-developer">
          <motion.div variants={item} className="creative">
            CREATIVE
          </motion.div>
          <motion.div variants={item} className="developer">
            DEVELOPER
          </motion.div>
          <motion.div variants={item} className="fe-dev">
            FRONT-END DEVELOPER
          </motion.div>
        </div>

        <motion.div variants={item} className="overflow-image">
          <img
            src="./images/my-pics/profile-overflow.png"
            alt="overflow"
            loading="lazy"
          />
        </motion.div>
      </motion.div>

      <PageNumber pageNumber={"01"} />
    </div>
  );
};

export default Page01;
