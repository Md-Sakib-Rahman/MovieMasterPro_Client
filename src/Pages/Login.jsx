import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { Context } from "../Context/Context";

const Login = () => {
  const { login , signInWithGoogle, updateUserProfile} = useContext(Context);
  const navigate = useNavigate()
  const handleLogin = async(e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    await login(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user Signed In")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
  };
  const handleGoogleSignIn = async()=>{
    await signInWithGoogle().then(async(result) => {
      console.log("signed in with google")
      const user = result.user;

      await updateUserProfile({
        displayName: user.name,
        photoURL: user.photoUrl,
      });
      // console.log(result)
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
            <h1 className="text-xl font-bold">Login now!</h1>
          </div>
          <form onSubmit={handleLogin} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" name="email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" name="password"/>
              <div className="flex flex-col justify-center gap-2 mt-2">
                <a className="link link-hover hover:text-primary">
                  Forgot password?
                </a>
                <Link
                  to="/register"
                  className="link link-hover hover:text-primary"
                >
                  Don't have an account?
                </Link>
              </div>
              <button className="btn btn-primary mt-4 " type="submit">Login</button>
              <div className="flex justify-center items-center w-full">
                <hr className="w-[45%]" />
                <p className="text-center">or</p>
                <hr className="w-[45%]" />
              </div>
              <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]" type="button">
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
                Login with Google
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
