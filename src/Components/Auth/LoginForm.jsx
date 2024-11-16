import bg from "../../assets/loginpage.jpg";
import { Link } from "react-router-dom";

function LoginForm() {
  
  return (
    <section>
      <div
        className="pt-32 min-h-screen flex justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,1)), url(${bg})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',  
          backgroundSize: 'cover',
        }}
      >
        <div className="border-2 border-gray-900 rounded-lg m-20 h-[62vh] w-[50vw]">
          <h1 className="text-4xl font-bold text-center p-8">LOGIN</h1>
          <hr className="w-[80%] mx-auto border-gray-500" />

          <form action="" className="pt-8 flex flex-col items-center">
            <div className="w-[80%] flex items-center justify-between p-4">
              <label htmlFor="username" className="text-lg font-semibold">
                Username
              </label>
              <input
                required
                type="username"
                name="username"
                id="username"
                className="w-[60%] p-2 rounded-lg border border-gray-300"
              />
            </div>

            <div className="w-[80%] flex items-center justify-between p-4">
              <label htmlFor="email" className="text-lg font-semibold">
                Password
              </label>
              <input
                required
                type="password"
                name="password"
                id="password"
                className="w-[60%] p-2 rounded-lg border border-gray-300"
              />
            </div>

            <button className="border-2 border-gray-600 px-6 py-3 rounded-lg mt-5 hover:border-white hover:bg-indigo-600 hover:text-white mb-5"> Login </button>
            <p>New to DONO? Lets get you <Link to="/register" className="text-teal-800">registered!</Link></p>
          </form>
          
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
