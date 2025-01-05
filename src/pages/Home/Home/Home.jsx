import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const Home = () => {
  const { user, loading } = useAuth();
  if (!loading && !user) {
    Swal.fire({
      position: "center",
      icon: "info",
      title: `<strong>Please <u>LOGIN</u> to experience more features</strong>`,
      text: "You can add/cancel order. Pay with card and see the payment history and many more!",
      showConfirmButton: false,
      timer: 3000,
    });
  }
  return (
    <div className="max-w-screen-xl mx-auto">
      <Helmet>
        <title>takeEat - Home</title>
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
