import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, recipe, price, image, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  const handleClick = () => {
    if (user) {
      // send to cart
      const cartItem = {
        menuId: _id,
        email: user?.email,
        name,
        image,
        price,
      };
      axiosSecure
        .post("/carts", cartItem)
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to the cart successfully!`,
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
          }
        })
        .catch((err) => console.log(err));
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
          navigate("/login", { state: { from: location } });
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
        <button onClick={handleClick} className="btn">
          add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
