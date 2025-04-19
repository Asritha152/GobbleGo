import React from 'react';
import { WifiOff } from 'lucide-react';

function Offlinepage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-100 to-gray-300 text-center px-4">
      <WifiOff size={60} className="text-red-500 mb-4 animate-bounce" />
      <h1 className="text-3xl font-bold text-gray-700 mb-2">You're Offline</h1>
      <p className="text-gray-600 mb-4">Looks like you're not connected to the internet.</p>
      <p className="text-sm text-gray-500">Please check your connection and try again.</p>
    </div>
  );
}

export default Offlinepage;
