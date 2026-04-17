import React from 'react';
import { Link } from 'react-router';

const NoItem = () => {
    return (
     <div className="min-h-[50vh] bg-white rounded-xl shadow-sm border border-gray-100 text-center flex flex-col justify-center items-center px-3 mx-5 md:mx-0.5">
      <div className="space-y-2">  
        <p className="text-2xl sm:text-4xl text-gray-600 font-bold">Nothing here yet</p>
        <p className="text-lg sm:text-xl text-gray-500">
          Start by adding a call, text, or video interaction.
        </p>
        <Link to={'/'} className="btn bg-[#244D3F] text-white">
          Go Home
        </Link>
      </div>
    </div>
    );
};

export default NoItem;