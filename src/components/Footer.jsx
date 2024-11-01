import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col md={12} className="align-items-center">
            <span>© 2024 Hafsana S | All rights reserved</span>
          </Col>
          
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
