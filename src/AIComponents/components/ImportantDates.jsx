import { Col, Container, Row } from "react-bootstrap";
import SectionHeading from "./SectionHeading.jsx";
import { DATES } from "../data/content.js";

export default function ImportantDates() {
  return (
    <section id="dates" className="section">
      <Container>
        <SectionHeading
          eyebrow="Mark your calendar"
          title="Important dates"
          lead="Admissions for the 2027-28 session follow this timeline."
        />
        <Row className="g-4 justify-content-center">
          {DATES.map((d) => (
            <Col key={d.title} xs={12} sm={6} lg className="date-col">
              <article className={`date-card h-100 ${d.highlight ? "is-highlight" : ""}`}>
                <div className="date-badge">
                  <strong>{d.day}</strong>
                  <span>{d.month}</span>
                </div>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
                {d.highlight && <span className="date-flag">Don't miss</span>}
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
