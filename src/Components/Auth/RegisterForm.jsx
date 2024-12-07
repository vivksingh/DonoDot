import { Link } from "react-router-dom";
import bg from "../../assets/loginpage.jpg";
import { useRef, useState } from "react";

function RegisterForm() {
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [img, setImg] = useState(null);
  const [user, setUser] = useState({
    username: "",
    name: "",
    about: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleFileChange = (e) => {
    setImg(e.target.files[0]);
  };

  const isValidPassword = () => {
    return passwordRef.current.value === confirmPasswordRef.current.value;
  };

  const isValidUsername = async () => {
    return fetch(`http://localhost:8080/users/available/${user.username}`)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        return res;
      })
      .catch(err => {
        console.log(err);
        return false;
      });
  };

  const checkUsername = () => {
    const username = user.username.trim();

    if(username.length < 7) {
      alert("Username should be at least 7 characters long");
      return false;
    }

    return true;
  }
  

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!isValidPassword()) {
      alert("Password does not match! Try again");
      return;
    }

    if(!checkUsername()) {
      return;
    }

    if (!(await isValidUsername())) {
      alert("Username already exists! Try again");
      return;
    }

    const data = new FormData();
    const userData = {
      name: user.name,
      username: user.username,
      password: passwordRef.current.value,
      about: user.about,
      address: user.address,
    };

    data.append("user", new Blob([JSON.stringify(userData)], { type: "application/json" }));
    data.append("profile_pic", img);

    console.log(data);
    
    console.dir(data);

    fetch("http://localhost:8080/users/register", {
      method: "POST",
      body: data,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to register user");
        }
        
        return response.json();
      })
      .then((result) => {
        alert("Registration successful!");
        console.log(result);
      })
      .catch((error) => {
        alert("Registration failed. Please try again.");
        console.error(error);
      });
    

    // Perform the form submission with your backend endpoint
    // Example:
    // await fetch('http://localhost:8080/api/register', { method: 'POST', body: data });
  };

  return (
    <section>
      <div
        className="pt-32 min-h-screen flex justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.60), rgba(255,255,255,1)), url(${bg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="border-2 border-gray-900 rounded-lg m-20 h-[80vh] w-[90vw]">
          <h1 className="text-4xl font-bold text-center p-8">Register</h1>
          <hr className="w-[80%] mx-auto border-gray-500" />

          <form onSubmit={onSubmit} className="pt-8 flex flex-col items-center">
            <div className="w-[80%] flex flex-col space-y-8">
              <div className="w-full flex justify-between">
                <div className="w-[45%] flex items-center gap-4">
                  <label htmlFor="username" className="text-lg font-semibold">
                    Email
                  </label>
                  <input
                    required
                    onChange={handleInputChange}
                    type="text"
                    name="username"
                    id="username"
                    className="w-full p-2 rounded-lg border border-gray-300"
                  />
                </div>
                <div className="w-[45%] flex items-center gap-4">
                  <label htmlFor="name" className="text-lg font-semibold">
                    Name
                  </label>
                  <input
                    onChange={handleInputChange}
                    required
                    type="name"
                    name="name"
                    id="name"
                    className="w-full p-2 rounded-lg border border-gray-300"
                  />
                </div>
              </div>

              <div className="w-full flex justify-between">
                <div className="w-[40%] flex items-center gap-4">
                  <label htmlFor="password" className="text-lg font-semibold">
                    Password
                  </label>
                  <input
                    required
                    ref={passwordRef}
                    type="password"
                    name="password"
                    id="password"
                    className="w-full p-2 rounded-lg border border-gray-300"
                  />
                </div>
                <div className="w-[45%] flex items-center gap-4">
                  <label htmlFor="confirm-password" className="text-lg font-semibold">
                    Confirm Password
                  </label>
                  <input
                    required
                    ref={confirmPasswordRef}
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    className="w-full p-2 rounded-lg border border-gray-300"
                  />
                </div>
              </div>

              <div className="w-full flex justify-between">
                <div className="w-[45%] flex items-center gap-4">
                  <label htmlFor="about" className="text-lg font-semibold">
                    About you
                  </label>
                  <textarea
                    onChange={handleInputChange}
                    name="about"
                    id="about"
                    className="w-[70%] p-2 rounded-lg border border-gray-300"
                  />
                </div>
                <div className="w-[45%] flex items-center gap-4">
                  <label htmlFor="address" className="text-lg font-semibold">
                    Address
                  </label>
                  <textarea
                    onChange={handleInputChange}
                    name="address"
                    id="address"
                    className="w-full p-2 rounded-lg border border-gray-300"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="profile-pic" className="text-lg font-semibold">
                  Profile Picture{" "}
                </label>
                <input onChange={handleFileChange} className="px-4" id="profile-pic" type="file" />
              </div>
            </div>

            <button className="border-2 border-gray-600 px-6 py-3 rounded-lg mt-5 hover:border-white hover:bg-indigo-600 hover:text-white mb-5">
              Register
            </button>
            <p>
              Already have an account? Let's get you{" "}
              <Link to="/login" className="text-teal-800">
                logged in!
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default RegisterForm;
