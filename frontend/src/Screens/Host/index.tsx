import React from "react";
import { VideoOff, MicOff, Settings, PhoneOff, User } from "lucide-react";

const Host: React.FC = () => {
  return (
    <div className="w-full bg-gray-800">
      <div className="h-screen grid grid-rows-2 grid-cols-2 gap-2 p-4 max-w-7xl mx-auto">
        <div className="relative bg-zinc-800 grid place-items-center">
          <User className="text-gray-500 mx-auto my-auto" size={256} />
          <span className="absolute top-2 left-2 bg-gray-200 rounded-full px-2 py-1 text-sm text-gray-700">
            Participant3
          </span>
        </div>
        <div className="relative bg-zinc-800 grid place-items-center">
          <User className="text-gray-500 mx-auto my-auto" size={256} />
          <span className="absolute top-2 left-2 bg-gray-200 rounded-full px-2 py-1 text-sm text-gray-700">
            Participant2
          </span>
        </div>
        <div className="relative bg-zinc-800 grid place-items-center">
          <User className="text-gray-500 mx-auto my-auto" size={256} />
          <span className="absolute top-2 left-2 bg-gray-200 rounded-full px-2 py-1 text-sm text-gray-700">
            Participant1
          </span>
          <div className="absolute left-2 bottom-2 flex space-x-4">
            <VideoOff className="text-gray-500" size={32} />
            <MicOff className="text-gray-500" size={32} />
            <Settings className="text-gray-500" size={32} />
            <PhoneOff className="text-gray-500" size={32} />
          </div>
        </div>
        <div className="relative bg-zinc-800 grid place-items-center">
          <User className="text-gray-500 mx-auto my-auto" size={256} />
          <span className="absolute top-2 left-2 bg-gray-200 rounded-full px-2 py-1 text-sm text-gray-700">
            Participant4
          </span>
          <div className="absolute left-2 bottom-2 flex space-x-2">
            <button className="w-10 h-10 bg-gray-500 rounded-full text-white">
              15 s
            </button>
            <button className="w-10 h-10 bg-gray-500 rounded-full text-white">
              30 s
            </button>
            <button className="w-10 h-10 bg-gray-500 rounded-full text-white">
              45 s
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Host;
