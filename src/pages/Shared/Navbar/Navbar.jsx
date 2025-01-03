import { useContext, useState } from "react";
import {
  FaBars,
  FaShoppingCart,
  FaTimesCircle,
  FaToggleOff,
  FaToggleOn,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../../../providers/AuthProviders";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logOut, user } = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  return (
    <>
      <div className="flex items-center justify-between relative px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        {/* logo section  */}
        <Link to="/" className="">
          <span className="ml-2 text-2xl font-bold tracking-wide">
            take<span className="text-yellow-700">Eat</span>
          </span>
        </Link>
        <div className="flex">
          {/* TODO: add dart mode [pc]
          {darkMode ? (
            <button
              onClick={toggleDarkMode}
              className="items-center hidden lg:flex"
            >
              <FaToggleOn className="text-2xl" />
            </button>
          ) : (
            <button
              onClick={toggleDarkMode}
              className="items-center hidden lg:flex"
            >
              <FaToggleOff className="text-2xl" />
            </button>
          )} */}
          {/* nav section  */}
          <ul className="items-center hidden space-x-8 mx-4 lg:flex font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/order/offered"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Order
              </NavLink>
            </li>
          </ul>
          {/* button section  */}

          {user ? (
            <div className="hidden lg:flex items-center gap-4 ">
              <Link to={"/dashboard/cart"}>
                <div className="btn text-lg">
                  <FaShoppingCart />
                  {cart.length}
                </div>
              </Link>
              <div className="dropdown dropdown-end z-50">
                <div tabIndex={0} role="button">
                  <img
                    className="h-14 w-14 rounded-full"
                    src={`${user?.photoURL}`}
                    alt=""
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={`Hey, ${
                      user?.displayName?.split(" ")[0]
                    }!`}
                  />

                  <Tooltip id="my-tooltip" className="z-50" />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                >
                  <li>
                    <Link
                      to={isAdmin ? "dashboard/admin" : "dashboard/user"}
                      className="default"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <button onClick={() => logOut()} className="default">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link to="/login" className="hidden lg:flex">
              <button className="btn">Login</button>
            </Link>
          )}
        </div>
        {/* mobile navbar section  */}
        <div className="lg:hidden">
          {/* dropdown open button  */}
          <button onClick={() => setIsMenuOpen(true)}>
            <FaBars className="text-slate-900 text-3xl" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-50">
              <div
                className={`p-5  border rounded shadow-sm ${
                  darkMode ? "dark" : "bg-white"
                }`}
              >
                {/* logo & button section  */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {user ? (
                      <img
                        className="h-14 w-14 rounded-full"
                        src={`${user?.photoURL}`}
                        alt=""
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content={user?.displayName?.split(" ")[0]}
                      />
                    ) : (
                      <Link to="/" className="inline-flex items-center">
                        <span className="ml-2 text-2xl font-bold tracking-wide">
                          take
                          <span className="text-yellow-700">Eat</span>
                        </span>
                      </Link>
                    )}
                    {user && (
                      <Link to={"/dashboard/cart"}>
                        <div className="flex items-center gap-1 bg-slate-900 rounded-full p-2 text-yellow-700 text-lg">
                          <FaShoppingCart />
                          {cart.length}
                        </div>
                      </Link>
                    )}
                  </div>
                  {/* dropdown menu close button  */}
                  <div className="flex gap-x-2 items-center">
                    {/*  TODO: add dart mode [mobile]
                    {darkMode ? (
                      <button onClick={toggleDarkMode} className="">
                        <FaToggleOn className="text-2xl" />
                      </button>
                    ) : (
                      <button onClick={toggleDarkMode} className="">
                        <FaToggleOff className="text-2xl" />
                      </button>
                    )} */}
                    <button onClick={() => setIsMenuOpen(false)}>
                      <FaTimesCircle className="text-red-600 text-3xl" />
                    </button>
                  </div>
                </div>
                {/* mobile nav items section  */}
                <nav className="ml-2">
                  <ul className="space-y-4 font-medium">
                    <li>
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/menu"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        Menu
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/order/offered"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        Order
                      </NavLink>
                    </li>
                    {user && isAdmin && (
                      <li>
                        <Link to={"dashboard/admin"} className="default">
                          Dashboard
                        </Link>
                      </li>
                    )}
                    {user && !isAdmin && (
                      <li>
                        <Link to={"dashboard/user"} className="default">
                          Dashboard
                        </Link>
                      </li>
                    )}
                    {user && <li onClick={logOut}>Logout</li>}
                    {!user && <Link to="/login">Login</Link>}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
      <hr className="bg-gray-50" />
    </>
  );
};

export default Navbar;
