import { Link,} from "react-router-dom";
import logo from "../../assets/Images/logo.png";

const Navbar = () => {
  const NavItems = (
    <>
      <li className="text-lg font-semibold">
        <Link className="text-theme-200">Home</Link>
      </li>
      <li className="text-lg font-semibold">
        <Link className="text-theme-200">Course</Link>
      </li>
      <li className="text-lg font-semibold">
        <Link className="text-theme-200">Instructors</Link>
      </li>
      <li className="text-lg font-semibold">
        <Link className="text-theme-200">Blogs</Link>
      </li>
      <li className="text-lg font-semibold">
        <Link className="text-theme-200">Contact</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-md container mx-auto">
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
          <img className="w-44" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {NavItems}
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <Link className="normal-case rounded-2xl md:text-md btn">Sign in</Link>
        <Link className="normal-case rounded-2xl md:text-md btn bg-theme-100 text-white hover:bg-theme-200   px-8 duration-300">Join Now</Link>
      </div>
    </div>
  );
};

export default Navbar;
