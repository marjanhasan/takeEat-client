import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { FaArrowLeft } from "react-icons/fa";
import GoogleButton from "../../components/GoogleButton/GoogleButton";
const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password).then((res) => {
      const user = res.user;
      console.log(user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${
          user?.displayName?.split(" ")[0] || user?.email
        } successfully logged in`,
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    });
  };

  const handleCaptcha = (e) => {
    let captcha = e.target.value;
    validateCaptcha(captcha) ? setDisabled(false) : setDisabled(true);
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <Helmet>
        <title>Restaurant App - Login</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center  w-full">
          <h1 className="text-5xl font-bold">Login now!</h1>
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
            <li className="text-blue-500">
              After typing all the captcha characters click outside of the input
              button
            </li>
          </ul>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text uppercase">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text uppercase">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              {/* <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover uppercase"
                >
                  Forgot password?
                </a>
              </label> */}
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <div className="flex gap-1">
                <input
                  type="text"
                  name="captcha"
                  onBlur={handleCaptcha}
                  placeholder="type the text above"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <input
                disabled={disabled}
                className="btn"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <GoogleButton />
          <Link
            to={"/signup"}
            className="text-xs uppercase font-bold text-yellow-700 text-center mb-4"
          >
            New here? sign up
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

export default Login;
