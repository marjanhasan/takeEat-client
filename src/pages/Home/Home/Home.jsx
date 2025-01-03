import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import { useEffect } from "react";
import Swal from "sweetalert2";

const Home = () => {
  useEffect(() => {
    Swal.fire({
      position: "center",
      icon: "info",
      title: `This site is still under construction.`,
      text: "Sorry for the minor errors and responsive issues. I will fix it soon!",
      showConfirmButton: false,
      timer: 3000,
    });
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto">
      <Helmet>
        <title>Restaurant App - Home</title>
      </Helmet>
      <Banner />
      <Category />
      <PopularMenu />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
