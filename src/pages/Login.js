import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  getUserData,
  loginUser,
} from '../features/users/UserSlice';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: 'admin2@admin.com',
    password: 'admin',
    rememberMe: false,
  });
  const data = useSelector(getUserData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignIn = async () => {
    dispatch(loginUser({credentials , onSuccess : () => navigate('/')}))
  };
  return (
    <section className='bg-primary dark:bg-primary'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <div className='w-full bg-secondary rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-secondary dark:bg-secondary'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-text'>
              Sign in to your account
            </h1>
            <form
              className='space-y-4 md:space-y-6'
              action='#'
              onSubmit={handleSignIn}
            >
              <div>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-text'
                >
                  Your email
                </label>
                <input
                  type='email'
                  value={credentials.email}
                  className='bg-gray-50 border border-gray-300 text-text sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary  dark:placeholder-gray-400 dark:text-text  dark:focus:bg-primary'
                  placeholder='name@company.com'
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
                <label
                  htmlFor='password'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-text'
                >
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='••••••••'
                  className='bg-gray-50 border border-gray-300 text-text sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary  dark:placeholder-gray-400 dark:text-text  dark:focus:bg-primary'
                  required
                  value={credentials.password}
                  onChange={(e) =>
                    setCredentials((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                />
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-start'>
                  <div className='flex items-center h-5'>
                    <input
                      id='remember'
                      aria-describedby='remember'
                      type='checkbox'
                      className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'
                      required=''
                      value={credentials.rememberMe}
                      onChange={(e) =>
                        setCredentials((prev) => ({
                          ...prev,
                          rememberMe: e.target.checked,
                        }))
                      }
                    />
                  </div>
                  <div className='ml-3 text-sm'>
                    <label
                      htmlFor='remember'
                      className='text-text  dark:text-text'
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href='/forgot'
                  className='text-sm font-medium text-primary-600 text-text hover:underline dark:text-primary-500'
                >
                  Forgot password?
                </a>
              </div>
              <button
                type='submit'
                className='w-full bg-text text-primary bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
              >
                Sign in
              </button>
              <p className='text-sm font-light text-primary dark:text-primary'>
                Don’t have an account yet?{' '}
                <Link
                  to={'/register'}
                  className='font-medium text-primary hover:underline dark:text-primary'
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
// #A881F2
