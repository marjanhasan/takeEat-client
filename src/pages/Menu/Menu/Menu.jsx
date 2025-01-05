import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import banner from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");
  return (
    <div className="max-w-screen-xl mx-auto">
      <Helmet>
        <title>takeEat - Menu</title>
      </Helmet>
      <Cover
        img={banner}
        title={"our menu"}
        description={"would you like to try a dish?"}
        margin={"mb-6"}
      />
      <SectionTitle title={"don't miss"} subtitle={"today's offer"} />
      <MenuCategory items={offered} category={"offered"} />
      <Cover
        img={dessertImg}
        title={"desserts"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        margin={"my-12"}
      />
      <MenuCategory items={dessert} category={"desserts"} />
      <Cover
        img={pizzaImg}
        title={"pizza"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        margin={"my-12"}
      />
      <MenuCategory items={pizza} category={"pizzas"} />
      <Cover
        img={saladImg}
        title={"salad"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        margin={"my-12"}
      />
      <MenuCategory items={salad} category={"salads"} />
      <Cover
        img={soupImg}
        title={"soup"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        margin={"my-12"}
      />
      <MenuCategory items={soup} category={"soups"} />
    </div>
  );
};

export default Menu;
