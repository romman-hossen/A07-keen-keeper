import React from 'react';
import { Link } from 'react-router';

const DisplayFriends = ({friend}) => {
    // console.log(friend)

const {id,picture,name,days_since_contact:days,tags,status} = friend;
// console.log(name,days,tags)
    return (
        <Link to={`/friendDetails/${id}`} className='p-6 flex flex-col items-center bg-white space-y-2 rounded-lg shadow '>
            <div>
                <img className='rounded-full h-20 w-20' src={picture} alt={name} />
            </div>
            <h3 className='text-xl font-semibold mt-1'>{name}</h3>
            <p className='text-gray-500 text-sm'>{days}d ago</p>
            <div className='flex gap-1'>
               {tags.map((tag,ind) => <div className='flex badge bg-green-200 text-green-950 p-3 rounded-full' key={ind} tag={tag}>
                <span>{tag}</span>
               </div>)}
            </div>
            <button className={`badge rounded-full p-3 text-white ${status == "on-track" ? "bg-green-900": status == "overdue" ? "bg-orange-600":"bg-yellow-500"}`}>{status}</button>      
        </Link>
    );
};

export default DisplayFriends;
//     {
//     "id": 6,
//     "name": "Mehzabin Chowdhury",
//     "picture": "https://randomuser.me/api/portraits/women/12.jpg",
//     "email": "mehzabin.c@gmail.com",
//     "days_since_contact": 3,
//     "status": "on-track",
//     "tags": ["close friend", "neighbourhood"],
//     "bio": "Grew up on the same street. We have coffee together every other week. She's the person I call when I need honest advice.",
//     "goal": 7,
//     "next_due_date": "2025-07-08"
//   },