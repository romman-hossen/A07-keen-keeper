import React from 'react';

const Card = () => {
    // const data =[
    //     {
    //      map kora jai repete na kore 
    //     }
    // ]
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 p-8 md:p-2 lg:p-1'>
            <div className='px-8 py-12 bg-white text-center space-y-2.5 shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] rounded-lg '>
                <h3 className='text-4xl font-bold text-green-950'>10</h3>
                <p className='text-gray-500 text-lg'>Total Friends</p>
            </div>
            <div className='px-8 py-12 bg-white text-center space-y-2.5 shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] rounded-lg'>
                <h3 className='text-4xl font-bold text-green-950'>3</h3>
                <p className='text-gray-500 text-lg'>On Track</p>
            </div>
            <div className='px-8 py-12 bg-white text-center space-y-2.5 shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] rounded-lg'>
                <h3 className='text-4xl font-bold text-green-950'>6</h3>
                <p className='text-gray-500 text-lg'>Need Attention</p>
            </div>
            <div className='px-8 py-12 bg-white text-center space-y-2.5 shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] rounded-lg'>
                <h3 className='text-4xl font-bold text-green-950'>12</h3>
                <p className='text-gray-500 text-lg'>Interactions This Month</p>
            </div>
        </div>
    );
};

export default Card;