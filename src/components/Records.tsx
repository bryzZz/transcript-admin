import React from "react";
import { Record } from "./Record";

export const Records: React.FC = () => {
  return (
    <div className="bg-[#FFFFFF] rounded-[30px] p-[30px] flex-1 gap-[30px] grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
      {new Array(9).fill(0).map((_, i) => (
        <Record key={i} />
      ))}
    </div>
  );
};
