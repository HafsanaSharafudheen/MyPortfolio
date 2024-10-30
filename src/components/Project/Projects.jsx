import React, { useState } from 'react';
import styles from './Projects.module.css';

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`${styles.projectCard} ${isExpanded ? styles.expanded : ''}`}
      onClick={toggleExpand}
    >
      <div className={styles.cardContent}>
        <h2 className={styles.projectTitle}>{project.title}</h2>
        <p className={styles.projectDescription}>{project.shortDescription}</p>

        <div className={styles.links}>
          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className={styles.btn}>
            Live Demo
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.btn}>
            GitHub
          </a>
        </div>

        {isExpanded && (
          <div className={styles.expandedContent}>
            <h3>Features</h3>
            <ul>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <h3>Skills and Technologies</h3>
            <p>{project.skills}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
