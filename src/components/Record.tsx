import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as DirectInbox } from "assets/direct-inbox.svg";
import Avatar2 from "assets/unsplash_pAtA8xe_iVM.png";
import { AudioPlayer } from "./AudioPlayer";

// import audioSrc from "data/X2Download.app - Антон Чехов Человек в Футляре Аудиокнига Русская литература (книга чтение, школьная программа) (128 kbps).mp3";
import { Call } from "types";
import { BASE_URL } from "constants/index";
import { exportToSpreadsheet } from "utils";

interface RecordProps {
  data: Call;
  className?: string;
}

export const Record: React.FC<RecordProps> = ({ data, className }) => {
  const handleExportClick = () => {
    exportToSpreadsheet(
      [
        ["Краткая сводка", "Полная транскрибация"],
        [data.summary, data.transcription],
      ],
      data.id.toString(),
    );
  };

  return (
    <div
      className={`rounded-[20px] bg-[#F3F6FE] pb-4 pl-[13px] pr-[14px] pt-[15px] ${className}`}
    >
      <div className="mb-9 flex items-center justify-between">
        <div className="flex items-center gap-[14px]">
          <img
            className="h-[46px] w-[46px] rounded-full object-cover object-top"
            src={Avatar2}
          />
          <div>
            <Link
              to={`${BASE_URL}records/${data.id}`}
              className="mb-1 text-[17px] font-medium leading-5 text-black hover:text-cyan-700"
            >
              Никита Лепезин
            </Link>
            <p className="text-[10px] font-medium text-black opacity-50">
              Поддержка
            </p>
          </div>
        </div>

        <button onClick={handleExportClick}>
          <DirectInbox />
        </button>
      </div>

      <AudioPlayer src={`${import.meta.env.VITE_API_URL}/file/` + data.file} />
    </div>
  );
};
