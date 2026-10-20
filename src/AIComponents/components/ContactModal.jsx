import { Button, Modal } from "react-bootstrap";
import { SCHOOL } from "../data/content.js";

// Small pop-up for the "Talk to Our Admissions Team" button.
export default function ContactModal({ show, onClose }) {
  return (
    <Modal show={show} onHide={onClose} centered aria-labelledby="contact-title">
      <Modal.Header closeButton>
        <Modal.Title as="h2" id="contact-title">Talk to our admissions team</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-muted">We are happy to answer questions about fees, dates and the application. {SCHOOL.hours}.</p>
        <ul className="contact-list">
          <li>
            <i className="bi bi-telephone-fill" aria-hidden="true" />
            <a href={`tel:${SCHOOL.phone.replace(/\s/g, "")}`}>{SCHOOL.phone}</a>
          </li>
          <li>
            <i className="bi bi-envelope-fill" aria-hidden="true" />
            <a href={`mailto:${SCHOOL.email}`}>{SCHOOL.email}</a>
          </li>
          <li>
            <i className="bi bi-geo-alt-fill" aria-hidden="true" />
            <span>{SCHOOL.address}</span>
          </li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn-navy px-4" onClick={onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
