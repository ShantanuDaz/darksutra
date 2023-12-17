// import { catergoies } from "../../fakeData/data";
const Catergories = ({ catergoies = [] }) => {
  return (
    <section id="categories">
      {catergoies.map((catergory) => (
        <article className="category" key={catergory.id}>
          <div style={{ backgroundImage: `url(${catergory.img})` }}></div>
          <h1>{catergory.name}</h1>
        </article>
      ))}
    </section>
  );
};

export default Catergories;
