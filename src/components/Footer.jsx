import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub,FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer >
      <Container>
        <Row>
          <Col md={6} className="d-flex align-items-center">
            <span>© 2024 Hafsana S | All rights reserved</span>
          </Col>
          <Col md={6} className="text-md-end text-center p-3">
            <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="icon-link">
              <FaGithub size={24} />
            </a>
            <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="icon-link">
              <FaLinkedin size={24} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
