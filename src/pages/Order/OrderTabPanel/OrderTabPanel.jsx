import FoodCard from "../../../components/FoodCard/FoodCard";

const OrderTabPanel = ({ items }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
      {items.map((item) => (
        <FoodCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default OrderTabPanel;
