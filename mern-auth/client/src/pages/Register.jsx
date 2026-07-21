import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {

  e.preventDefault();

  try {

    const res = await axios.post(
      "http://localhost:5000/api/auth/register",
      {
        name,
        email,
        password
      }
    );

    alert(res.data.message);

    navigate("/");

  } catch(err) {

    alert(
      err.response?.data?.message || 
      "Registration Failed"
    );

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
              Create an Account
            </h1>

            <form className="space-y-4" onSubmit={handleRegister}>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Name
                </label>
                <input
  type="text"
  placeholder="Your Name"
  className="w-full border rounded-lg p-2.5"
  value={name}
  onChange={(e)=>setName(e.target.value)}
/>

              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Email
                </label>
                <input
  type="email"
  placeholder="name@gmail.com"
  className="w-full border rounded-lg p-2.5"
  value={email}
  onChange={(e)=>setEmail(e.target.value)}
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
  onChange={(e)=>setPassword(e.target.value)}
/>

              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white rounded-lg py-2 hover:bg-green-700"
              >
                Register
              </button>

              <p className="text-sm text-center">
                Already have an account?{" "}
                <Link
                  to="/"
                  className="text-blue-600 font-semibold"
                >
                  Login
                </Link>
              </p>

            </form>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Register;
