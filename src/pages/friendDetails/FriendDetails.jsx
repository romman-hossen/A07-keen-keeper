import React from "react";
import { useParams } from "react-router";
import useFriends from "../../custom/useFriends";
import { PuffLoader } from "react-spinners";
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from "react-icons/ri";
import { PiArchiveBold } from "react-icons/pi";
import DetailsRight from "./DetailsRight";

const FriendDetails = () => {
  const { id } = useParams();
  console.log(id);

  const { friends, loading } = useFriends();

  console.log(friends);
  const findData = friends.find((friend) => friend.id == id);

  if (loading) {
    return (
      <div className="flex justify-center min-h-[50vh] items-center">
        <PuffLoader color="#2D8C41" />
        Looooding
      </div>
    );
  }

  //       {
  //     "id": 1,
  //     "name": "Rafiul Hasan",
  //     "picture": "https://randomuser.me/api/portraits/men/32.jpg",
  //     "email": "rafiul@gmail.com",
  //     "days_since_contact": 18,
  //     "status": "overdue",
  //     "tags": ["close friend"],
  //     "bio": "Old BUET buddy, go-to guy.",
  //     "goal": 14,
  //     "next_due_date": "2025-07-10"
  //   },

  const {
    name,
    picture,
    email, 
    tags,
    status,
    bio,
  } = findData;
  //   console.log(status);

  return (
    <div className="container mx-auto my-20">
      <div className="flex gap-6">
        <div className="">
          <div className="bg-white flex flex-col justify-center items-center space-y-3 p-8 shadow rounded-lg">
            <div>
              <img
                className="rounded-full h-20 w-20"
                src={picture}
                alt={name}
              />
            </div>
            <h3 className="text-xl font-semibold mt-1">{name}</h3>
            <div className="space-y-2">
            <div className="text-center">
            <button
              className={`badge rounded-full p-3 text-white ${status == "on-track" ? "bg-green-900" : status == "overdue" ? "bg-orange-600" : "bg-yellow-500"}`}
            >
              {status}
            </button>
            </div>
            <div className="flex gap-1">
              {tags.map((tag, ind) => (
                <div
                  className="flex badge bg-green-200 text-green-950 p-3 rounded-full"
                  key={ind}
                  tag={tag}
                >
                  <span>{tag}</span>
                </div>
              ))}
            </div>
            </div>
            <h3 className="font-medium text-gray-500">{`" ${bio}"`}</h3>
            <h4 className="text-gray-400">Preferred: {email}</h4>
          </div>
          <div className="pt-4 space-y-2 ">
            <span className="flex items-center justify-center gap-1 px-25 py-4 bg-white shadow rounded-sm font-medium text-blue-950">
                <RiNotificationSnoozeLine className="text-xl"/>
                Snooze 2 weeks
            </span>
            <span className="flex  items-center justify-center gap-1 px-25 py-4 bg-white shadow rounded-sm font-medium text-blue-950">
                <PiArchiveBold className="text-xl"/>
                Archive
            </span>
            <span className="flex items-center justify-center gap-1 px-25 py-4 bg-white shadow rounded-sm font-medium text-error">
                <RiDeleteBin6Line className="text-xl"/>
                Delete
            </span>
          </div>
        </div>
        <div className=""                                         >
            <DetailsRight findData={findData}/>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
