import { Col, Container, Row } from "react-bootstrap";
import SectionHeading from "./SectionHeading.jsx";
import { PROGRAMS } from "../data/content.js";
import { useEnquiry } from "../context/EnquiryContext.jsx";

export default function Programs() {
  const { openEnquiry } = useEnquiry();

  return (
    <section id="programs" className="section">
      <Container>
        <SectionHeading
          eyebrow="Academics"
          title="Academic programs"
          lead="Four stages, one continuous journey from first day to graduation."
        />
        <Row className="g-4">
          {PROGRAMS.map((p, i) => (
            <Col key={p.level} xs={12} md={6} xl={3}>
              <article className="program-card h-100">
                <header>
                  <span className="program-num">0{i + 1}</span>
                  <h3>{p.level}</h3>
                </header>
                <div className="program-meta">
                  <span>{p.grades}</span>
                  <span>{p.ages}</span>
                </div>
                <p>{p.text}</p>
                <ul className="check-list">
                  {p.features.map((f) => (
                    <li key={f}>
                      <i className="bi bi-check-circle-fill" aria-hidden="true" /> {f}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="btn btn-link link-arrow p-0 mt-auto"
                  onClick={() => openEnquiry("Admission enquiry")}
                >
                  Enquire about {p.level} <i className="bi bi-arrow-right" aria-hidden="true" />
                </button>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
