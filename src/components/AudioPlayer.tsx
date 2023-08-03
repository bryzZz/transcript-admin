import React, { useRef, useState } from "react";
import { DisplayTrack } from "./DisplayTrack";

import { Controls } from "./Controls";
import { ProgressBar } from "./ProgressBar";

interface AudioPlayerProps {
  src: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <div className="bg-[#202542] flex items-center rounded-[35px] w-full">
      <DisplayTrack
        src={src}
        audioRef={audioRef}
        setDuration={setDuration}
        setIsPlaying={setIsPlaying}
        setTimeProgress={setTimeProgress}
      />

      <Controls audioRef={audioRef} isPlaying={isPlaying} />

      <ProgressBar
        audioRef={audioRef}
        timeProgress={timeProgress}
        duration={duration}
        setTimeProgress={setTimeProgress}
      />
    </div>
  );
};
