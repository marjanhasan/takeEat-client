import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
  const { name, recipe, price, image } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const handleClick = (food) => {
    if (user) {
      // TODO: send to cart
      console.log(food, user.email);
    } else {
      Swal.fire({
        title: "You're not Logged in!!",
        text: "Please login first to add cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };
  return (
    <div className="card bg-base-100 lg:w-96 shadow-xl">
      <figure>
        <img className="w-full h-full" src={image} alt={image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title flex justify-between items-center">
          {name}
          <div className="badge bg-yellow-700 p-3">$ {price}</div>
        </h2>
        <p className="">{recipe}</p>
        <button onClick={() => handleClick(item)} className="btn">
          add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
