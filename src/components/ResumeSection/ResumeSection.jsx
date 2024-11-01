import  { useRef, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import styles from './ResumeSection.module.css';
import bgVideo from '/blueBackground.mp4'; // Ensure the path is correct

function ResumeSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4; // Slow down video playback
    }
  }, []);

  return (
    <Container fluid className={`${styles.resumeSection} d-flex align-items-center`}>
      <div className="row">
        {/* Left Side with Video Background */}
        <div className={`col-12 col-md-12 ${styles.videoSection} d-flex align-items-center justify-content-center position-relative`}>
          <video ref={videoRef} autoPlay loop muted className={styles.backgroundVideo}>
            <source src={bgVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={`${styles.contentOverlay} text-center p-4`}>
            <h1 className={`${styles.heading} mb-3`}>Ready to contribute and grow in a dynamic environment.</h1>
            <p className={`${styles.heading} mb-4`}>
              As a Full Stack Developer, I blend creativity and technical skills to build seamless user experiences. With a background in MERN Stack, I’m passionate about delivering solutions that not only work well but make a difference.
            </p>
            <a
              href="/HafsanaSharafudheenResume.pdf" // Path to your resume file in the public folder
              download="HafsanaS.pdf" 
              className={`${styles.downloadButton} btn btn-primary`} // Use Bootstrap's btn classes for better styling
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ResumeSection;
