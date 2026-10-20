// Reusable heading block used by every section, so spacing and style stay consistent.
export default function SectionHeading({ eyebrow, title, lead, light = false, align = "center" }) {
  return (
    <div className={`section-heading text-${align} ${light ? "is-light" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      {lead && <p className="section-lead">{lead}</p>}
    </div>
  );
}
