import "./ProductCard.css";
const ProductCard = ({ title = "", img, id = "", price = 0, dis = 0 }) => {
  return (
    <div className="productCard">
      <div style={{ backgroundImage: `url(${img})` }}></div>
      <h1>{title}</h1>
    </div>
  );
};

export default ProductCard;
