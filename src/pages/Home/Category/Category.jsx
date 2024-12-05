import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./Category.css";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        title={"From 11.00am to 10.00pm"}
        subtitle={"Order Online"}
      />
      <Swiper
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },
          480: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="slide1" />
          <h1 className="text-white text-base md:text-4xl absolute left-0 md:left-[40%] bottom-3">
            Salads
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="slide2" />
          <h1 className="text-white text-base md:text-4xl absolute left-0 md:left-[40%] bottom-3">
            Pizzas
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="slide3" />
          <h1 className="text-white text-base md:text-4xl absolute left-0 md:left-[40%] bottom-3">
            Soups
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="slide4" />
          <h1 className="text-white text-base md:text-4xl absolute left-0 md:left-[40%] bottom-3">
            Dessarts
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="slide5" />
          <h1 className="text-white text-base md:text-4xl absolute left-0 md:left-[40%] bottom-3">
            Salads
          </h1>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
