import React from 'react';
import text from '../../assets/images/text.png'
import call from '../../assets/images/call.png'
import video from '../../assets/images/video.png'

const TimelineData = ({data}) => {
   
     const date = new Date().toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
    console.log(date)
    console.log(data.type)
    return (
        <div className='bg-white p-4 rounded-lg border border-gray-200'>
        <div className='flex gap-4 '>
            {data.type === "text" ? <img src={text} alt={text} /> 
             : data.type === "call" ? <img src={call} alt={call} /> 
              :<img src={video} alt={video} />}
            <div>

            <p className='text-gray-400 text-lg'>{data.type === "text" ? <span className='text-xl text-green-950 font-medium pr-1.5'>Text</span> 
              : data.type === "call" ? <span className='text-xl text-green-950 font-medium pr-1.5'>Call</span>
               :<span className='text-xl text-green-950 font-medium pr-1.5'>Video</span>} with {data.name}</p>
               <span className='text-gray-500 mt-10'>{date}</span>
            </div> 
            </div>         
        </div>
    );
};

export default TimelineData;