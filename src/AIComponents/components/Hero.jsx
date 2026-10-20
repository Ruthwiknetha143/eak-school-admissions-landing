import { Col, Container, Row } from "react-bootstrap";
import { HERO_CHIPS, SCHOOL } from "../data/content.js";
import { useEnquiry } from "../context/EnquiryContext.jsx";

export default function Hero() {
  const { openEnquiry } = useEnquiry();

  return (
    <section id="home" className="hero">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6} className="order-2 order-lg-1">
            <span className="badge-open">
              <i className="bi bi-megaphone-fill" aria-hidden="true" /> Admissions Open
            </span>
            <h1 className="hero-title">{SCHOOL.name}</h1>
            <p className="hero-session">Academic Session {SCHOOL.session}</p>
            <p className="hero-lead">
              A safe, modern campus where every child is challenged, supported and celebrated,
              from Grade 1 to Grade 12.
            </p>

            <div className="d-grid d-sm-flex gap-3 mb-4">
              <button type="button" className="btn btn-navy btn-lg" onClick={() => openEnquiry("Admission enquiry")}>
                Apply Now <i className="bi bi-arrow-right ms-1" aria-hidden="true" />
              </button>
              <a href="https://eak-international-school-sigma.vercel.app/" type="button" className="btn btn-outline-navy btn-lg" target="_blank">
                Visit original site ✦
              </a>
            </div>

            <Row className="g-3 hero-chips" as="ul">
              {HERO_CHIPS.map((c) => (
                <Col xs={4} as="li" key={c.label}>
                  <div className="hero-chip">
                    <strong>{c.value}</strong>
                    <span>{c.label}</span>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>

          <Col lg={6} className="order-1 order-lg-2">
            {/* Illustrated placeholder: replace the contents of .hero-visual with <img src="..." alt="..." /> */}
            <div className="hero-visual" role="img" aria-label="Illustration of the school campus with students">
              <div className="hv-sun" />
              <div className="hv-building">
                <i className="bi bi-bank2" />
              </div>
              <div className="hv-kids">
                <i className="bi bi-people-fill" />
              </div>
              <div className="hv-tag">
                <i className="bi bi-calendar-event" aria-hidden="true" />
                <div>
                  <strong>Applications close 15 Jan</strong>
                  <span>Limited seats per grade</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
