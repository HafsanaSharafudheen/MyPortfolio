import styles from './QuoteBox.module.css';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';

const QuoteBox = () => {
  // Function to handle LinkedIn link click
  const handleLinkedInClick = () => {
    window.location.href = "https://www.linkedin.com/in/hafsanas";
  };

  // Function to handle GitHub link click
  const handleGithubClick = () => {
    window.location.href = "https://github.com/HafsanaSharafudheen";
  };

  // Function to handle email link click
  const handleEmailClick = () => {
    window.location.href = "mailto:hafsanasharafudheen@gmail.com";
  };

  return (
    <Container>
      <Row>
        <Col md={12} className={`${styles.sentenceBox} text-center`}>
          <div className={styles.content}>
            <h1><span>I'm HAFSANA S</span></h1>
            <h1>Full Stack Developer</h1>
            <h6>Committed to delivering exceptional user experiences through thoughtful design and functionality.</h6>
          </div>
          <Col md={6} className="text-md-end text-center p-3">
            <button className={styles.buttonStyle} onClick={handleGithubClick}>
              <FaGithub size={24} />
            </button>
            <button className={styles.buttonStyle} onClick={handleLinkedInClick}>
              <FaLinkedin size={24} />
            </button>
            <button className={styles.buttonStyle} onClick={handleEmailClick}>
              <FaEnvelope size={24} />
            </button>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default QuoteBox;
