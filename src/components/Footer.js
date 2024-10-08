import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-icon-9_resized.png";
import navIcon3 from "../assets/img/fivers.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
          <h2 color="white">Hasnain Naqvi</h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/hasnain-naqvi-068272234"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/hasnainnqv"><img src={navIcon2} alt="" /></a>
                <a href="https://www.fiverr.com/s/42XdGQk"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
