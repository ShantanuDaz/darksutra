// import { catergoies } from "../../fakeData/data";
import birthday from "../../fakeData/images/birthday.jpg";
import "./Categories.css";
const Categories = ({ categories = [] }) => {
  return (
    <section id="categories">
      {categories.map((catergory) => (
        <article className="category" key={catergory.id}>
          <div
            style={{ backgroundImage: `url(${catergory.img || birthday})` }}
          ></div>
          <h1>{catergory.name}</h1>
        </article>
      ))}
    </section>
  );
};

export default Categories;
