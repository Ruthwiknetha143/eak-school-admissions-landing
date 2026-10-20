import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionHeading from "./SectionHeading.jsx";
import { HIGHLIGHTS } from "../data/content.js";
import useInView from "../hooks/useInView.js";

// Counts from 0 up to `end` once `start` becomes true. Skips the animation for people who prefer reduced motion.
function useCountUp(end, start, duration = 1400) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!start) return undefined;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(end);
      return undefined;
    }
    let raf;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(end * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, start, duration]);

  return n;
}

function Stat({ item, start }) {
  const n = useCountUp(item.value, start);
  return (
    <div className="stat">
      <div className="stat-value">
        {item.prefix}
        {n.toLocaleString("en-IN")}
        {item.suffix}
      </div>
      <div className="stat-label">{item.label}</div>
    </div>
  );
}

export default function Highlights() {
  const [ref, inView] = useInView({ threshold: 0.25 });

  return (
    <section id="highlights" className="section section-dark" ref={ref}>
      <Container>
        <SectionHeading eyebrow="At a glance" title="School highlights" light />
        <Row className="g-4 justify-content-center">
          {HIGHLIGHTS.map((h) => (
            <Col key={h.label} xs={6} md={4} xl={2}>
              <Stat item={h} start={inView} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
