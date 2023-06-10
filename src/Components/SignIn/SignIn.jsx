import { Link } from "react-router-dom";

import google from "../../assets/Images/google.png";

const SignIn = () => {
  return (
    <div className="container mx-auto">
      <div className="hero min-h-screen bg-base-200">
        <div className="card w-full max-w-md shadow-2xl bg-base-100">
          <h2 className="bg-theme-100 text-white rounded-t-xl w-full p-4 text-2xl font-bold text-center">
            Sign in
          </h2>
          <div className="card-body rounded-b-xl">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered rounded-xl"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered rounded-xl"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="divider">OR</div>
            <Link className="btn normal-case rounded-xl btn-outline">
              <img className="w-5" src={google} alt="" />
              Sign in with google
            </Link>
            <div className="form-control mt-6">
              <Link className="rounded-xl text-lg btn bg-theme-100 text-white hover:bg-theme-200 duration-300 normal-case">
                Login
              </Link>
            </div>
            <div className="flex py-2">
              <p className="label-text">
                Don’t have an account?
                <Link className="btn-link mx-2">Sign up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
