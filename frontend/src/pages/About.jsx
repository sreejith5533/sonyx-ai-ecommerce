import "../styles/about.css"
import AboutHeroContent from "../components/AboutHeroContent"
import AboutObession from "../components/AboutObession"
import AboutGeography from "../components/AboutGeography"
import AboutHistory from "../components/AboutHistory"
function About() {
  return (
    <div className="about-page">
      <AboutHeroContent />
      <AboutObession />
      <AboutGeography />
      <AboutHistory />
    </div>
  );
}

export default About;
