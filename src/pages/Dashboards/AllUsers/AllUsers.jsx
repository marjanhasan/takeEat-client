import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUserTie } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res?.data;
    },
  });

  const handleDeleteUser = (singleUser) => {
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
          .delete(`/users/${singleUser._id}`)
          .then((res) => {
            console.log(res);
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: `${singleUser.displayName} has been deleted by admin`,
                icon: "success",
              });
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };

  const handleAdmin = (singleUser) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/users/${singleUser._id}`)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              refetch();
              Swal.fire({
                title: "Done!",
                text: `${singleUser?.displayName} is admin now.`,
                icon: "success",
              });
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };
  return (
    <div className="mx-3">
      <Helmet>
        <title>Restaurant App - Admin Dashboard - All Users</title>
      </Helmet>
      <SectionTitle title={"My Cart"} subtitle={"All the lists of users"} />
      <div className="overflow-x-auto">
        <div className="flex justify-evenly py-3 uppercase font-bold text-xl text-slate-900">
          <div>Hello, {user?.displayName}</div>
          <div>total users: {users?.length}</div>
        </div>
        <table className="table">
          <thead>
            <tr className="text-lg uppercase bg-orange-300 border-none">
              <th className="rounded-tl-2xl">#</th>
              <th>Image</th>
              <th>Name</th>
              <th>email</th>
              <th>role</th>
              <th className="rounded-tr-2xl">Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((singleUser, idx) => (
              <tr key={singleUser._id} className="text-lg">
                <td>{idx + 1}</td>
                <td>
                  <img
                    className="h-12 w-12 rounded-full"
                    src={singleUser?.image}
                    alt=""
                  />
                </td>
                <td>{singleUser?.name}</td>
                <td>{singleUser?.email}</td>
                <td>
                  {singleUser?.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleAdmin(singleUser)}
                      className="btn text-lg"
                    >
                      <FaUserTie />
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(singleUser)}
                    className="cancel-btn"
                  >
                    Cancel
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

export default AllUsers;
