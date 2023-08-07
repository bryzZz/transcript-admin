import React from "react";

export const SkeletonRecord: React.FC = () => {
  return (
    <div role="status" className="basis-80 animate-pulse">
      <div className="h-[150px] w-full rounded-[20px] bg-gray-300 pb-4 pl-[13px] pr-[14px] pt-[15px] dark:bg-gray-500">
        <div className="mb-9 flex items-center justify-between">
          <div className="flex items-center gap-[14px]">
            <div className="h-[46px] w-[46px] rounded-full bg-gray-200 dark:bg-gray-400" />
            <div>
              <div className="mb-1 h-5 w-28 rounded bg-gray-200 dark:bg-gray-400" />
              <div className="h-3 w-12 rounded bg-gray-200 dark:bg-gray-400" />
            </div>
          </div>
        </div>

        <div className="h-10 w-full rounded-3xl bg-gray-200 dark:bg-gray-400" />
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
};
