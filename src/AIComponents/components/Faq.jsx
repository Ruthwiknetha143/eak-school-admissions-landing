import { Accordion, Col, Container, Row } from "react-bootstrap";
import SectionHeading from "./SectionHeading.jsx";
import { FAQS } from "../data/content.js";
import { useEnquiry } from "../context/EnquiryContext.jsx";

// react-bootstrap's Accordion keeps only one answer open at a time and handles aria-expanded + keyboard for us.
export default function Faq() {
  const { openEnquiry } = useEnquiry();

  return (
    <section id="faq" className="section">
      <Container>
        <SectionHeading eyebrow="Got questions?" title="Frequently asked questions" />
        <Row className="justify-content-center">
          <Col lg={8}>
            <Accordion defaultActiveKey="0" className="faq-accordion">
              {FAQS.map((f, i) => (
                <Accordion.Item eventKey={String(i)} key={f.q}>
                  <Accordion.Header>{f.q}</Accordion.Header>
                  <Accordion.Body>{f.a}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
            <p className="text-center mt-4 mb-0">
              Still have questions?{" "}
              <button type="button" className="btn btn-link p-0 align-baseline fw-semibold" onClick={() => openEnquiry("Call back")}>
                Talk to our admissions team
              </button>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
