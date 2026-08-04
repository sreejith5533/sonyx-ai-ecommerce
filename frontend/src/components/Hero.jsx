import "../styles/hero.css";

function Hero({banners=[]}){
  if (banners.length === 0) return null;
  

  return(
    <div className="hero-container">
      <video className="hero-video" autoPlay loop muted playsInline poster={`http://127.0.0.1:8000${banners[0].poster}`} >
      
        <source src={`http://127.0.0.1:8000${banners[0].video}`} type="video/mp4" />
      </video>
    </div>
  )
}


export default Hero