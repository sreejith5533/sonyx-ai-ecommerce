function TimelineItem({item}){
  const {year, title, description, active} = item
  return(
    <div className="timeline-item">
      <div className={`timeline-year ${active ? "active" : ""}`}>
        {year}
      </div>
      <h3 className={`timeline-title ${active ? "active" : ""}`}>
        {title}
      </h3>
      <p className="timeline-description">
        {description}
      </p>
    </div>
  )
}


export default TimelineItem