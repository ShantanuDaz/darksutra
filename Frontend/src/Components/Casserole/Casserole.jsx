import Slider from "react-slick";
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
import brithDayimg from "../../fakeData/images/birthday.jpg";

const Casserole = ({ list = [], width = "", height = "" }) => {
  return (
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
  );
};

export default Casserole;
