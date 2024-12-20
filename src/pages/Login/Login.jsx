import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProviders";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const captchaRef = useRef(null);
  const { signIn } = useContext(AuthContext);

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
    });
  };

  const handleCaptcha = () => {
    let captcha = captchaRef.current.value;
    validateCaptcha(captcha) ? setDisabled(false) : setDisabled(true);
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <Helmet>
        <title>Restaurant App - Login</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold uppercase">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
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
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover uppercase"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <div className="flex gap-1">
                <input
                  type="text"
                  name="captcha"
                  ref={captchaRef}
                  placeholder="type the text above"
                  className="input input-bordered"
                  required
                />
                <button className="btn uppercase" onClick={handleCaptcha}>
                  validate
                </button>
              </div>
            </div>
            <div className="form-control mt-6">
              <input
                disabled={disabled}
                className="btn uppercase"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <Link
            to={"/signup"}
            className="text-xs uppercase font-bold text-yellow-700 text-center mb-4"
          >
            New here? sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
