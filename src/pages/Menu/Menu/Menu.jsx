import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import banner from "../../../assets/menu/banner3.jpg";
import dessert from "../../../assets/menu/dessert-bg.jpeg";
import pizza from "../../../assets/menu/pizza-bg.jpg";
import salad from "../../../assets/menu/salad-bg.jpg";
import soup from "../../../assets/menu/soup-bg.jpg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";

const Menu = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Helmet>
        <title>Restauran App - Menu</title>
      </Helmet>
      <Cover
        img={banner}
        title={"our menu"}
        description={"would you like to try a dish?"}
        margin={"mb-6"}
      />
      <PopularMenu />
      <Cover
        img={dessert}
        title={"desserts"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        margin={"mt-6"}
      />
      <PopularMenu />
      <Cover
        img={pizza}
        title={"pizza"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        margin={"mt-6"}
      />
      <PopularMenu />
      <Cover
        img={salad}
        title={"salad"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        margin={"mt-6"}
      />
      <PopularMenu />
      <Cover
        img={soup}
        title={"soup"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        margin={"mt-6"}
      />
      <PopularMenu />
    </div>
  );
};

export default Menu;
