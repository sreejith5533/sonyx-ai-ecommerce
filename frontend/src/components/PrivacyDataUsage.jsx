function PrivacyDataUsage() {
  return (
    <div>
      <div className="privacy-info-div">
        <h4 className="privacy-content-nbr">02</h4>
        <h4 className="privacy-info-content-title">Data Usage</h4>
      </div>
      <p className="privacy-paragraph">
        We process data under strict engineering frameworks designed to enhance
        device longevity and user experience:
      </p>

      <div className="row mt-3 g-3">
        <div className="col-12">
          <div className="data-sub-div">
            <span>
              <i class="fa-solid fa-robot"></i>
            </span>
            <div>
              <h5 className="data-heading">Performance Engineering</h5>
              <p className="data-text">
                Leveraging aggregate metrics to push over-the-air firmware
                optimizations that refine signal-to-noise ratios in our audio
                hardware.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="data-sub-div">
            <span>
              <i class="fa-solid fa-sliders"></i>
            </span>
            <div>
              <h5 className="data-heading">Service Calibration</h5>
              <p className="data-text">
                Leveraging aggregate metrics to push over-the-air firmware
                optimizations that refine signal-to-noise ratios in our audio
                hardware.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="h-line" />
    </div>
  );
}

export default PrivacyDataUsage;
