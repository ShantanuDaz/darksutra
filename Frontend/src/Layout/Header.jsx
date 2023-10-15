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
                <Link>Home</Link>
              </li>
              <li>
                <Link>Category</Link>
              </li>
              <li>
                <Link>Packages</Link>
              </li>
              <li>
                <Link>Contact Us</Link>
              </li>
              <li>
                <Link>About Us</Link>
              </li>
            </ul>
          </nav>
        </section>
        <section id="contact-banner">
          <p>
            <p>darksutra@gmail.com</p>
            <p>+91 9716414417</p>
          </p>
        </section>
      </section>
    </header>
  );
};

export default Header;
