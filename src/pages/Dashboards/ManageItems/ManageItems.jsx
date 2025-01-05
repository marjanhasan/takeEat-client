import { FaEdit, FaTrash } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const { user } = useAuth();
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (item) => {
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
          .delete(`/menu/${item._id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: `${item.name} has been deleted from menu`,
                icon: "success",
              });
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };
  return (
    <div>
      <SectionTitle title={"hurry up"} subtitle={"manage all items"} />
      <div className="overflow-x-auto">
        <div className="text-center lg:flex justify-evenly py-3 uppercase font-bold text-xl text-slate-900">
          <div>Hello, {user?.displayName?.split(" ")[0]}</div>
          <div>total users: {menu?.length}</div>
        </div>
        <table className="table">
          <thead>
            <tr className="text-lg uppercase bg-orange-300 border-none">
              <th className="rounded-tl-2xl">#</th>
              <th>Image</th>
              <th>Name</th>
              <th>email</th>
              <th>edit</th>
              <th className="rounded-tr-2xl">Action</th>
            </tr>
          </thead>
          <tbody>
            {menu?.map((item, idx) => (
              <tr key={item._id} className="text-lg">
                <td>{idx + 1}</td>
                <td>
                  <img
                    className="h-12 w-12 rounded-full"
                    src={item?.image}
                    alt=""
                  />
                </td>
                <td>{item?.name}</td>
                <td>{item?.price}</td>
                <td>
                  <Link to={`/dashboard/update-item/${item._id}`}>
                    <button className="btn text-lg">
                      <FaEdit />
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="cancel-btn"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
