function DepartmentsItems({ item }) {
  const { title, subheading, description } = item;

  return (
    <article className="department-card">
      <p className="department-number">{title}</p>

      <h3 className="department-title">{subheading}</h3>

      <p className="department-description">{description}</p>

      <i className="fa-solid fa-arrow-right"></i>
    </article>
  );
}



export default DepartmentsItems