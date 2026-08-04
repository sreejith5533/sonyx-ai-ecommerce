function TechnicalInspection() {
  return (
    <article className="card refund-card">
      <div className="refund-policy-heading-div">
        <h4 className="refund-policy-number">02</h4>
        <h4 className="refund-policy-title">Technical Inspectiony</h4>
      </div>
      <p className="refund-policy-paragraph">
        Every return requires a **Return Authorization (RA)** number. Upon arrival at our facility, the unit undergoes a multi-point technical inspection to verify circuit integrity and external surface acoustics. Failure to meet specification levels results in a technical remediation fee.
      </p>
      <div className="refund-policy-list-div">
        <i className="fa-solid fa-clipboard-check"></i>
        <p>Standard processing time: 72 hours post-delivery</p>
      </div>
    </article>
  );
}

export default TechnicalInspection;
