import React from 'react';
import { NavLink } from 'react-router';

const MyNavlink = ({to,children}) => {
    return (
        <NavLink
        to={to} className={({isActive}) =>
        `font-semibold ${isActive ? 'btn items-center bg-green-900 text-white':'text-gray-500 flex items-center gap-1'}`}>
            {children}
        </NavLink>
    );
};

export default MyNavlink;