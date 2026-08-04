import GeographyStats from "./GeographyStats";

function GeographyContent() {
  return (
    <div className="about-geography-content">
      <h5 className="about-sub-heading">02 / GEOGRAPHY</h5>
      <h5 className="about-heading-title">THE TOKYO SANCTUARY</h5>
      <p className="about-sub-paragraph">
        Nestled in the heart of Minato, our research lab is a void of absolute
        silence. It is here that we define the silence between the notes,
        utilizing vacuum-sealed acoustic chambers and aerospace-grade material
        stress tests.
      </p>
      <div className="row">
        <GeographyStats />
      </div>
    </div>
  );
}

export default GeographyContent;
