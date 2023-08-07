import React from "react";

import { ReactComponent as Play } from "assets/play.svg";
import { ReactComponent as Pause } from "assets/pause.svg";
import { twMerge } from "tailwind-merge";

interface ControlsProps {
  audioRef: React.RefObject<HTMLAudioElement>;
  isPlaying: boolean;
}

export const Controls: React.FC<ControlsProps> = ({ audioRef, isPlaying }) => {
  const handleClick = () => {
    if (!audioRef.current) return;

    if (!isPlaying) {
      audioRef.current.play();

      document.body.querySelectorAll("audio").forEach((audio) => {
        if (audio !== audioRef.current) {
          audio.pause();
        }
      });
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <button
      className={twMerge(
        "mr-[15px] h-[45px] w-[45px] -translate-x-[1px] rounded-[45px] bg-[#FFFFFF] text-[#464646]",
        isPlaying ? "p-3" : "py-[13px] pl-[17px] pr-[11.5px]",
      )}
      onClick={handleClick}
    >
      {isPlaying ? <Pause width="100%" height="100%" /> : <Play />}
    </button>
  );
};
