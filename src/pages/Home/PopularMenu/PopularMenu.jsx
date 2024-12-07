import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useEffect } from "react";
import MenuItem from "../../../components/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) =>
        setMenu(data.filter((item) => item.category === "popular"))
      )
      .catch((error) => console.log("Popular menu error ::", error));
  }, []);
  return (
    <section>
      <SectionTitle title={"Popular Items"} subtitle={"From Our Menu"} />
      <div className="grid md:grid-cols-2 gap-10">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
