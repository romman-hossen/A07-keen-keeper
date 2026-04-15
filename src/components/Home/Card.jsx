import React from 'react';

const Card = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 p-8 md:p-2 lg:p-1'>
            <div className='px-8 py-12 bg-white text-center space-y-2.5 shadow-[0_1px_6px_0_rgba(0,0,0,0.08)]'>
                <h3 className='text-3xl font-bold text-green-950'>10</h3>
                <p className='text-gray-500'>Total Friends</p>
            </div>
            <div className='px-8 py-12 bg-white text-center space-y-2.5 shadow-[0_1px_6px_0_rgba(0,0,0,0.08)]'>
                <h3 className='text-3xl font-bold text-green-950'>10</h3>
                <p className='text-gray-500'>Total Friends</p>
            </div>
            <div className='px-8 py-12 bg-white text-center space-y-2.5 shadow-[0_1px_6px_0_rgba(0,0,0,0.08)]'>
                <h3 className='text-3xl font-bold text-green-950'>10</h3>
                <p className='text-gray-500'>Total Friends</p>
            </div>
            <div className='px-8 py-12 bg-white text-center space-y-2.5 shadow-[0_1px_6px_0_rgba(0,0,0,0.08)]'>
                <h3 className='text-3xl font-bold text-green-950'>10</h3>
                <p className='text-gray-500'>Total Friends</p>
            </div>
            
        </div>
    );
};

export default Card;