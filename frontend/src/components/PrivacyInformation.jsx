function PrivacyInformation() {
  return (
    <div>
      <div className="privacy-info-div">
        <h4 className="privacy-content-nbr">01</h4>
        <h4 className="privacy-info-content-title">Information Collection</h4>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="privacy-info-card">
            <h5>Technical data</h5>
            <p>
              System logs, hardware telemetry, frequency responses, and thermal
              performance metrics required for calibration.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="privacy-info-card">
            <h5>INTERACTION DATA</h5>
            <p>
              Usage frequency of specific hardware features, haptic feedback
              responses, and UI navigation patterns.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="privacy-info-card">
            <h5>IDENTITY DATA</h5>
            <p>
              Authenticated credentials, verified shipping manifests, and unique
              device identifier (UDID) linkages.
            </p>
          </div>
        </div>
      </div>
      <hr className="h-line" />
    </div>
  );
}

export default PrivacyInformation;
