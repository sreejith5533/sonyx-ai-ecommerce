import img from "../assets/images/about-bg.jpg"

function AboutObessionImage(){
  return(
    <div className="about-img-div">   
      <img src={img} alt="img" loading="lazy" />
    </div>
  )
}


export default AboutObessionImage