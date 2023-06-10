import { Link } from "react-router-dom";
import google from "../../assets/Images/google.png";

import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useState } from "react";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="container mx-auto">
      <div className="hero min-h-screen bg-base-200">
        <div className="card w-full max-w-xl shadow-2xl bg-base-100">
          <h2 className="bg-theme-100 text-white rounded-t-xl w-full p-4 text-2xl font-bold text-center">
            Sign up
          </h2>
          <div className="card-body rounded-b-xl">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                required
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered rounded-xl"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  required
                  name="email"
                  type="text"
                  placeholder="email"
                  className="input input-bordered rounded-xl"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  required
                  name="photoURL"
                  type="url"
                  placeholder="photo"
                  className="input input-bordered rounded-xl"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  required
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered rounded-xl"
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  required
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                id="password"
                onChange={handlePasswordChange}
                  placeholder="confirm password"
                  className="input input-bordered rounded-xl"
                />
                <div className="absolute right-6 bottom-1">
                  <button
                    className="text-2xl text-slate-700"
                    onClick={handleTogglePassword}
                  >
                    {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                  </button>
                </div>
              </div>
            </div>
            <div className="divider">OR</div>
            <Link className="btn normal-case rounded-xl btn-outline">
              <img className="w-5" src={google} alt="" />
              Sign in with google
            </Link>
            <div className="form-control mt-6">
              <Link className="rounded-xl text-lg btn bg-theme-100 text-white hover:bg-theme-200 duration-300 normal-case">
                Sign up
              </Link>
            </div>
            <div className="text-center py-2">
              <p className="label-text">
                I have an account?
                <Link to="/signIn" className="btn-link mx-2">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
