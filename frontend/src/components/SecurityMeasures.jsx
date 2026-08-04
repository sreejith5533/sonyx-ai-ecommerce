function SecurityMeasures() {
  const securityCards = [
    {
      icon: "fa-solid fa-share-nodes",
      title: "Encrypted Chain",
      description:
        "All data packets are wrapped in 256-bit AES encryption at rest and TLS 1.3 during transit, creating an unbroken chain of custody from your device to our secured vaults",
    },
    {
      icon: "fa-solid fa-server",
      title: "Secure Engineering Channel",
      description:
        "Communication with SONYX servers occurs through a proprietary secure channel, bypassing standard public DNS routing to mitigate interception risks.",
    },
  ];

  return (
    <div className="security-measures-div">
      <div className="privacy-info-div">
        <h4 className="privacy-content-nbr">03</h4>
        <h4 className="privacy-info-content-title">Security Measures</h4>
      </div>
      <div className="row g-4">
        {securityCards.map((card, index) => (
          <div className="col-md-6" key={index}>
            <div className="secutiry-sub-div card">
              <div className="security-sub-heading-div">
                <i class={card.icon}></i>
                <h5>{card.title}</h5>
              </div>
              <p className="security-paragraph">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      <hr className="h-line"/>
    </div>
  );
}

export default SecurityMeasures;
