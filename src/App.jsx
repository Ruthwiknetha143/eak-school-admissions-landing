import { EnquiryProvider } from "./AIComponents/context/EnquiryContext.jsx";
import SiteNavbar from "./AIComponents/components/SiteNavbar.jsx";
import Hero from "./AIComponents/components/Hero.jsx";
import WhyChoose from "./AIComponents/components/WhyChoose.jsx";
import Programs from "./AIComponents/components/Programs.jsx";
import Highlights from "./AIComponents/components/Highlights.jsx";
import Facilities from "./AIComponents/components/Facilities.jsx";
import Process from "./AIComponents/components/Process.jsx";
import ImportantDates from "./AIComponents/components/ImportantDates.jsx";
import Documents from "./AIComponents/components/Documents.jsx";
import Fees from "./AIComponents/components/Fees.jsx";
import Testimonials from "./AIComponents/components/Testimonials.jsx";
import Faq from "./AIComponents/components/Faq.jsx";
import FinalCta from "./AIComponents/components/FinalCta.jsx";
import Footer from "./AIComponents/components/Footer.jsx";

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
