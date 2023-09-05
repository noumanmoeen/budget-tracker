import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [credentials, setCredentials] = React.useState({
    email: "",
    password: "",
    confirmPass: "",
    phone: "",
    name : '',
   });

  return (
    <section className="bg-gray-50 dark:bg-primary">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white border rounded-md shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-secondary dark:border-secondary">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-text">
              Create your new account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
            <div>
                <label
                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-text"
                >
                  Your name
                </label>
                <input
                  type="text"
                  value={credentials.name}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary dark:border-secondary dark:placeholder-gray-400 dark:text-text dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                  onChange={(e) =>
                    setCredentials((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-text"
                >
                  Your email
                </label>
                <input
                  type="email"
                  value={credentials.email}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary dark:border-secondary dark:placeholder-gray-400 dark:text-text dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                  onChange={(e) =>
                    setCredentials((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-text">
                  Your Phone number
                </label>
                <input
                  type="text"
                  value={credentials.phone}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary dark:border-secondary dark:placeholder-gray-400 dark:text-text dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="+92XXXXXXXXX"
                  required
                  onChange={(e) =>
                    setCredentials((prev) => ({
                      ...prev,
                      phone: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <label
                  for="password"
                  value={credentials.password}
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-text"
                  onChange={(e) =>
                    setCredentials((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary dark:border-secondary dark:placeholder-gray-400 dark:text-text dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  value={credentials.confirmPass}
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-text"
                  onChange={(e) =>
                    setCredentials((prev) => ({
                      ...prev,
                      confirmPass: e.target.value,
                    }))
                  }
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary dark:border-secondary dark:placeholder-gray-400 dark:text-text dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <button
                type="submit"
                className="w-full bg-text text-primary bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign up
              </button>
              <p className="text-sm font-light text-primary dark:text-primary">
                Have an account?{" "}
                <Link
                  to={"/login"}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
