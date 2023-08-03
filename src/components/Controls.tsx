import React from "react";

import { ReactComponent as Play } from "assets/play.svg";

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
      className="bg-[#FFFFFF] w-[45px] h-[45px] flex items-center justify-center rounded-[45px] mr-[15px] -translate-x-[1px]"
      onClick={handleClick}
    >
      {isPlaying ? <Play /> : <Play />}
    </button>
  );
};
