import React, { useState } from "react";
import bg from "../../assets/loginpage.jpg";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // For navigation after login

  const handleLogin = async (e) => {
    e.preventDefault();

    // Check for valid email format before proceeding
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
      alert("Invalid email format. Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.text();
      const token = data; // Assuming your backend sends the token as plain text
      alert("Login successful");
      console.log(data);

      // Save the token for later use
      localStorage.setItem("token", token);

      // Redirect the user after login
      navigate("/"); // Replace with your desired route
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section>
      <div
        className="pt-32 min-h-screen flex justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,1)), url(${bg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="border-2 border-gray-900 rounded-lg m-20 h-[62vh] w-[50vw]">
          <h1 className="text-4xl font-bold text-center p-8">LOGIN</h1>
          <hr className="w-[80%] mx-auto border-gray-500" />

          <form onSubmit={handleLogin} className="pt-8 flex flex-col items-center">
            <div className="w-[80%] flex items-center justify-between p-4">
              <label htmlFor="username" className="text-lg font-semibold">
                Email
              </label>
              <input
                required
                type="text"
                name="username"
                id="username"
                className="w-[60%] p-2 rounded-lg border border-gray-300"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="w-[80%] flex items-center justify-between p-4">
              <label htmlFor="password" className="text-lg font-semibold">
                Password
              </label>
              <input
                required
                type="password"
                name="password"
                id="password"
                className="w-[60%] p-2 rounded-lg border border-gray-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <p className="text-red-500 mt-2">{error}</p>}

            <button
              type="submit"
              className="border-2 border-gray-600 px-6 py-3 rounded-lg mt-5 hover:border-white hover:bg-indigo-600 hover:text-white mb-5"
            >
              Login
            </button>
            <p>
              New to DONO? Let&apos;s get you{" "}
              <Link to="/register" className="text-teal-800">
                registered!
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
