import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation().pathname;
  const noNavbarFooter =
    location.includes("/login") || location.includes("/signup");

  return (
    <>
      {noNavbarFooter || <Navbar />}
      <Outlet />
      {noNavbarFooter || <Footer />}
    </>
  );
};

export default Main;
