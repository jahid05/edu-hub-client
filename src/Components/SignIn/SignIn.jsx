import { Link, useNavigate } from "react-router-dom";
import google from "../../assets/Images/google.png";
import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import Swal from 'sweetalert2';



const SignIn = () => {
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const { signIn, googleLoginPopup } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // sign in email & password
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    signIn(email, password)
      .then((user) => {
        // Signed in
        console.log(user);
        Swal.fire({
          title: 'Sign in',
          text: 'Sign in completed successfully.',
          icon: 'success',
        });
        navigate('/')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        console.log(errorCode, errorMessage);
      });
  };

  //  google login popupo

  const handelLoginWithGoogle = () => {
    googleLoginPopup(googleProvider)
      .then((user) => {
        // Signed in
        Swal.fire({
          title: 'Sign in',
          text: 'Sign in completed successfully.',
          icon: 'success',
        });
        console.log(user);
        navigate('/')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="container mx-auto py-12">
      <div className="hero bg-base-200">
        <div className="card w-full max-w-md shadow-2xl bg-base-100">
          <h2 className="bg-theme-100 text-white rounded-t-xl w-full p-4 text-2xl font-bold text-center">
            Sign in
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body rounded-b-xl"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: true,
                  maxLength: 20,
                  minLength: 6,
                })}
                name="email"
                type="text"
                placeholder="email"
                className="input input-bordered rounded-xl"
              />
              {errors.email?.type === "required" && (
                <span className="text-red-600 label-text m-1">
                  Email is required
                </span>
              )}
              {errors.email?.type === "maxLength" && (
                <span className="text-red-600 label-text m-1">
                  Maximum 20 character
                </span>
              )}
              {errors.email?.type === "minLength" && (
                <span className="text-red-600 label-text m-1">
                  Minimum 6 character
                </span>
              )}
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", { required: true })}
                name="password"
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="password"
                className="input input-bordered rounded-xl"
              />
              <div className="absolute right-6 bottom-11">
                <p
                  className="md:text-xl text-lg text-slate-700 cursor-pointer"
                  onClick={handleTogglePassword}
                >
                  {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                </p>
              </div>
              {errors.password?.required && (
                <span className="text-red-600 label-text m-1">
                  Password is required
                </span>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="divider">OR</div>
            <Link
              onClick={handelLoginWithGoogle}
              className="btn normal-case rounded-xl btn-outline"
            >
              <img className="w-5" src={google} alt="" />
              Sign in with google
            </Link>
            <button className="rounded-xl mt-4 text-lg btn bg-theme-100 text-white hover:bg-theme-200 duration-300 normal-case">
              Sign in
            </button>
            <div className="text-center py-2">
              <p className="label-text">
                Don’t have an account?
                <Link to="/signUp" className="btn-link mx-2">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
