import InnocationIconDiv from "./InnovationIconDiv";

function SensorInnovation() {
  return (
    <section className="sensor-innovation-section">
      <div className="row">
        <div className="col-12">
          <div className="innovation-container">
            <p className="innovation-subheading">Innovation Deep-Dive</p>
            <h2 className="innovation-title">Beyond the Pixels: Our Sensor Technology</h2>
            <p className="innovation-paragraph mt-3">
              SONYX sensors are the result of decades of fabrication expertise.
              Our latest back-illuminated, stacked CMOS architecture allows for
              lightning-fast readout speeds, eliminating rolling shutter and
              enabling real-time AI processing directly on-chip.
            </p>
            <InnocationIconDiv />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SensorInnovation;
