import About from "../pages/About";
import AboutObessionContent from "./AboutObessionContent";
import AboutObessionImage from "./AboutObessionImage";
function AboutObession() {
  return (
    <section className="about-obession-section mt-5">
      <div className="row">
        <div className="col-md-8">
          <AboutObessionContent />
        </div>
        <div className="col-md-4">
          <AboutObessionImage />
        </div>
      </div>
    </section>
  );
}

export default AboutObession;
