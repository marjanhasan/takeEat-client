import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FaArrowLeft } from "react-icons/fa";
import GoogleButton from "../../components/GoogleButton/GoogleButton";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then(() => {
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const userInfo = {
              name: data.name,
              email: data.email,
              photoURL: data.photoURL,
            };
            axiosPublic
              .post("/users", userInfo)
              .then((res) => {
                if (res.data.insertedId) {
                  reset();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data?.name} signed in successfully`,
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate("/");
                }
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="hero bg-base-200 min-h-screen min-w-full">
      <Helmet>
        <title>Restaurant App - Sign Up</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center  w-full">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
          <ul className="py-6 text-lg font-semibold list-disc list-inside uppercase">
            <li>
              You can sign up via <b>Google</b> button
            </li>
            <li>
              You can sign up via <b>any email [not necessarily verified]</b>
            </li>
            <li>
              You can login via <b>admin email to explore admin features</b>
            </li>
            <li>
              <b>admin email :</b> admin@gmail.com
            </li>
            <li>
              <b>admin password :</b> asdfghj1
            </li>
          </ul>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text uppercase">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                {...register("name", { required: true })}
                className="input input-bordered"
              />
              {errors.name && (
                <span className="uppercase mt-2 text-red-500 font-semibold text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text uppercase">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="Photo URL"
                {...register("photoURL", { required: true })}
                className="input input-bordered"
              />
              {errors.photoURL && (
                <span className="uppercase mt-2 text-red-500 font-semibold text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text uppercase">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                {...register("email", { required: true })}
                className="input input-bordered"
              />
              {errors.email && (
                <span className="uppercase mt-2 text-red-500 font-semibold text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text uppercase">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                })}
                className="input input-bordered"
              />
              {errors.password?.type == "required" && (
                <span className="uppercase mt-2 text-red-500 font-semibold text-sm">
                  This field is required
                </span>
              )}
              {errors.password?.type == "pattern" && (
                <span className="uppercase mt-2 text-red-500 font-semibold text-sm">
                  Minimum eight characters, at least one letter and one number
                </span>
              )}
              {/* <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover uppercase"
                >
                  Forgot password?
                </a>
              </label> */}
            </div>
            <div className="form-control mt-6">
              <input className="btn" type="submit" value="signup" />
            </div>
          </form>
          <GoogleButton />
          <Link
            to={"/login"}
            className="text-xs uppercase font-bold text-yellow-700 text-center mb-4"
          >
            already have an account? login
          </Link>
          <Link
            to={"/"}
            className="text-xs uppercase font-bold text-yellow-700 text-center mb-4"
          >
            <span className="flex items-center justify-center gap-2">
              <FaArrowLeft /> go back to home
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
