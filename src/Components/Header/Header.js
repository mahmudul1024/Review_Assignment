import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logimage from "../../assets/images/banner/1.jpg";
import imgdefault from "../../assets/images/banner/Data/image.jpg";
import { authContext } from "../Authentication/AuthProvideContext";

const Header = () => {
  const { user, logout } = useContext(authContext);

  // console.log("i am header", user);

  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((er) => console.er(er));
  };

  return (
    <div className="navbar bg-green-300   h-28  sticky top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            {/* burger icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          {/* for mobile view */}
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Services</Link>
            </li>
            <li>
              <Link to="addservice">Add Service</Link>
            </li>
            {user?.uid ? (
              <>
                <li>
                  <Link to="/myreview">My Reviews</Link>
                </li>
              </>
            ) : (
              <> </>
            )}
          </ul>
        </div>
        <Link className="p-3 rounded-xl normal-case btn text-2xl py-2 ">
          Helix Photography
        </Link>
      </div>
      {/* for desktop view */}
      <div className="rounded bg-amber-300 flex justify-end w-full ml-24">
        <div className="  w-full flex  justify-start     ">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li>
                <Link to="/">Services</Link>
              </li>
              <li>
                <Link to="addservice">Add Service</Link>
              </li>
              {user?.uid ? (
                <>
                  <li>
                    <Link to="/myreview">My Reviews</Link>
                  </li>
                </>
              ) : (
                <> </>
              )}
            </ul>
          </div>
        </div>
        <div className="flex justify-end w-full">
          {user?.uid ? (
            <>
              <div className="dropdown dropdown-end ">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li>
                    <Link>Settings</Link>
                  </li>
                  <li>
                    <Link onClick={handleLogout}>Logout</Link>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <button className="text-xl p-3 ">
                <Link to="/login">Login</Link>
              </button>{" "}
            </>
          )}
          {/* <button className="text-xl p-3 ">Login</button>  */}
          {/* <div className="dropdown dropdown-end ">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={logimage} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link>Settings</Link>
              </li>
              <li>
                <Link>Logout</Link>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
