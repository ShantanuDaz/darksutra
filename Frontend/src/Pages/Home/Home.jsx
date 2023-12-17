import React, { useState, useEffect } from "react";
import Casserole from "../../Components/Casserole/Casserole";
import pocketBase from "../../api/pocketbase";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Catergories from "./Catergories";
import "./Home.css";
import brithDayimg from "../../fakeData/images/birthday.jpg";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplaySpeed: 2000,
  autoplay: true,
};
const Home = () => {
  const [catergoies, setCatergoies] = useState([]);
  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = async () => {
    try {
      const pb = await pocketBase.getPbConn();
      const records = await pb.collection("Categories").getFullList({
        sort: "-created",
      });
      console.log(records);
      setCatergoies(
        records.map((el) => {
          return {
            name: el.name,
            id: el.id,
          };
        })
      );
    } catch (error) {
      if (error.message === "Token expired") {
        await pocketBase.refreshToken();

        // Reattempt to fetch records after refreshing the token
        getAllCategories();
      } else {
        throw error;
      }
    }
  };

  return (
    <>
      <Slider {...settings}>
        <div className="silderItems">
          <img src={brithDayimg} alt="" />
        </div>
        <div className="silderItems">
          <img src={brithDayimg} alt="" />
        </div>
        <div className="silderItems">
          <img src={brithDayimg} alt="" />
        </div>
        <div className="silderItems">
          <img src={brithDayimg} alt="" />
        </div>
        <div className="silderItems">
          <img src={brithDayimg} alt="" />
        </div>
        <div className="silderItems">
          <img src={brithDayimg} alt="" />
        </div>
      </Slider>
      <Catergories catergoies={catergoies} />
    </>
  );
};

export default Home;
