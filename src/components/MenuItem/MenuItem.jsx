const MenuItem = ({ item }) => {
  const { name, recipe, price, image } = item;
  return (
    <div className="flex space-x-2">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[104px]"
        src={image}
        alt="image"
      />
      <div>
        <h3 className="uppercase">{name}--------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-700">${price}</p>
    </div>
  );
};

export default MenuItem;
