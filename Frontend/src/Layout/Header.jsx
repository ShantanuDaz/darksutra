import { Link } from "react-router-dom";
import useSize from "../Components/customHooks/useSize";
const Header = ({ categories = [] }) => {
  const size = useSize();
  console.log(size);

  const getNav = () => {
    return (
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li id="headerCategories">
            <Link to={"/Category"}>Category</Link>
            <section>
              {categories.map(({ name }, i) => (
                <Link key={i}>{name}</Link>
              ))}
            </section>
          </li>
          <li>
            <Link to={"/Packages"}>Packages</Link>
          </li>
          <li>
            <Link to={"/Contact"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/About"}>About Us</Link>
          </li>
        </ul>
      </nav>
    );
  };
  return (
    <header>
      <section id="info">
        <section id="menu">
          <img src="./images/Logo.png" alt="logo" id="logo" />
          {getNav()}
        </section>
        <section id="contact-banner">
          <div>
            <p>darksutra@gmail.com</p>
            <p>+91 9716414417</p>
          </div>
        </section>
      </section>
    </header>
  );
};

export default Header;
