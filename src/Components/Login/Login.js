import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../Authentication/AuthProvideContext";

const Login = () => {
  const { user, setUser, login, loading, setLoading } = useContext(authContext);
  const { Googlelogin } = useContext(authContext);

  let navigate = useNavigate();
  let location = useLocation();
  let from = location?.state?.from?.pathname;

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    login(email, password)
      .then((result) => {
        const user = result.user;
        if (user?.uid) {
          navigate(from, { replace: true });
        } else {
          alert("Varify your email first");
        }
        console.log("login done", user);
      })
      .catch((er) => console.error(er));
  };
  const handleGoogle = (event) => {
    Googlelogin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
        if (loading) {
          alert("loding");
        }

        if (user?.uid) {
          navigate(from, { replace: true });
        } else {
          alert("Varify your email first");
        }
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center ">Login Now</h2>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <p className="p-2  text-black">
                  don't have an account?{" "}
                  <span className="font-bold text-red-500 ">
                    <Link to="/register">Register</Link>
                  </span>
                </p>
                <div className="flex justify-center">
                  <FcGoogle
                    onClick={handleGoogle}
                    className="text-3xl "
                  ></FcGoogle>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
