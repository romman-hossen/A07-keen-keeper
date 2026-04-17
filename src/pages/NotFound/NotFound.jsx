import React from 'react';
import { useNavigate } from 'react-router';

const NotFound = () => {
   const navigate = useNavigate();
 

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800">
      <p className="text-6xl text-gray-400 mb-2 font-mono">404</p>
      <h1 className="text-5xl font-semibold mb-3">Page not found</h1>
      <p className="text-gray-500 mb-1">
        No route matches 
      </p>
      <p className="text-gray-400 text-sm mb-8">
        The page may have been moved, deleted, or never existed.
      </p>

      <div className="flex gap-3">
        <button
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-green-900 text-white text-sm rounded hover:bg-gray-700 transition-colors"
        >
          Go home
        </button>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 border border-gray-300 text-sm rounded hover:bg-gray-100 transition-colors"
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default NotFound;