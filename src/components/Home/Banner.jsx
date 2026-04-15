import React from 'react';
import { BsPlusLg } from 'react-icons/bs';

const HomePage = () => {
    return (
       <div className='text-center pt-20 space-y-4 px-8 md:px-1'>
        <h1 className='text-5xl text-green-950 font-bold'>Friends to keep close in your life</h1>
        <p className='text-gray-500'>
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.{" "}
        </p>
        <button className='btn bg-green-900 text-white mt-4 font-semibold'><BsPlusLg className='text-lg'/> Add a Friend</button>       
      </div>
    );
};

export default HomePage;