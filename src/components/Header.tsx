import React from "react";

import Avatar from "assets/unsplash_pAtA8xe_iVM-min.png";
import { ReactComponent as Login } from "assets/login.svg";

export const Header: React.FC = () => {
  return (
    <header className="mb-[71px] flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img
          className="h-14 w-14 rounded-[10px] object-cover object-top backdrop-blur-xl"
          src={Avatar}
        />
        <div>
          <h4 className="text-2xl font-medium text-white">Евгений Лапин</h4>
          <p className="text-base font-medium text-white opacity-50">
            Поддержка
          </p>
        </div>
      </div>

      <button className="rounded-lg bg-[#EEBBC2] p-2 backdrop-blur-md">
        <Login />
      </button>
    </header>
  );
};
