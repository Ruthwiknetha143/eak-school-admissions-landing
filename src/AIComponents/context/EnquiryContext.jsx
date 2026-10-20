import { createContext, useCallback, useContext, useMemo, useState } from "react";
import EnquiryModal from "../components/EnquiryModal.jsx";
import ContactModal from "../components/ContactModal.jsx";

// One place that controls the two pop-ups, so any button on the page can open them:
//   const { openEnquiry, openContact } = useEnquiry();
const EnquiryContext = createContext(null);

export function EnquiryProvider({ children }) {
  const [enquiry, setEnquiry] = useState({ show: false, purpose: "Admission enquiry" });
  const [contactOpen, setContactOpen] = useState(false);

  const openEnquiry = useCallback((purpose = "Admission enquiry") => {
    setEnquiry({ show: true, purpose });
  }, []);
  const closeEnquiry = useCallback(() => setEnquiry((s) => ({ ...s, show: false })), []);
  const openContact = useCallback(() => setContactOpen(true), []);

  const value = useMemo(() => ({ openEnquiry, openContact }), [openEnquiry, openContact]);

  return (
    <EnquiryContext.Provider value={value}>
      {children}
      <EnquiryModal show={enquiry.show} purpose={enquiry.purpose} onClose={closeEnquiry} />
      <ContactModal show={contactOpen} onClose={() => setContactOpen(false)} />
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) throw new Error("useEnquiry must be used inside <EnquiryProvider>");
  return ctx;
}
