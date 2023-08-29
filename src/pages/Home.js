import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchUserById,
  getPostsStatus,
} from '../features/sampleSlices/UserSlice';

const Home = () => {
  const status = useSelector(getPostsStatus);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (status === 'idle') {
      console.log('here ');
      dispatch(fetchUserById());
    }
    console.log(status);
  }, [status ?? '']);

  return (
    <>
      <section className='bg-gray-50 dark:bg-primary'>
        <div className='flex justify-center  px-6 py-8 mx-auto  lg:py-0'>
          <section className='bg-white dark:bg-primary'>
            <div className='gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6'>
              <div className='font-light text-gray-500 sm:text-lg dark:text-gray-800'>
                <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 '>
                  We didn't reinvent the wheel
                </h2>
                <p className='mb-4'>
                  We are strategists, designers and developers. Innovators and
                  problem solvers. Small enough to be simple and quick, but big
                  enough to deliver the scope you want at the pace you need.
                  Small enough to be simple and quick, but big enough to deliver
                  the scope you want at the pace you need.
                </p>
                <p>
                  We are strategists, designers and developers. Innovators and
                  problem solvers. Small enough to be simple and quick.
                </p>
              </div>
              <div className='grid grid-cols-2 gap-4 mt-8'>
                <img
                  className='w-full h-5/6 rounded-lg'
                  src={'/files_image.jpg'}
                  alt='office content 1'
                ></img>
                <img
                  className='mt-4 w-full lg:mt-10 rounded-lg'
                  src='/calculator_image.jpg'
                  alt='office content 2'
                />
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Home;
