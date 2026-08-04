function HardwareEligibility() {
  return (
    <article className="card refund-card">
      <div className="refund-policy-heading-div">
        <h4 className="refund-policy-number">01</h4>
        <h4 className="refund-policy-title">Hardware Eligibility</h4>
      </div>
      <p className="refund-policy-paragraph">
        Standard hardware assets are eligible for return within a strict
        **30-day window** from the date of physical receipt. Components must
        maintain "Factory-Zero" condition, including all original shielding,
        protective films, and serialized packaging.
      </p>
      <ul className="refund-policy-list">
        <li className="refund-policy-list-item">
          <i class="fa-regular fa-circle-check"></i>
          <p>Unopened visual/audio capture units</p>
        </li>
        <li className="refund-policy-list-item">
          <i class="fa-regular fa-circle-check"></i>
          <p>Intact structural integrity seals</p>
        </li>
      </ul>
    </article>
  );
}

export default HardwareEligibility;
