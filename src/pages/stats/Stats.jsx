import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { FriendContext } from '../../components/context/FriendContext';
import NoItem from '../../components/Timeline/NoItem';

const Stats = () => {
    const {allData} = useContext(FriendContext);
    const textLen = allData.filter(data => data.type === 'text').length;
    const callLen = allData.filter(data => data.type === 'call').length;
    const videoLen = allData.filter(data => data.type === 'video').length;
console.log(textLen)
     const data = [
    { name: 'Text', value:textLen, fill: '#22c55e' },
    { name: 'Call', value:callLen, fill: '#3b82f6' },
    { name: 'Video', value:videoLen, fill: '#ef4444' },
  ];
     return (
    <div className=" container mx-auto pt-20 sm:pt-25">
      <div className="px-4 sm:px-8 pb-8">
        <div className="container mx-auto">
          <p className="text-3xl md:text-5xl text-gray-800 font-bold mb-5">
            Friendship Analytics
          </p>
          {allData.length === 0 ? (
            <NoItem />
          ) : (
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mt-8">
              <p className="text-lg sm:text-xl text-green-900 font-semibold mb-4">
                By Interaction Type
              </p>
              <PieChart
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  maxHeight: '60vh',
                  aspectRatio: 1,
                  margin: 'auto',
                }}
                responsive
              >
                <Pie
                  data={data}
                  innerRadius="80%"
                  outerRadius="100%"
                  // Corner radius is the rounded edge of each pie slice
                  cornerRadius="50%"
                  fill="#8884d8"
                  // padding angle is the gap between each pie slice
                  paddingAngle={5}
                  dataKey="value"
                  isAnimationActive={true}
                />
        
                <Legend className='pt-5' iconType="circle"
                 wrapperStyle={{ marginTop: '20px' }}/>
                
                <Tooltip />
              </PieChart>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stats;