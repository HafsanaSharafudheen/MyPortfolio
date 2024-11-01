import React from 'react';
import styles from './QuoteBox.module.css';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';

const QuoteBox = () => {
  return (
    <Container>
      <Row>
        <Col md={12} className={`${styles.sentenceBox} text-center`}>
          <div className={styles.content}>
            <h1><span>I'm HAFSANA S</span></h1>
            <h1>Full Stack Developer</h1>
            <h6>Committed to delivering exceptional user experiences through thoughtful design and functionality.</h6>
          </div>
          <Col md={6} className="text-md-end text-center p-3 ">
            <button className={styles.buttonStyle}>
              <a href="https://github.com/HafsanaSharafudheen" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
              </a>
            </button>
            <button className={styles.buttonStyle}>
              <a href="www.linkedin.com/in/hafsanas" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
            </button>
            <button className={styles.buttonStyle}>
              <a href="mailto:hafsanasharafudheen@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope size={24} />
              </a>
            </button>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default QuoteBox;
