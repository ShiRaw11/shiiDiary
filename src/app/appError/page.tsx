
import React from 'react';


const NoApp = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-teal">
      <div className="text-center">
        <div className="text-9xl mb-4">😔</div>
        
        <h1 className="text-2xl font-bold text-popover mb-2">Oops!</h1>
        <p className="text-lg text-gray-600">Unfortunately, the app is still under development!</p>
        <p className="text-md text-black mt-2"> Please check back soon!</p>
      </div>
    </div>
  );
};

export default NoApp;
