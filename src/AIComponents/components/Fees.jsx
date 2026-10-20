import { Col, Container, Row, Table } from "react-bootstrap";
import SectionHeading from "./SectionHeading.jsx";
import { FEES } from "../data/content.js";
import { useEnquiry } from "../context/EnquiryContext.jsx";

export default function Fees() {
  const { openEnquiry } = useEnquiry();

  return (
    <section id="fees" className="section">
      <Container>
        <SectionHeading
          eyebrow="Transparent pricing"
          title="Fee information"
          lead="Clear, simple fees with no hidden charges."
        />
        <Row className="justify-content-center">
          <Col lg={9}>
            {/* Table for tablets and desktops */}
            <div className="d-none d-md-block fee-table-wrap">
              <Table className="fee-table align-middle mb-0">
                <caption className="visually-hidden">Annual and admission fees by grade</caption>
                <thead>
                  <tr>
                    <th scope="col">Grade</th>
                    <th scope="col">Annual fee</th>
                    <th scope="col">Admission fee</th>
                  </tr>
                </thead>
                <tbody>
                  {FEES.map((f) => (
                    <tr key={f.grade}>
                      <th scope="row">{f.grade}</th>
                      <td>{f.annual}</td>
                      <td>{f.admission}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>

            {/* Cards for phones, so nothing scrolls sideways */}
            <div className="d-md-none d-grid gap-3">
              {FEES.map((f) => (
                <article key={f.grade} className="fee-card">
                  <h3>{f.grade}</h3>
                  <dl>
                    <div>
                      <dt>Annual fee</dt>
                      <dd>{f.annual}</dd>
                    </div>
                    <div>
                      <dt>Admission fee</dt>
                      <dd>{f.admission}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>

            <p className="fee-note">Sample figures for preview only. Final fees are confirmed by the school office.</p>
            <div className="text-center">
              <button type="button" className="btn btn-gold btn-lg" onClick={() => openEnquiry("Admission enquiry")}>
                Enquire about fees
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
