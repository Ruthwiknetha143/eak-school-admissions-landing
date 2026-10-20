import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NAV_LINKS, SCHOOL } from "../data/content.js";
import { useEnquiry } from "../context/EnquiryContext.jsx";
import useActiveSection from "../hooks/useActiveSection.js";

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

export default function SiteNavbar() {
  const { openEnquiry } = useEnquiry();
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  // Add a shadow once the page has been scrolled a little
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Esc closes the mobile menu
  useEffect(() => {
    if (!expanded) return undefined;
    const onKey = (e) => e.key === "Escape" && setExpanded(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [expanded]);

  return (
    <Navbar
      as="header"
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={setExpanded}
      className={`site-navbar ${scrolled || expanded ? "is-scrolled" : ""}`}
    >
      <Container>
        <Navbar.Brand href="#home" className="brand" onClick={() => setExpanded(false)}>
          <span className="brand-mark" aria-hidden="true">
            <i className="bi bi-mortarboard-fill" />
          </span>
          <span className="brand-text">
            {SCHOOL.name}
          </span>
        </Navbar.Brand>

        {/* On mobile the Enquire button stays visible next to the hamburger */}
        <button
          type="button"
          className="btn btn-gold btn-sm ms-auto me-2 d-lg-none"
          onClick={() => {
            setExpanded(false);
            openEnquiry();
          }}
        >
          Enquire
        </button>
        <Navbar.Toggle aria-controls="main-nav" aria-label="Toggle navigation menu" />

        <Navbar.Collapse id="main-nav">
          <Nav className="mx-lg-auto align-items-lg-center">
            {NAV_LINKS.map((link) => (
              <Nav.Link
                key={link.id}
                href={`#${link.id}`}
                active={active === link.id}
                onClick={() => setExpanded(false)}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
          <button
            type="button"
            className="btn btn-gold d-none d-lg-inline-flex"
            onClick={() => openEnquiry()}
          >
            Enquire Now
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
