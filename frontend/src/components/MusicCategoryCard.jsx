function MusicCategoryCard({category, index}) {
  return(
    <div className="music-category-card" key={index}>
      <img src={`${import.meta.env.VITE_MEDIA_URL}${category.image}`} alt="img" />
      <p className="music-category-card-title">{category.name}</p>
    </div>
  )
} 


export default MusicCategoryCard;