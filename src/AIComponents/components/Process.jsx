import { Container } from "react-bootstrap";
import SectionHeading from "./SectionHeading.jsx";
import { STEPS } from "../data/content.js";
import { useEnquiry } from "../context/EnquiryContext.jsx";

// A single ordered list. CSS turns it into a vertical timeline on phones and a horizontal flow on desktop.
export default function Process() {
  const { openEnquiry } = useEnquiry();

  return (
    <section id="process" className="section section-soft">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="Admission process"
          lead="Five simple steps from first enquiry to the first day of school."
        />
        <ol className="steps">
          {STEPS.map((s, i) => (
            <li key={s.title} className="step">
              <span className="step-num">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="text-center mt-5">
          <button type="button" className="btn btn-navy btn-lg" onClick={() => openEnquiry("Admission enquiry")}>
            Start with an enquiry
          </button>
        </div>
      </Container>
    </section>
  );
}
