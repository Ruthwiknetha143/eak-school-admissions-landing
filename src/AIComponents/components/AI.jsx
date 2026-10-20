import { EnquiryProvider } from "../context/EnquiryContext.jsx";
import SiteNavbar from "./SiteNavbar.jsx";
import Hero from "./Hero.jsx";
import WhyChoose from "./WhyChoose.jsx";
import Programs from "./Programs.jsx";
import Highlights from "./Highlights.jsx";
import Facilities from "./Facilities.jsx";
import Process from "./Process.jsx";
import ImportantDates from "./ImportantDates.jsx";
import Documents from "./Documents.jsx";
import Fees from "./Fees.jsx";
import Testimonials from "./Testimonials.jsx";
import Faq from "./Faq.jsx";
import FinalCta from "./FinalCta.jsx";
import Footer from "./Footer.jsx";

// Section order follows the assignment brief exactly (1 to 12).
export default function AI() {
  return (
    <EnquiryProvider>
      <a href="#main" className="skip-link">Skip to content</a>
      <SiteNavbar />
      <main id="main">
        <Hero />
        <WhyChoose />
        <Programs />
        <Highlights />
        <Facilities />
        <Process />
        <ImportantDates />
        <Documents />
        <Fees />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </EnquiryProvider>
  );
}
