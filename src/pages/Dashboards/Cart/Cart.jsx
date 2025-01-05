import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Cart = () => {
  const [cart, refetch] = useCart();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart?.reduce((total, item) => total + item.price, 0);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/carts/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "something went wrong",
              text: "Please try again!",
              showConfirmButton: false,
              timer: 1500,
            });
          });
      }
    });
  };

  useEffect(() => {
    if (cart.length == 0) {
      Swal.fire({
        title: "Cart Empty!",
        text: "Order something to see the cart list",
        icon: "info",
        // showConfirmButton: false,
        // timer: 1500,
      });
    }
  }, [cart.length]);

  return (
    <div className="mx-3">
      <SectionTitle title={"My Cart"} subtitle={"All the lists of my cart"} />
      <div className="overflow-x-auto">
        <div className="flex justify-between items-center py-3 uppercase font-bold text-xl text-slate-900">
          <div>Hello, {user?.displayName?.split(" ")[0]}</div>
          <div>total items: {cart.length}</div>
          <div>total price: {totalPrice} $</div>
          <button disabled={!cart.length} className="btn h-6">
            <Link to={"/dashboard/payment"}>pay</Link>
          </button>
        </div>
        <table className="table">
          <thead>
            <tr className="text-lg">
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, idx) => (
              <tr key={item._id} className="text-lg">
                <th>{idx + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>$ {item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn-cancel"
                  >
                    Cancel
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
