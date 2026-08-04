function InnovationContentInfo({icon, heading, paragraph}) {
  return (
    <div className="innovation-content-info-div mt-3">
      <span className="innovation-icon">
        <i class={icon}></i>
      </span>
      <div className="info-content">
        <p className="innovation-heading-info">{heading}</p>
        <p className="innovation-paragraph-info">
          {paragraph}
        </p>
      </div>
    </div>
  );
}

export default InnovationContentInfo;


