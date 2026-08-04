import "../styles/privacy.css";
import PrivacyInformation from "../components/PrivacyInformation";  
import PrivacyDataUsage from "../components/PrivacyDataUsage";
import SecurityMeasures from "../components/SecurityMeasures";
import UserRights from "../components/UserRights"

function Privacy() {
  return (
    <div className="privacy">
      <div className="privacy-heading-div mb-5">
        <h2 className="privacy-heading">PRIVACY PROTOCOL</h2>
        <div className="privacy-paragraph-div">
          <p className="privacy-paragraph">
          "Your data privacy is engineered with the same precision as our
          hardware. At SONYX, we treat information security as a primary
          hardware specification, not a secondary software layer."
        </p>
        </div>
      </div>
      <PrivacyInformation  />
      <PrivacyDataUsage />
      <SecurityMeasures />
      <UserRights />
    </div>
  );
}

export default Privacy;
