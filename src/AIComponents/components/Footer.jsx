import { Col, Container, Row } from "react-bootstrap";
import { NAV_LINKS, SCHOOL } from "../data/content.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <Row className="g-4">
          <Col lg={4}>
            <div className="brand mb-3">
              <span className="brand-mark" aria-hidden="true">
                <i className="bi bi-mortarboard-fill" />
              </span>
              <span className="brand-text">{SCHOOL.name}</span>
            </div>
            <p className="footer-muted">{SCHOOL.tagline}</p>
            <div className="social" aria-label="Social media (sample links)">
              {["facebook", "instagram", "youtube", "linkedin"].map((s) => (
                <a key={s} href="#home" aria-label={s}>
                  <i className={`bi bi-${s}`} aria-hidden="true" />
                </a>
              ))}
            </div>
          </Col>

          <Col xs={6} lg={2}>
            <h3>Quick links</h3>
            <ul className="footer-links">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`}>{l.label}</a>
                </li>
              ))}
            </ul>
          </Col>

          <Col xs={6} lg={3}>
            <h3>Admissions office</h3>
            <ul className="footer-links">
              <li>
                <a href={`tel:${SCHOOL.phone.replace(/\s/g, "")}`}>
                  <i className="bi bi-telephone" aria-hidden="true" /> {SCHOOL.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SCHOOL.email}`}>
                  <i className="bi bi-envelope" aria-hidden="true" /> {SCHOOL.email}
                </a>
              </li>
              <li className="footer-muted">
                <i className="bi bi-clock" aria-hidden="true" /> {SCHOOL.hours}
              </li>
            </ul>
          </Col>

          <Col lg={3}>
            <h3>Visit us</h3>
            <p className="footer-muted">
              <i className="bi bi-geo-alt" aria-hidden="true" /> {SCHOOL.address}
            </p>
          </Col>
        </Row>

        <div className="footer-bottom">
          <span>&copy; 2027-28 {SCHOOL.name}. All rights reserved. Sample content for demonstration.</span>
          <a href="#home">
            Back to top <i className="bi bi-arrow-up" aria-hidden="true" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
