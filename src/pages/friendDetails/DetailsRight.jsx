import React, { useContext } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineTextsms } from 'react-icons/md';
import { PiVideoCameraBold } from 'react-icons/pi';
import { FriendContext } from '../../components/context/FriendContext';
import { toast } from 'react-toastify';

const DetailsRight = ({findData,loading}) => {
    const {allData,
     setAllData} = useContext(FriendContext)
    

    const {name, days_since_contact:days,next_due_date: nextDue, goal} = findData;
    // console.log(findData)

//      if (loading) {
//     return (
//       <div className="flex justify-center min-h-[50vh] items-center">
//         <PuffLoader color="#2D8C41" />
//       </div>
//     );
//   }

    const handleCallData = (data)=>{
        const type = data;
        setAllData([...allData,{...findData,type}]) 
        toast.success(`Call with ${name}`,{
        position: "top-center",
        });    
    }
    const handleTextData = (data)=>{
        const type = data;
        setAllData([...allData,{...findData,type}]) 
        toast.success(`Text with ${name}`,{
        position: "top-center",
        });    
    }
    const handleVideoData = (data)=>{
        const type = data;
        setAllData([...allData,{...findData,type}]) 
        toast.success(`Video Call with ${name}`,{
        position: "top-center",
        });    
    }

    return (
       <>
       <div className='space-y-6'>
        <div className='grid mt-8 sm:grid-cols-2 md:mt-0 md:grid-cols-3 gap-6'>
            <div className='py-8 px-4 text-center bg-white shadow'>
                <h3 className='text-3xl font-semibold text-green-950 mb-2'>{days}</h3>
                <span className='text-lg text-gray-500'>Days Since Contact</span>
            </div>
            <div className='py-8 px-4 text-center bg-white shadow'>
                <h3 className='text-3xl font-semibold text-green-950 mb-2'>{goal}</h3>
                <span className='text-lg text-gray-500'>Goal (Days)</span>
            </div>
            <div className='py-8 px-4 text-center bg-white shadow'>
                <h3 className='text-3xl font-semibold text-green-950 mb-2'>{nextDue}</h3>
                <span className='text-lg text-gray-500'>Next Due</span>
            </div> 
        </div>
        <div className='p-6 bg-white rounded-lg shadow'>
            <div className='flex justify-between '>
                <h3 className='text-xl font-bold text-green-950'>Relationship Goal</h3>
                <button className='btn'>Edit</button>
            </div>
            <p className='text-lg text-gray-500'>Connect every <span className='text-blue-950 font-bold'>30 days</span></p>  
        </div>
          <div className='bg-white p-6 rounded-lg shadow'>
                <h3 className='text-xl font-bold text-green-950 mb-4'>Quick Check-In</h3>
             <div className='grid grid-cols-3 gap-6'>
                   <div onClick={() => handleCallData('call')} className='p-5 border border-gray-300 rounded-lg bg-gray-100 flex flex-col justify-center items-center '>
                    <FiPhoneCall className='text-3xl text-blue-950'/>
                    <p className='text-lg font-medium pt-2'>Call</p>
                </div>
                   <div onClick={() => handleTextData('text') } className='p-5 border border-gray-300 rounded-lg bg-gray-100 flex flex-col justify-center items-center '>
                    <MdOutlineTextsms  className='text-3xl text-blue-950'/>
                    <p className='text-lg font-medium pt-2'>Text</p>
                </div>
                   <div onClick={() => handleVideoData('video')} className='p-5 border border-gray-300 rounded-lg bg-gray-100 flex flex-col justify-center items-center '>
                    <PiVideoCameraBold className='text-3xl text-blue-950'/>
                    <p className='text-lg font-medium pt-2'>Video</p>
                </div>
             </div>
            </div>
       </div>
       </>
    );
};

export default DetailsRight;