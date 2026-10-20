import { Col, Container, Row } from "react-bootstrap";
import SectionHeading from "./SectionHeading.jsx";
import { FACILITIES } from "../data/content.js";

// The coloured tiles are placeholders. To use real photos, replace the .facility-media div with
// <img src="/images/lab.jpg" alt="Students in the science lab" className="facility-media" loading="lazy" />
export default function Facilities() {
  return (
    <section id="facilities" className="section">
      <Container>
        <SectionHeading
          eyebrow="Campus life"
          title="Facilities"
          lead="Everything a growing child needs, all on one safe campus."
        />
        <Row className="g-4">
          {FACILITIES.map((f) => (
            <Col key={f.title} xs={6} md={4} lg={3}>
              <article className="facility-card h-100">
                <div className={`facility-media tone-${f.tone}`} aria-hidden="true">
                  <i className={`bi ${f.icon}`} />
                </div>
                <div className="facility-body">
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
