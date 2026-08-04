import "../styles/refund.css";
import HardwareEligibility from "../components/HardwareEligibility"
import TechnicalInspection from "../components/TechnicalInspection"
import RefundProtocol from "../components/RefundProtocol"
import ExclusionProtocol from "../components/ExclusionProtocol"
import TechnicalLiaision from "../components/TechnicalLiaision"
function RefundPolicy() {
  return (
    <div className="refund-section-div">
    <section>
      <div className="refund-heading-div">
        <p className="refund-subheading">Compliance Division</p>
        <h2 className="refund-heading">Return Specifications</h2>
        <div className="refund-paragraph-div">
          <p className="refund-paragraph">
            Precision in engineering, transparency in resolution. Our protocol
            ensures every technical asset return is handled with industrial
            rigor.
          </p>
        </div>
      </div>
      <div className="row g-4 refund-row">
        <div className="col-md-6">
          <HardwareEligibility />
        </div>
        <div className="col-md-6">
          <TechnicalInspection />
        </div>
        <div className="col-md-6">
          <RefundProtocol />
        </div>
        <div className="col-md-6">
          <ExclusionProtocol />
        </div>
      </div>
    </section>
    <section className="technical-liaision">
        <TechnicalLiaision />
    </section>
    </div>
  );
}

export default RefundPolicy;
