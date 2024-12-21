import { Link } from "react-router-dom";
import MenuItem from "../../../components/MenuItem/MenuItem";

const MenuCategory = ({ items, category }) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-10">
        {items?.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link to={`/order/${category}`} className="btn mx-auto">
          Order your favorite food
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
