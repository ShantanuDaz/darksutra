import Header from "./Header";
import Footer from "./Footer";
import Social from "./Social";
import Home from "../Pages/Home/Home";
import { Outlet } from "react-router-dom";
import "./Layout.css";

const Body = () => {
  return (
    <>
      <Header />
      <Social />
      <Outlet />
      <Footer />
    </>
  );
};

export default Body;
