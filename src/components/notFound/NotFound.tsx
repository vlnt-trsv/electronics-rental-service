import { motion } from "framer-motion";

import styles from "./NotFound.module.scss";
import { Link } from "react-router-dom";

const marqueeVariants = {
  animate: {
    x: [0, -2000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};
const Marquee = () => {
  return (
    <div>
      <div className={styles.marquee}>
        <motion.div
          className={styles.track}
          variants={marqueeVariants}
          animate="animate"
          >
          <h1>
            404 not found 404 not found 404 not found 404 not found 404 not
            found 404 not found 404 not found
          </h1>
        </motion.div>
      </div>
      <div className={styles.back}>
        <Link to="/" className={styles.link}>
          Вернутся домой
        </Link>
      </div>
    </div>
  );
};
export default Marquee;
