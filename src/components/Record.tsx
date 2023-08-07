import React, { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as DirectInbox } from "assets/direct-inbox.svg";
import { ReactComponent as Chart } from "assets/mini-chart.svg";
import Avatar2 from "assets/unsplash_pAtA8xe_iVM-min.png";
import { AudioPlayer } from "./AudioPlayer";

// import audioSrc from "data/X2Download.app - Антон Чехов Человек в Футляре Аудиокнига Русская литература (книга чтение, школьная программа) (128 kbps).mp3";
import { Call } from "types";
import { BASE_URL } from "constants/index";
import { exportToSpreadsheet } from "utils";

interface RecordProps {
  data: Call;
  canDownload?: boolean;
  className?: string;
}

export const Record: React.FC<RecordProps> = ({
  data,
  canDownload = false,
  className,
}) => {
  const navigate = useNavigate();

  const handleExportClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (!canDownload) return;

    e.stopPropagation();

    exportToSpreadsheet(
      [
        ["Краткая сводка", "Полная транскрибация"],
        [data.summary, data.transcription],
      ],
      data.id.toString(),
    );
  };

  const handleClick = () => {
    navigate(`${BASE_URL}records/${data.id}`);
  };

  return (
    <div
      className={`cursor-pointer rounded-[20px] bg-[#F3F6FE] pb-4 pl-[13px] pr-[14px] pt-[15px] ${className}`}
      onClick={() => handleClick()}
    >
      <div className="mb-9 flex items-center justify-between">
        <div className="flex items-center gap-[14px]">
          <img
            className="h-[46px] w-[46px] rounded-full object-cover object-top"
            src={Avatar2}
          />
          <div>
            <h3 className="mb-1 text-[17px] font-medium leading-5 text-black">
              Евгений Лапин
            </h3>
            <p className="text-[10px] font-medium text-black opacity-50">
              Поддержка
            </p>
          </div>
        </div>

        <button onClick={handleExportClick}>
          {canDownload ? <DirectInbox /> : <Chart />}
        </button>
      </div>

      <AudioPlayer src={`${import.meta.env.VITE_API_URL}/file/` + data.file} />
    </div>
  );
};
