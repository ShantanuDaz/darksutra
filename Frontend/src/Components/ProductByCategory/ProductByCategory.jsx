import ProductCard from "../ProductCard/ProductCard";
import "./ProductByCategory.css";
const ProductByCategory = ({ categories = [], categoriesMapping = {} }) => {
  return (
    <section className="ProductByCategory">
      {categories.map((category, i) => {
        return (
          <article key={i}>
            <h1>{category.name}</h1>
            <div>
              {(categoriesMapping[category.id] || []).map((product, i2) => {
                if (i2 <= 4)
                  return (
                    <ProductCard
                      title={product.Title}
                      img={product.Photos[0]}
                      key={i2}
                    />
                  );
                return <></>;
              })}
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default ProductByCategory;
