const FoodCard = ({ item }) => {
  const { name, recipe, price, image } = item;
  return (
    <div className="card bg-base-100 lg:w-96 shadow-xl">
      <figure>
        <img className="w-full h-full" src={image} alt={image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title flex justify-between items-center">
          {name}
          <div className="badge bg-yellow-700">{price}</div>
        </h2>
        <p className="">{recipe}</p>
      </div>
    </div>
  );
};

export default FoodCard;
