import "../styles/hero.css";

function Hero({banners=[]}){
  if (banners.length === 0) return null;
  

  return(
    <div className="hero-container">
      <video className="hero-video" autoPlay loop muted playsInline poster={`${import.meta.env.VITE_API_URL}${banners[0].poster}`} >
      
        <source src={`${import.meta.env.VITE_API_URL}${banners[0].video}`} type="video/mp4" />
      </video>
    </div>
  )
}


export default Hero