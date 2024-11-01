import SkillsData from "../../data";
import styles from './Skills.module.css';
import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';

function Skills() {
  return (
    <div>
      <h1 className="textCentre">SKILLS</h1>
      <div className={`row ${styles.Container}`}>
        {SkillsData.map((item, i) => (
          <div key={i} className="col-md-2 col-sm-6 col-4"> {/* Adjusting columns for different screen sizes */}
            <motion.div
              className={styles.card}
              initial={{
                opacity: 0,
                // If odd index card, slide from right instead of left
                x: i % 2 === 0 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 1, // Animation duration
                },
              }}
              viewport={{ once: true }}
            >
              <p className={styles.cardText}>{item.skill}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
