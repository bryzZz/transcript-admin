import React from "react";

interface DisplayTrackProps {
  src: string;
  audioRef: React.RefObject<HTMLAudioElement>;
  setDuration: React.Dispatch<React.SetStateAction<number>>;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  setTimeProgress: React.Dispatch<React.SetStateAction<number>>;
}

export const DisplayTrack: React.FC<DisplayTrackProps> = ({
  src,
  audioRef,
  setDuration,
  setIsPlaying,
  setTimeProgress,
}) => {
  const onLoadedMetadata = () => {
    if (!audioRef.current) return;

    const seconds = audioRef.current.duration;

    setDuration(seconds);
  };

  return (
    <audio
      src={src}
      ref={audioRef}
      onLoadedMetadata={onLoadedMetadata}
      onPlaying={() => setIsPlaying(true)}
      onPause={() => setIsPlaying(false)}
      onTimeUpdate={(e) => {
        setTimeProgress(e.currentTarget.currentTime);
      }}
    />
  );
};
