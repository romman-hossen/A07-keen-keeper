import React, { useContext, useState } from "react";
import { FriendContext } from "../../components/context/FriendContext";
import NoItem from "../../components/Timeline/NoItem";
import TimelineData from "../../components/Timeline/TimelineData";

const Timeline = () => {
  const { allData } = useContext(FriendContext);
  console.log(allData)
  const [filter,setFilter] = useState("All");

  const filteredData = filter === "All" ? allData :
   allData.filter((data) => data.type.toLowerCase() === filter.toLowerCase()) 

  return (
    <div className="container mx-auto my-20 ">
        <div className="mx-5 space-y-6">
      <h1 className="text-3xl md:text-5xl font-bold">Timeline </h1>
      <div>
        <fieldset className="fieldset">
          <select onChange={(e) => setFilter(e.target.value)} defaultValue="Filter timeline" className="select text-gray-500  md:text-lg">
            <option disabled={true} className="text-gray-500">Filter timeline</option>
             <option value="All">All</option>
            <option value="text">Text</option>
            <option value="call">Call</option>
            <option value="video">Video</option>
          </select>
        </fieldset>
      </div>
      {filteredData.length === 0 ?
       <NoItem /> : 
        (filteredData.map((data,ind) => <TimelineData key={ind} data={data}/>))
      }   
    </div>
    </div>
  );
};

export default Timeline;
