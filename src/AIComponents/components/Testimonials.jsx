import { Carousel, Col, Container, Row } from "react-bootstrap";
import SectionHeading from "./SectionHeading.jsx";
import { TESTIMONIALS } from "../data/content.js";

function Stars({ n }) {
  return (
    <span className="stars" role="img" aria-label={`${n} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <i key={i} className={`bi ${i <= n ? "bi-star-fill" : "bi-star"}`} aria-hidden="true" />
      ))}
    </span>
  );
}

function Quote({ t }) {
  const initials = t.name.split(" ").map((w) => w[0]).join("");
  return (
    <figure className="quote-card h-100">
      <Stars n={t.rating} />
      <blockquote>{t.text}</blockquote>
      <figcaption>
        <span className="avatar" aria-hidden="true">{initials}</span>
        <span>
          <strong>{t.name}</strong>
          <small>{t.role}</small>
        </span>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section section-soft">
      <Container>
        <SectionHeading eyebrow="Parent voices" title="What parents say" />

        {/* Tablet and desktop: cards in a grid */}
        <Row className="g-4 d-none d-md-flex">
          {TESTIMONIALS.map((t) => (
            <Col key={t.name} md={6} lg={3}>
              <Quote t={t} />
            </Col>
          ))}
        </Row>

        {/* Phone: slider with arrows and dots */}
        <Carousel className="quote-carousel d-md-none" interval={null} indicators controls variant="dark">
          {TESTIMONIALS.map((t) => (
            <Carousel.Item key={t.name}>
              <Quote t={t} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
