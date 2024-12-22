import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Cart = () => {
  return (
    <div>
      <Helmet>
        <title>Restaurant App - Dashboard - Cart</title>
      </Helmet>
      <SectionTitle title={"My Cart"} subtitle={"All the lists of my cart"} />
    </div>
  );
};

export default Cart;
