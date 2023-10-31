import React, { useEffect } from "react";
import Casserole from "../../Components/Casserole/Casserole";
import pocketBase from "../../api/pocketbase";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const list = ["kjdsnvujds", "sdfsdf", "sadfsadfvad", "sadfasdf"];
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
  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = async () => {
    try {
      const pb = await pocketBase.getPbConn();
      const records = await pb.collection("Category").getFullList({
        sort: "-created",
      });
      console.log(records);
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
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
};

export default Home;
