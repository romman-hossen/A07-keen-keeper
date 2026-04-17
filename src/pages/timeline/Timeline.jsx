import React, { useContext } from 'react';
import { FriendContext } from '../../components/context/FriendContext';

const Timeline = () => {
    const {allData,setAllData} = useContext(FriendContext);
    console.log(allData.type)
    return (
        <div>
             {allData.map(item => <div item={item}>
                <h1>{item.type}</h1>
             </div>)}
            {/* {allData.type ==} */}
            <h3>I am comig</h3>

        </div>
    );
};

export default Timeline;