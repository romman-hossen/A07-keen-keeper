import React from 'react';

const DetailsRight = ({findData}) => {
    const { days_since_contact:days,next_due_date: nextDue, goal,} = findData;
    return (
       <>
       <div className=''>
        <div className='flex gap-6'>
            <div className='py-8 px-4 text-center bg-white shadow'>
                <h3 className='text-3xl font-semibold text-green-950 mb-2'>{days}</h3>
                <span className='text-lg text-gray-500'>Days Since Contact</span>
            </div>
            <div className='py-8 px-4 text-center bg-white shadow'>
                <h3 className='text-3xl font-semibold text-green-950 mb-2'>{days}</h3>
                <span className='text-lg text-gray-500'>Days Since Contact</span>
            </div>
            <div className='py-8 px-4 text-center bg-white shadow'>
                <h3 className='text-3xl font-semibold text-green-950 mb-2'>{days}</h3>
                <span className='text-lg text-gray-500'>Days Since Contact</span>
            </div> 
        </div>
        <h3></h3>
       </div>
       </>
    );
};

export default DetailsRight;