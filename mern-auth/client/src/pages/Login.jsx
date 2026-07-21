import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function Login() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      {
        email,
        password,
      }
    );

    alert(res.data.message);

    navigate("/home");

  } catch (err) {
    alert(err.response?.data?.message || "Login Failed");
  }
};

  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen">

        <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          MERN Auth
        </div>

        <div className="w-full bg-white rounded-lg shadow sm:max-w-md">
          <div className="p-6 space-y-5">

            <h1 className="text-2xl font-bold">
              Sign in to your account
            </h1>

            <form className="space-y-4"  onSubmit={handleLogin} >

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Email
                </label>

                <input
  type="email"
  placeholder="name@gmail.com"
  className="w-full border rounded-lg p-2.5"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Password
                </label>

                <input
  type="password"
  placeholder="********"
  className="w-full border rounded-lg p-2.5"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700"
              >
                Sign In
              </button>

              <p className="text-sm text-center">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-blue-600 font-semibold"
                >
                  Register
                </Link>
              </p>

            </form>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Login;
