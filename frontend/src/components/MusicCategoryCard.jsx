function MusicCategoryCard({category, index}) {
  return(
    <div className="music-category-card" key={index}>
      <img src={category.image} alt="img" />
      <p className="music-category-card-title">{category.name}</p>
    </div>
  )
} 


export default MusicCategoryCard;