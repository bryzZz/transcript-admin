import React from "react";
import useSWR from "swr";
import { Link, useParams } from "react-router-dom";

import { Record } from "components/Record";
import { Call } from "types";

import { ReactComponent as Back } from "assets/back.svg";
import { BASE_URL } from "constants/index";

export const RecordDetails: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading } = useSWR<Call>(`/call/${id}`);

  return (
    <main>
      <Link
        to={BASE_URL}
        className="mb-10 inline-flex items-center gap-4 rounded-[9px] border border-[#F3F6FE] p-[9px] pr-[18px] text-lg font-medium text-[#F3F6FE] backdrop-blur-md transition-opacity hover:opacity-70"
      >
        <Back />
        Назад
      </Link>

      {isLoading || !data ? (
        "Loading"
      ) : (
        <div className="flex flex-col gap-[20px] pb-6 md:flex-row md:pb-0">
          <div className="flex w-full flex-1 flex-col justify-stretch gap-5 md:min-w-[350px] md:max-w-[546px]">
            <Record data={data} canDownload />

            {/* <div className="flex h-full flex-col gap-4 rounded-[20px] bg-[#F3F6FE] p-[15px]">
              <h3 className="text-[17px] font-medium text-black">
                Краткая сводка
              </h3>
              <div className="justify-self-stretch rounded-[10px] bg-[#FFFFFF] p-5 text-base leading-5 text-[#1F1F1F]">
                <div className="md:custom-scroll h-full md:max-h-[254px] md:overflow-y-scroll md:pr-[10%]">
                  {data.summary}
                </div>
              </div>
            </div> */}
          </div>

          <div className="w-full flex-1 rounded-[20px] bg-[#F3F6FE] p-[15px]">
            <h3 className="mb-[16px] text-[17px] font-medium text-black">
              Краткая сводка
            </h3>
            <div className="rounded-[10px] bg-[#FFFFFF] p-5">
              <div className="md:custom-scroll font-public-sans text-lg leading-7 tracking-[0.35px] text-[#1F1F1F] md:max-h-[430px] md:overflow-y-scroll md:pr-[10%]">
                {data.summary}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
