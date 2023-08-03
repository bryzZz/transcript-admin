import React from "react";

import Avatar from "assets/avatar.png";
import { ReactComponent as Login } from "assets/login.svg";

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between mb-[71px]">
      <div className="flex items-center gap-4">
        <img
          className="w-14 h-14 rounded-[10px] backdrop-blur-xl"
          src={Avatar}
        />
        <div>
          <h4 className="text-white text-2xl font-medium">Evgeny Lapin</h4>
          <p className="text-white text-base font-medium opacity-50">
            Support lead
          </p>
        </div>
      </div>

      <button className="p-2 bg-[#EEBBC2] backdrop-blur-md rounded-lg">
        <Login />
      </button>
    </header>
  );
};
