function UserConduct() {
  return (
    <section className="user-conduct-div mb-5" id="user-conduct">
      <div className="conduct-heading condition-heading-div">
        <span className="condition-number">02</span>
        <h4 className="condition-title">USER CONDUCT</h4>
      </div>
      <div className="category-content-info-div">
        <h4 className="condition-sub-heading">2.1 AI Concierge Interaction</h4>
        <p className="category-paragraph mb-3">
          Interactions with the SONYX AI Concierge must adhere to professional
          technical standards. Users are prohibited from attempting to bypass
          safety alignment protocols.
        </p>
        <div className="user-conduct-paragraph-div">
          <span>2.2.A</span>
          <p>
            System access must be initiated through verified SONYX biometric or
            cryptographic hardware keys.
          </p>
        </div>
        <div className="user-conduct-paragraph-div">
          <span>2.2.B</span>
          <p>
            Unauthorized broadcasting of high-fidelity sensor data from SONYX
            devices in restricted zones is prohibited.
          </p>
        </div>
      </div>
    </section>
  );
}

export default UserConduct;
