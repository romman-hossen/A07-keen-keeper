import React, { useState } from 'react';
import { FriendContext } from './FriendContext';


const FriendContextData = ({children}) => {


    const [allData,setAllData] = useState([]);

    const data ={
     allData,
     setAllData
    }
    return (
       <FriendContext.Provider value={data}>
        {children}
       </FriendContext.Provider>
    );
};

export default FriendContextData;