import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <section id="info">
        <section id="menu">
          <img src="./images/Logo.png" alt="logo" id="logo" />
          <nav>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/Category"}>Category</Link>
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
