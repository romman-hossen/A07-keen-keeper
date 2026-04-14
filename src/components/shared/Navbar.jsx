import React from 'react';
import logo from '../../assets/images/logo.png';
import MyNavlink from './MyNavlink';
import { RiHome2Line } from 'react-icons/ri';
import { IoTimeOutline } from 'react-icons/io5';
import { ImStatsDots } from 'react-icons/im';

const Navbar = () => {
    // const data =[
    //     {path:'/',
    //         map koreo kora jabe 
    //     }
    // ]
    return (
        <div className='shadow py-5'>
        <div className='flex flex-col items-center gap-6 md:flex-row justify-between max-w-[95%] mx-auto '>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='flex gap-8 items-center'>
                <MyNavlink to={'/'} className="flex">           
                  <RiHome2Line className='text-xl ' /> 
                  Home
                </MyNavlink>
                <MyNavlink to={'/timeline'}>
                   <IoTimeOutline className='text-xl'/>
                  Timeline
                </MyNavlink>
                <MyNavlink to={'/stats'}>
                <ImStatsDots />
                   Stats
                </MyNavlink>
                
            </div>
            
        </div>
        </div>
    );
};

export default Navbar;