import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from "react-icons/fa";
import Swal from "sweetalert2";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://restaurant-app-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "something went wrong",
          text: "Please try again!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  }, []);
  return (
    <div className="">
      <SectionTitle title={"what our customer say"} subtitle={"testimonials"} />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
        {reviews?.map((review) => (
          <SwiperSlide key={review?._id}>
            <div className="text-center flex flex-col justify-center items-center gap-4 px-24 my-16 ">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <FaQuoteLeft className="text-6xl" />
              <p>{review?.details}</p>
              <h3 className="font-medium text-yellow-600">{review?.name} </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
