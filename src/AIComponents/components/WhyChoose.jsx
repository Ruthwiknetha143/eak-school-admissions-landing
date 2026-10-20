import { Col, Container, Row } from "react-bootstrap";
import SectionHeading from "./SectionHeading.jsx";
import { WHY } from "../data/content.js";

export default function WhyChoose() {
  return (
    <section id="why" className="section section-soft">
      <Container>
        <SectionHeading
          eyebrow="Why EAK"
          title="Why choose EAK International School?"
          lead="Six reasons families trust us with their children's most important years."
        />
        <Row className="g-4">
          {WHY.map((item) => (
            <Col key={item.title} xs={12} md={6} lg={4}>
              <article className="feature-card h-100">
                <span className="icon-bubble" aria-hidden="true">
                  <i className={`bi ${item.icon}`} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
