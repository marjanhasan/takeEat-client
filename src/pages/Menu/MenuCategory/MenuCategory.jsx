import MenuItem from "../../../components/MenuItem/MenuItem";

const MenuCategory = ({ items }) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-10">
        {items?.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="btn mx-auto uppercase">
          Order your favorite food
        </button>
      </div>
    </div>
  );
};

export default MenuCategory;
