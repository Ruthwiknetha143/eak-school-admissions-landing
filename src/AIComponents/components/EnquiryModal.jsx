import { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { GRADES, PURPOSES, SCHOOL } from "../data/content.js";

const EMPTY = {
  parent: "",
  phone: "",
  email: "",
  child: "",
  grade: "",
  purpose: "Admission enquiry",
  message: "",
  consent: false,
};

// Returns an object like { phone: "Enter a valid phone number" }. Empty object = form is valid.
function validate(v) {
  const e = {};
  if (v.parent.trim().length < 2) e.parent = "Please enter the parent or guardian's name.";
  const digits = v.phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 13) e.phone = "Enter a valid phone number (10 digits).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "Enter a valid email address.";
  if (v.child.trim().length < 2) e.child = "Please enter your child's name.";
  if (!v.grade) e.grade = "Please choose a grade.";
  if (!v.consent) e.consent = "Please agree to be contacted so we can reply.";
  return e;
}

// Bootstrap's Modal already traps focus, closes on Esc / backdrop click, and returns focus to the button that opened it.
export default function EnquiryModal({ show, purpose, onClose }) {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Each time the modal opens, start fresh with the purpose chosen by the button that opened it
  useEffect(() => {
    if (show) {
      setValues({ ...EMPTY, purpose });
      setErrors({});
      setSubmitted(false);
    }
  }, [show, purpose]);

  const set = (field) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setValues((v) => ({ ...v, [field]: value }));
    // clear the error for a field as soon as the user edits it
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      // Frontend only: nothing is sent anywhere. A real site would POST `values` to an API here.
      setSubmitted(true);
    }
  };

  const field = (name) => ({
    value: values[name],
    onChange: set(name),
    isInvalid: !!errors[name],
  });

  return (
    <Modal show={show} onHide={onClose} centered scrollable size="lg" aria-labelledby="enquiry-title" className="enquiry-modal">
      {submitted ? (
        <>
          <Modal.Header closeButton>
            <Modal.Title as="h2" id="enquiry-title" className="visually-hidden">Enquiry received</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center py-5">
            <span className="success-mark" aria-hidden="true">
              <i className="bi bi-check-lg" />
            </span>
            <h3 className="mt-4">Thank you, {values.parent.split(" ")[0]}!</h3>
            <p className="text-muted mb-1" role="status">
              We have received your {values.purpose.toLowerCase()} for {values.child} ({values.grade}).
            </p>
            <p className="text-muted">Our admissions team will contact you within one working day.</p>
            <Button className="btn-navy mt-2 px-4" onClick={onClose}>
              Close
            </Button>
          </Modal.Body>
        </>
      ) : (
        <Form noValidate onSubmit={onSubmit}>
          <Modal.Header closeButton>
            <div>
              <Modal.Title as="h2" id="enquiry-title">Enquire about admission</Modal.Title>
              <p className="mb-0 text-muted small">Session {SCHOOL.session}. We reply within one working day.</p>
            </div>
          </Modal.Header>
          <Modal.Body>
            <Row className="g-3">
              <Col md={6}>
                <Form.Group controlId="enq-parent">
                  <Form.Label>Parent / guardian name *</Form.Label>
                  <Form.Control type="text" autoComplete="name" placeholder="e.g. Priya Nair" {...field("parent")} />
                  <Form.Control.Feedback type="invalid">{errors.parent}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="enq-phone">
                  <Form.Label>Phone *</Form.Label>
                  <Form.Control type="tel" inputMode="tel" autoComplete="tel" placeholder="98765 43210" {...field("phone")} />
                  <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="enq-email">
                  <Form.Label>Email *</Form.Label>
                  <Form.Control type="email" autoComplete="email" placeholder="you@example.com" {...field("email")} />
                  <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="enq-child">
                  <Form.Label>Child's name *</Form.Label>
                  <Form.Control type="text" placeholder="Your child's full name" {...field("child")} />
                  <Form.Control.Feedback type="invalid">{errors.child}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="enq-grade">
                  <Form.Label>Grade applying for *</Form.Label>
                  <Form.Select {...field("grade")}>
                    <option value="">Select grade</option>
                    {GRADES.map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">{errors.grade}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="enq-purpose">
                  <Form.Label>I would like a</Form.Label>
                  <Form.Select value={values.purpose} onChange={set("purpose")}>
                    {PURPOSES.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group controlId="enq-message">
                  <Form.Label>Message (optional)</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Anything you would like us to know?" value={values.message} onChange={set("message")} />
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Check
                  id="enq-consent"
                  type="checkbox"
                  label="I agree to be contacted by the school about this enquiry."
                  checked={values.consent}
                  onChange={set("consent")}
                  isInvalid={!!errors.consent}
                  feedback={errors.consent}
                  feedbackType="invalid"
                />
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="link" className="text-muted" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="btn-navy px-4">
              Submit enquiry
            </Button>
          </Modal.Footer>
        </Form>
      )}
    </Modal>
  );
}
