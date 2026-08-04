function TechnicalLiaision() {
  return (
    <div className="card mt-5 tech-card">
      <div className="tech-content">
        <h4 className="tech-title">Technical Liaison</h4>
        <p className="tech-paragraph">
          Initiate your Return Authorization or consult with our engineering
          support regarding product specifications.
        </p>
      </div>
      <div className="contact-div">
        <div className="mail-contact">
          <i className="fa-regular fa-envelope"></i>
          <a href="mailto:sreejithxr@gmail,com">sreejithxr@gmail.com</a>
        </div>
        <div className="phone-contact">
          <i className="fa-solid fa-phone" aria-hidden="true"></i>
          <a href="tel:+919585124145">+91 9585124145</a>
        </div>
      </div>
    </div>
  );
}

export default TechnicalLiaision;
