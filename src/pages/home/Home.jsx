import React from "react";
import HomePage from "../../components/Home/Banner";
import Card from "../../components/Home/Card";
import useFriends from "../../custom/useFriends";
import DisplayFriends from "../../components/Home/DisplayFriends";
import { PuffLoader } from "react-spinners";


const Home = () => {
  const {friends,loading} = useFriends();
  // const friendsData = friends;
  return (
    <div className="container mx-auto ">
      <HomePage />
      <Card />
       <div className="border-b border-gray-200 my-10"></div>
       <h3 className="text-2xl font-bold text-green-950 mb-4 text-center md:text-left">Your Friends</h3>
       {loading && <div className="flex justify-center min-h-[50vh] items-center"><PuffLoader color="#2D8C41"/></div>}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20 px-8 md:px-2 lg:px-1">
        {
          friends.map( friend => <DisplayFriends friend={friend} key={friend.id}/>)
        }
       </div>
    </div>
  );
};

export default Home;
