import React from "react";
import { ChevronUp, VideoOff, MicOff, PhoneOff, User } from "lucide-react";

const Participant: React.FC = () => {
  return (
    <div className="w-full bg-blue-950">
      <div className="h-screen flex mx-auto max-w-7xl">
        <div className="w-1/6  p-2 space-y-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="relative bg-zinc-800 p-2 aspect-square flex flex-col items-center"
            >
              <User className="text-gray-500 mx-auto" size={178} />
              <div className="bg-[linear-gradient(to_bottom,_transparent,_black)] h-28 absolute bottom-0 w-full" />
              <span className="absolute bottom-2 left-2 bg-gray-200 rounded-full px-2 py-1 text-sm text-gray-700">
                Participant{index + 1}
              </span>
              <ChevronUp
                className="absolute top-2 left-2 text-gray-300"
                size={24}
              />
            </div>
          ))}
        </div>
        <div className="flex-1 bg-zinc-800 relative">
          <User
            className="text-gray-500 mx-auto my-auto absolute inset-0"
            size={1024}
          />
          <div className="bg-[linear-gradient(to_bottom,_transparent,_black)] h-64 absolute bottom-0 w-full" />
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-4">
            <VideoOff className="text-gray-500" size={32} />
            <MicOff className="text-gray-500" size={32} />
            <PhoneOff className="text-gray-500" size={32} />
          </div>
          <div className="absolute bottom-4 right-4 border-2 border-gray-400/30">
            <User className="text-gray-500" size={64} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Participant;
