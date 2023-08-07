import React from "react";
import useSWR from "swr";

import { Call } from "types";
import { Record } from "./Record";
import { SkeletonRecord } from "./SkeletonRecord";

export const Records: React.FC = () => {
  const { data, error, isLoading } = useSWR<Call[]>("/calls");

  const getContent = () => {
    if (error) {
      return <div className="text-red-600">Error</div>;
    }

    if (isLoading) {
      return new Array(3).fill(0).map((_, i) => <SkeletonRecord key={i} />);
    }

    return data?.map((data) => (
      <Record key={data.id} data={data} className="basis-80" />
    ));
  };

  return (
    <div className="flex flex-1 flex-wrap items-start gap-[30px] rounded-[30px] bg-[#FFFFFF] p-[30px]">
      {getContent()}
    </div>
  );
};
