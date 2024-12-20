import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser } = useContext(AuthContext);
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <Helmet>
        <title>Restaurant App - Sign Up</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
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
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover uppercase"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn uppercase" type="submit" value="signup" />
            </div>
          </form>
          <Link
            to={"/login"}
            className="text-xs uppercase font-bold text-yellow-700 text-center mb-4"
          >
            already have an account? login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
