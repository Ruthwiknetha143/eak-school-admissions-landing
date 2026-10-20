import { useState } from "react";
import { Col, Container, Form, ProgressBar, Row } from "react-bootstrap";
import SectionHeading from "./SectionHeading.jsx";
import { DOCUMENTS } from "../data/content.js";

// Parents can tick off what they already have. It is only kept in memory, nothing is stored.
export default function Documents() {
  const [checked, setChecked] = useState({});
  const count = DOCUMENTS.filter((d) => checked[d.id]).length;

  const toggle = (id) => setChecked((c) => ({ ...c, [id]: !c[id] }));

  return (
    <section id="documents" className="section section-soft">
      <Container>
        <SectionHeading
          eyebrow="Be prepared"
          title="Required documents"
          lead="Keep these ready before you apply. Tick each one off as you collect it."
        />
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="doc-panel">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <strong aria-live="polite">
                  {count} of {DOCUMENTS.length} documents ready
                </strong>
                {count === DOCUMENTS.length && (
                  <span className="text-success fw-semibold">
                    <i className="bi bi-patch-check-fill" aria-hidden="true" /> All set!
                  </span>
                )}
              </div>
              <ProgressBar
                now={(count / DOCUMENTS.length) * 100}
                className="doc-progress mb-4"
                aria-label="Documents ready"
              />
              <ul className="doc-list">
                {DOCUMENTS.map((d) => (
                  <li key={d.id} className={checked[d.id] ? "is-done" : ""}>
                    <Form.Check
                      type="checkbox"
                      id={`doc-${d.id}`}
                      checked={!!checked[d.id]}
                      onChange={() => toggle(d.id)}
                      label={
                        <span>
                          <span className="doc-label">{d.label}</span>
                          <span className="doc-hint">{d.hint}</span>
                        </span>
                      }
                    />
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
