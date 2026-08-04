function MusicCategoryCard({category, index}) {
  return(
    <div className="music-category-card" key={index}>
      <img src={`http://127.0.0.1:8000${category.image}`} alt="img" />
      <p className="music-category-card-title">{category.name}</p>
    </div>
  )
} 


export default MusicCategoryCard;