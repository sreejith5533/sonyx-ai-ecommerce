import "../styles/hero.css";

function Hero({banners=[]}){
  if (banners.length === 0) return null;
  

  return(
    <div className="hero-container">
      <video className="hero-video" preload="auto" autoPlay loop muted playsInline poster={banners[0].poster} >
      
        <source src={banners[0].video} type="video/mp4" />
      </video>
    </div>
  )
}


export default Hero