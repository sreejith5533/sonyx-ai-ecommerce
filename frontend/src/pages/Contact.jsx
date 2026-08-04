import ContactHero from "../components/ContactHero";
import DepartmentsText from "../components/DepartmentsText";
import DepartmentsItems from "../components/DepartmentsItems";
import Protocol from "../components/Protocol";
import Institutional from "../components/Institutional";
import "../styles/contact.css";
function Contact() {
  const departmentItemInfo = [{
    title : "01 — HARDWARE",
    subheading : "Technical Support",
    description : "Calibration, firmware synchronization,and hardware diagnostics."
  },{
    title : "02 — ENTERPRISE",
    subheading : "B2B Procurement",
    description : "Institutional licensing, fleet orders,and custom integration."
  },{
    title : "03 — HERITAGE",
    subheading : "Atelier & Private",
    description : "Bespoke manufacturing and private client consultation."
  },{
    title : "04 — GLOBAL",
    subheading : "Media Relations",
    description : "Asset libraries, press kits, and exhibition inquiries."
  }]
  return (
    <div>
      <ContactHero />
      <section className="departments-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <DepartmentsText />
            </div>
            <div className="col-lg-8">
              <div className="row g-3">
                {departmentItemInfo.map((item, index) => (
                  <div className="col-md-6" key={index}>
                    <DepartmentsItems item={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Protocol />
      <Institutional />
    </div>
  );
}

export default Contact;
