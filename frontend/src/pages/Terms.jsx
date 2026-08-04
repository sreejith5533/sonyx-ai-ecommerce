import "../styles/terms.css";
import ConditionCategory from "../components/ConditionCategory";
import TermsHardware from "../components/TermsHardware";
import UserConduct from "../components/UserConduct";
import WarrantyProtocols from "../components/WarrantyProtocols";
import LiabilityFramework from "../components/LiabilityFramework";
import DisputeResolution from "../components/DisputeResolution";

function Terms() {
  return (
    <div className="terms">
      <div className="terms-heading-div">
        <h2 className="terms-heading">TERMS AND CONDITIONS</h2>
        <hr  className="terms-line" />
      </div>
      <div className="row g-3">
        <div className="col-md-4">
          <ConditionCategory />
        </div>
        <div className="col-md-8">
          <TermsHardware />
          <UserConduct />
          <WarrantyProtocols />
          <LiabilityFramework />
          <DisputeResolution />
        </div>
      </div>
    </div>
  );
}

export default Terms;
