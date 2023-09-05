import React from 'react';
import { Link, useResolvedPath } from 'react-router-dom';
import { ACCOUNTS, BUDGETS, DETAILS, HOME } from '../utils/constants';

const Header = () => {
  let { pathname = '/' } = useResolvedPath();

  return (
    <nav className='bg-white border-gray-200 dark:bg-primary'>
      <div className='max-w-screen-3xl flex flex-wrap items-center justify-between mx-auto px-6 py-5  '>
        <Link to={'/'}>
          <a href='/any' className='flex items-center'>
            <span className='self-center text-2xl font-semibold whitespace-nowrap '>
              Budget Tracker
            </span>
          </a>
        </Link>
        <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
          <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-primary dark:border-gray-700'>
            <li>
              <Link to={'/'}>
                <a
                  href='/any'
                  className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:${
                    pathname === HOME ? 'dark' : 'hover'
                  }:text-blue-500 md:p-0 md:dark:${
                    pathname === HOME ? '' : 'hover'
                  }:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-secondary md:dark:hover:bg-transparent`}
                  aria-current='page'
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link to={BUDGETS}>
                <a
                  href='/any'
                  className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:${
                    pathname === BUDGETS ? 'dark' : 'hover'
                  }:text-blue-500 md:p-0 md:dark:${
                    pathname === BUDGETS ? '' : 'hover'
                  }:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-secondary md:dark:hover:bg-transparent`}
                >
                  Budgets
                </a>
              </Link>
            </li>
            <li>
              <Link to={DETAILS}>
                <a
                  href='/any'
                  className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:${
                    pathname === DETAILS ? 'dark' : 'hover'
                  }:text-blue-500 md:p-0  md:dark:${
                    pathname === DETAILS ? '' : 'hover'
                  }:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-secondary md:dark:hover:bg-transparent`}
                >
                  Details
                </a>
              </Link>
            </li>
            <li>
              <Link to={ACCOUNTS}>
                <a
                  href='/any'
                  className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:${
                    pathname === ACCOUNTS ? 'dark' : 'hover'
                  }:text-blue-700 md:p-0  md:dark:${
                    pathname === ACCOUNTS ? '' : 'hover:'
                  }text-blue-500 dark:hover:bg-gray-700  dark:hover:text-secondary  md:dark:hover:bg-transparent`}
                >
                  Account
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
