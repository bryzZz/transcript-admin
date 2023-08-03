import React from "react";
import { Range, getTrackBackground } from "react-range";

interface ProgressBarProps {
  audioRef: React.RefObject<HTMLAudioElement>;
  timeProgress: number;
  duration: number;
  setTimeProgress: React.Dispatch<React.SetStateAction<number>>;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  audioRef,
  timeProgress,
  duration,
  setTimeProgress,
}) => {
  const handleProgressChange = (value: number) => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = Number(value);

    setTimeProgress(value);
  };

  const formatTime = (time: number) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

  return (
    <div className="flex-1 flex items-center pr-[15px]">
      <Range
        step={1}
        min={0}
        max={duration === 0 ? 1 : duration}
        values={[timeProgress]}
        onChange={(values) => handleProgressChange(values[0])}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              flex: "1",
              marginRight: "10px",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "3px",
                background: getTrackBackground({
                  values: [timeProgress],
                  colors: ["red", "#ffffff"],
                  min: 0,
                  max: duration === 0 ? 1 : duration,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "0px",
              width: "0px",
            }}
          />
        )}
      />

      <span className="text-[#FFFFFF] text-sm w-10">
        {formatTime(duration - timeProgress)}
      </span>
    </div>
  );
};
