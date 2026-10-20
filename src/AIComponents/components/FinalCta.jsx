import { Container } from "react-bootstrap";
import { useEnquiry } from "../context/EnquiryContext.jsx";

export default function FinalCta() {
  const { openEnquiry, openContact } = useEnquiry();

  return (
    <section id="enquire" className="final-cta">
      <Container className="text-center">
        <p className="eyebrow text-gold">Admissions 2027-28</p>
        <h2>Give Your Child a Future-Ready Education</h2>
        <p className="lead">Seats are limited in every grade. Take the first step today and our team will guide you from there.</p>
        <div className="d-grid d-md-flex justify-content-md-center gap-3 mt-4">
          <button type="button" className="btn btn-gold btn-lg" onClick={() => openEnquiry("Admission enquiry")}>
            Apply Now
          </button>
          <button type="button" className="btn btn-light btn-lg" onClick={() => openEnquiry("Campus visit")}>
            Book a Campus Visit
          </button>
          <button type="button" className="btn btn-outline-light btn-lg" onClick={openContact}>
            Talk to Our Admissions Team
          </button>
        </div>
      </Container>
    </section>
  );
}
