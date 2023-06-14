import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import { FaUser } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
  };
  console.log(user);
  const NavItems = (
    <>
      <li className="md:text-lg md:font-semibold">
        <Link className="text-theme-200">Home</Link>
      </li>
      <li className="md:text-lg md:font-semibold">
        <Link to="courses" className="text-theme-200">
          Courses
        </Link>
      </li>
      <li className="md:text-lg md:font-semibold">
        <Link className="text-theme-200">Instructors</Link>
      </li>
      <li  className="md:text-lg md:font-semibold">
        <Link to="blog" className="text-theme-200">Blogs</Link>
      </li>
      <li className="md:text-lg md:font-semibold">
        <Link className="text-theme-200">Contact</Link>
      </li>
    </>
  );
  return (
    <div className="bg-base-100 shadow-md w-full">
      <div className="navbar bg-base-100 container mx-auto justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {NavItems}
            </ul>
          </div>
          <Link to="/" className="btn normal-case text-xl">
            <img className="md:w-32 w-28" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavItems}</ul>
        </div>

        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          {user?.uid && user?.uid ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="md:text-3xl text-2xl text-theme-100 border-2 border-theme-100 rounded-full">
                  {user?.photoURL ? (
                    <img src={user?.photoURL} alt="Image" />
                  ) : (
                    <FaUser></FaUser>
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">{user?.displayName}</a>
                </li>

                <li>
                  <Link to="/dashboard" className="justify-between">Dashboard</Link>
                </li>
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <div className="navbar-end md:gap-4">
              <Link to="signIn" className="normal-case md:text-md text-sm btn">
                Sign in
              </Link>
              <Link
                to="signUp"
                className="normal-case rounded-2xl md:text-md text-sm btn bg-theme-100 text-white hover:bg-theme-200 px-2  md:px-8 duration-300"
              >
                Join Now
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
