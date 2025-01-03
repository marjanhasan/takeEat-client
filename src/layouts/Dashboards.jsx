import {
  FaBars,
  FaCalendar,
  FaDollarSign,
  FaHamburger,
  FaHome,
  FaHouseUser,
  FaList,
  FaShoppingBag,
  FaShoppingCart,
  FaTimesCircle,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import { useState } from "react";

const Dashboards = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="relative">
      <div className="hidden lg:flex">
        <div className="w-fit pr-6 min-h-screen bg-orange-300">
          <Link to="/">
            <div className="pl-8 mt-6 text-2xl font-bold tracking-wide">
              take<span className="text-yellow-700">Eat</span>
            </div>
          </Link>
          <div className="divider"></div>
          <ul className="pl-8 mt-6 uppercase text-xl">
            {isAdmin ? (
              <>
                <li className="pb-4">
                  <NavLink
                    to={"/dashboard/admin"}
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    <span className="flex items-center gap-2">
                      <FaHouseUser /> Admin
                    </span>
                  </NavLink>
                </li>
                <li className="pb-4">
                  <NavLink
                    to={"/dashboard/add-items"}
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    <span className="flex items-center gap-2">
                      <FaUtensils /> add items
                    </span>
                  </NavLink>
                </li>
                <li className="pb-4">
                  <NavLink
                    to={"/dashboard/manage-items"}
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    <span className="flex items-center gap-2">
                      <FaList /> manage items
                    </span>
                  </NavLink>
                </li>
                <li className="pb-4">
                  <NavLink
                    to={"/dashboard/all-users"}
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    <span className="flex items-center gap-2">
                      <FaUsers /> all users
                    </span>
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="pb-4">
                  <NavLink
                    to={"/dashboard/user"}
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    <span className="flex items-center gap-2">
                      <FaHouseUser /> User
                    </span>
                  </NavLink>
                </li>
                <li className="pb-4">
                  <NavLink
                    to={"/dashboard/payment-history"}
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    <span className="flex items-center gap-2">
                      <FaCalendar /> Payment History
                    </span>
                  </NavLink>
                </li>
                <li className="pb-4">
                  <NavLink
                    to={"/dashboard/cart"}
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    <span className="flex items-center gap-2">
                      <FaShoppingCart /> cart ({cart.length})
                    </span>
                  </NavLink>
                </li>
                <li className="pb-4">
                  <NavLink
                    to={"/dashboard/payment"}
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    <span className="flex items-center gap-2">
                      <FaDollarSign /> payment
                    </span>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          <div className="divider"></div>
          <ul className="pl-8 uppercase text-xl font-semibold">
            <li className="pb-4">
              <Link to="/">
                <span className="flex items-center gap-2">
                  <FaHome /> Home
                </span>
              </Link>
            </li>
            <li className="pb-4">
              <Link to="/menu">
                <span className="flex items-center gap-2">
                  <FaHamburger /> Menu
                </span>
              </Link>
            </li>
            <li className="pb-4">
              <Link to="/order/offered">
                <span className="flex items-center gap-2">
                  <FaShoppingBag /> Order
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
      <div className="lg:hidden">
        {/* dropdown open button  */}
        <div className="flex justify-between items-center px-4 pt-6">
          <Link to="/" className="inline-flex items-center">
            <span className="text-2xl font-bold tracking-wide">
              take
              <span className="text-yellow-700">Eat</span>
            </span>
          </Link>
          <button onClick={() => setIsMenuOpen(true)}>
            <FaBars className="text-slate-900 text-3xl" />
          </button>
        </div>
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full z-50">
            <div className={`px-4 pt-6  border rounded shadow-sm bg-white`}>
              {/* logo & button section  */}
              <div className="flex items-center justify-between">
                {/* dropdown menu close button  */}
                <Link to="/" className="inline-flex items-center">
                  <span className="text-2xl font-bold tracking-wide">
                    take
                    <span className="text-yellow-700">Eat</span>
                  </span>
                </Link>
                <div className="flex gap-x-2 items-center justify-end">
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
                <ul className="mt-6 uppercase text-lg">
                  {isAdmin ? (
                    <>
                      <li className="pb-4">
                        <NavLink
                          to={"/dashboard/admin"}
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }
                        >
                          <span className="flex items-center gap-2">
                            <FaHouseUser /> Admin
                          </span>
                        </NavLink>
                      </li>
                      <li className="pb-4">
                        <NavLink
                          to={"/dashboard/add-items"}
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }
                        >
                          <span className="flex items-center gap-2">
                            <FaUtensils /> add items
                          </span>
                        </NavLink>
                      </li>
                      <li className="pb-4">
                        <NavLink
                          to={"/dashboard/manage-items"}
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }
                        >
                          <span className="flex items-center gap-2">
                            <FaList /> manage items
                          </span>
                        </NavLink>
                      </li>
                      <li className="pb-4">
                        <NavLink
                          to={"/dashboard/all-users"}
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }
                        >
                          <span className="flex items-center gap-2">
                            <FaUsers /> all users
                          </span>
                        </NavLink>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="pb-4">
                        <NavLink
                          to={"/dashboard/user"}
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }
                        >
                          <span className="flex items-center gap-2">
                            <FaHouseUser /> User
                          </span>
                        </NavLink>
                      </li>
                      <li className="pb-4">
                        <NavLink
                          to={"/dashboard/payment-history"}
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }
                        >
                          <span className="flex items-center gap-2">
                            <FaCalendar /> Payment History
                          </span>
                        </NavLink>
                      </li>
                      <li className="pb-4">
                        <NavLink
                          to={"/dashboard/cart"}
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }
                        >
                          <span className="flex items-center gap-2">
                            <FaShoppingCart /> cart ({cart.length})
                          </span>
                        </NavLink>
                      </li>
                      <li className="pb-4">
                        <NavLink
                          to={"/dashboard/payment"}
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }
                        >
                          <span className="flex items-center gap-2">
                            <FaDollarSign /> payment
                          </span>
                        </NavLink>
                      </li>
                    </>
                  )}
                </ul>
                <div className="divider"></div>
                <ul className="uppercase text-lg font-semibold">
                  <li className="pb-4">
                    <Link to="/">
                      <span className="flex items-center gap-2">
                        <FaHome /> Home
                      </span>
                    </Link>
                  </li>
                  <li className="pb-4">
                    <Link to="/menu">
                      <span className="flex items-center gap-2">
                        <FaHamburger /> Menu
                      </span>
                    </Link>
                  </li>
                  <li className="pb-4">
                    <Link to="/order/offered">
                      <span className="flex items-center gap-2">
                        <FaShoppingBag /> Order
                      </span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboards;
