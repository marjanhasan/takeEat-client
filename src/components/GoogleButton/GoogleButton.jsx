import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const GoogleButton = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const userInfo = {
          email: res?.user?.email,
          name: res?.user?.displayName,
        };
        axiosPublic
          .post("/users", userInfo)
          .then(() => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${
                res?.user?.displayName || res?.user?.email
              } successfully logged in`,
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(from, { replace: true });
          })
          .catch((err) => console.log(`post user failed - googleSignIn`, err));
      })
      .catch((err) => console.log("google sign in error", err));
  };
  return (
    <div className="max-w-fit mx-auto mb-5">
      <button
        onClick={handleGoogleSignIn}
        className="inline-flex items-center justify-center h-12 mb-3 font-medium transition duration-200 rounded shadow-md  md:mb-0 bg-slate-800 hover:bg-slate-900 overflow-hidden"
      >
        <span className="mr-4 bg-yellow-700 p-3">
          <FaGoogle className=" text-2xl text-slate-900" />
        </span>
        <span className="pr-2 text-yellow-800">Sign in with Google</span>
      </button>
    </div>
  );
};

export default GoogleButton;
