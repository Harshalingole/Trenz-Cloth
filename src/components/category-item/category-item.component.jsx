import "./category-item.style.scss";
const CategoryItem = ({ categories }) => {
  const { title, imgUrl } = categories;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imgUrl}` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
