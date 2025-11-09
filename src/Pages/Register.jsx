import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { Context } from "../Context/Context";
import axiosInstance from "../Axios/Axios";
const Register = () => {
  const { signUp, updateUserProfile, signInWithGoogle } = useContext(Context);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear old errors
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      setLoading(false);
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      setLoading(false);
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      setLoading(false);
      return;
    }

    try {
      const result = await signUp(email, password);
      const user = result.user;

      await updateUserProfile({
        displayName: name,
        photoURL: photoUrl,
      });

      const userInfo = {
        name: name,
        email: email,
        photoUrl: photoUrl,
        uid: user.uid,
      };
      const token = await user.getIdToken();
      const res = await axiosInstance.post("/users", userInfo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("User saved to database:", res.data);

      setLoading(false);
      navigate("/");
    } catch (err) {
      console.error(err);
      setError(err.message);
      setLoading(false);
    }
  };
  const handleGoogleSignIn = async()=>{
    await signInWithGoogle().then(async(result) => {
      console.log("signed in with google")
      const user = result.user;

      await updateUserProfile({
        displayName: user.name,
        photoURL: user.photoUrl,
      });
      navigate('/')
    }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
  });
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse w-[350px]">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="text-center pt-10">
            <h1 className="text-xl font-bold">Register Now </h1>
          </div>
          <form className="card-body" onSubmit={handleSubmit}>
            <fieldset className="fieldset">
              <label className="label">Your Name</label>
              <input
                type="text"
                className="input"
                placeholder="Your Name"
                name="name"
              />
              <label className="label">Image Url</label>
              <input
                type="text"
                className="input"
                placeholder="Paste your Image URL"
                name="photoUrl"
              />
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                name="password"
              />
              <div className="flex flex-col justify-center gap-2 mt-2">
                <Link
                  to="/login"
                  className="link link-hover hover:text-primary"
                >
                  Already have an account?
                </Link>
              </div>
              <button className="btn btn-primary mt-4 " type="submit">
                Register
              </button>

              <div className="flex justify-center items-center w-full">
                <hr className="w-[45%]" />
                <p className="text-center">or</p>
                <hr className="w-[45%]" />
              </div>
              <button
                className="btn bg-white text-black border-[#e5e5e5] "
                type="button"
                onClick={handleGoogleSignIn}
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Register with Google
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
