import { Link, useNavigate } from "react-router-dom";
import google from "../../assets/Images/google.png";
import { useForm } from "react-hook-form";

import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/Auth/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const SignUp = () => {
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateUserProfile, setLoading, googleLoginPopup } =
    useContext(AuthContext);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;

    createUser(email, password)
      .then(() => {
        // Signed up
        setLoading(true);
        const profile = { displayName: name, photoURL: photo };
        updateUserProfile(profile)
          .then(() => {
            window.alert("Signup Successfully");
            navigate('/signIn')
            reset();
          })
          .catch((err) => {
            setLoading(false);
            console.log(err.message);
          });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });

    const photo = data.photoURL;

    console.log(name, password, email, photo);
  };

  // Sing Up with google

  const handelLoginWithGoogle = () => {
    googleLoginPopup(googleProvider)
      .then((user) => {
        // Signed in
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
  const password = useRef({});
  password.current = watch("password", "");

  return (
    <div className="container mx-auto py-12">
      <div className="hero bg-base-200">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card w-full max-w-xl shadow-2xl bg-base-100"
        >
          <h2 className="bg-theme-100 text-white rounded-t-xl w-full p-4 text-2xl font-bold text-center">
            Sign up
          </h2>
          <div className="card-body rounded-b-xl">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", {
                  required: true,
                  maxLength: 30,
                  minLength: 6,
                })}
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered rounded-xl"
              />
              {errors.name?.type === "required" && (
                <span className="text-red-600 label-text m-1">
                  Name is required
                </span>
              )}
              {errors.name?.type === "maxLength" && (
                <span className="text-red-600 label-text m-1">
                  Maximum 20 character
                </span>
              )}
              {errors.name?.type === "minLength" && (
                <span className="text-red-600 label-text m-1">
                  Minimum 6 character
                </span>
              )}
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", {
                    required: true,
                    maxLength: 30,
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  {...register("photoURL", { required: true })}
                  name="photoURL"
                  type="url"
                  placeholder="photo"
                  className="input input-bordered rounded-xl"
                />
                {errors.photoURL?.type === "required" && (
                  <span className="text-red-600 label-text m-1">
                    Photo is required
                  </span>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: "Confirm Password is required",
                    maxLength: 30,
                    minLength: 6,
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/,
                  })}
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered rounded-xl"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600 label-text m-1">
                    Password is required
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-600 label-text m-1">
                    Maximum 20 character
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600 label-text m-1">
                    Minimum 6 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600 label-text m-1">
                    Password must contain at least one uppercase letter, one
                    lowercase letter, one number, and one special character
                  </span>
                )}
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === password.current || "Passwords do not match",
                    maxLength: 30,
                    minLength: 8,
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/,
                  })}
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="confirm password"
                  className="input input-bordered rounded-xl"
                />
                {errors.confirmPassword?.type === "required" && (
                  <span className="text-red-600 label-text m-1">
                    Confirm password is required
                  </span>
                )}
                {errors.confirmPassword && (
                  <p className="text-red-600 label-text mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
                {errors.confirmPassword?.type === "maxLength" && (
                  <span className="text-red-600 label-text m-1">
                    Maximum 20 character
                  </span>
                )}
                {errors.confirmPassword?.type === "minLength" && (
                  <span className="text-red-600 label-text m-1">
                    Minimum 8 characters
                  </span>
                )}
                {errors.confirmPassword?.type === "pattern" && (
                  <span className="text-red-600 label-text m-1">
                    Password must contain at least one uppercase letter, one
                    lowercase letter, one number, and one special character
                  </span>
                )}
                <div className="absolute right-6 bottom-3">
                  <p
                    className="md:text-xl text-lg text-slate-700 cursor-pointer"
                    onClick={handleTogglePassword}
                  >
                    {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                  </p>
                </div>
              </div>
            </div>
            <div className="divider">OR</div>
            <Link
              onClick={handelLoginWithGoogle}
              className="btn normal-case rounded-xl btn-outline"
            >
              <img className="w-5" src={google} alt="" />
              Sign in with google
            </Link>
            <div className="form-control mt-6">
              <button className="rounded-xl text-lg btn bg-theme-100 text-white hover:bg-theme-200 duration-300 normal-case">
                Sign up
              </button>
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
        </form>
      </div>
    </div>
  );
};

export default SignUp;
