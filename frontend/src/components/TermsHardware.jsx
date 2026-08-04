function TermsHardware() {
  const hardwareContents = [
    {
      icon: "fa-solid fa-sliders",
      heading: "MODIFICATION PROHIBITION",
      description:
        "Technical modifications to internal circuitry or thermal dissipation units are strictly forbidden without authorization.",
    },
    {
      icon: "fa-solid fa-file-code",
      heading: "REVERSE ENGINEERING",
      description:
        "The extraction or decryption of binary firmware instructions is a violation of international intellectual property protocols.",
    },
  ];
  return (
    <section className="hardware-div mb-5" id="hardware-licensing">
      <div className="hardware-heading condition-heading-div">
        <span className="condition-number">01</span>
        <h4 className="condition-title">HARDWARE LICENSING</h4>
      </div>
      <div className="category-content-info-div">
        <h4 className="condition-sub-heading">1.1 Proprietary Firmware Integration</h4>
        <p className="category-paragraph">
          All SONYX hardware units are equipped with pre-installed proprietary
          firmware. Usage of SONYX hardware constitutes an agreement to a non-
          exclusive, non-transferable license to use the firmware solely as
          embedded in the hardware for its intended engineering purpose.
        </p>
        <div className="row hardware-content-row">
          {hardwareContents.map((item, index) => (
            <div className="col-md-6" key={index}>
              <div className="hardware-content-info-div card mt-3">
                <span className="hardware-icon">
                  <i class={item.icon}></i>
                </span>
                <div className="info-content mt-2">
                  <p className="hardware-heading-info">{item.heading}</p>
                  <p className="hardware-paragraph-info mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TermsHardware;
