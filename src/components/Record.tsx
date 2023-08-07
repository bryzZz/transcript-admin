import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as DirectInbox } from "assets/direct-inbox.svg";
import Avatar2 from "assets/avatar-2.png";
import { AudioPlayer } from "./AudioPlayer";

// import audioSrc from "data/X2Download.app - Антон Чехов Человек в Футляре Аудиокнига Русская литература (книга чтение, школьная программа) (128 kbps).mp3";
import { Call } from "types";

interface RecordProps {
  data: Call;
  className?: string;
}

export const Record: React.FC<RecordProps> = ({ data, className }) => {
  return (
    <div
      className={`rounded-[20px] bg-[#F3F6FE] pb-4 pl-[13px] pr-[14px] pt-[15px] ${className}`}
    >
      <div className="mb-9 flex items-center justify-between">
        <div className="flex items-center gap-[14px]">
          <img className="h-[46px] w-[46px] rounded-full" src={Avatar2} />
          <div>
            <Link
              to={`/transcript-admin/records/${data.id}`}
              className="mb-1 text-[17px] font-medium leading-5 text-black hover:text-cyan-700"
            >
              Александр Морозов
            </Link>
            <p className="text-[10px] font-medium text-black opacity-50">
              Менеджер
            </p>
          </div>
        </div>

        <button>
          <DirectInbox />
        </button>
      </div>

      <AudioPlayer src={`${import.meta.env.VITE_API_URL}/file/` + data.file} />
    </div>
  );
};
