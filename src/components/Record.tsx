import React from "react";

import { ReactComponent as DirectInbox } from "assets/direct-inbox.svg";
import Avatar2 from "assets/avatar-2.png";
import { AudioPlayer } from "./AudioPlayer";

import audioSrc from "data/X2Download.app - Антон Чехов Человек в Футляре Аудиокнига Русская литература (книга чтение, школьная программа) (128 kbps).mp3";

export const Record: React.FC = () => {
  return (
    <div className="rounded-[20px] pt-[15px] pb-4 pr-[14px] pl-[13px] bg-[#F3F6FE]">
      <div className="flex items-center justify-between mb-9">
        <div className="flex items-center gap-[14px]">
          <img className="rounded-full w-[46px] h-[46px]" src={Avatar2} />
          <div>
            <h5 className="text-[17px] leading-5 font-medium text-black mb-1">
              Александр Морозов
            </h5>
            <p className="text-black font-medium text-[10px] opacity-50">
              Менеджер
            </p>
          </div>
        </div>

        <button>
          <DirectInbox />
        </button>
      </div>

      <AudioPlayer src={audioSrc} />
    </div>
  );
};
