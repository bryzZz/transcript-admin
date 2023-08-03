import React from "react";

import { ReactComponent as Chart } from "assets/chart.svg";
import { ReactComponent as Verify } from "assets/verify.svg";
import { ReactComponent as AutoBrightness } from "assets/auto-brightness.svg";
import { ReactComponent as Information } from "assets/information.svg";

export const Statistics: React.FC = () => {
  return (
    <div className="flex w-full max-w-[405px] flex-col gap-5">
      <div className="flex items-center gap-[31px] rounded-[30px] bg-[#D4D8F1] p-[30px]">
        <div className="rounded-2xl bg-[#242947] p-[17px] backdrop-blur-xl">
          <Chart />
        </div>
        <div>
          <h3 className="text-[50px] font-medium leading-none text-black">
            1583
          </h3>
          <p className="text-sm text-black opacity-60 ">Всего звонков</p>
        </div>
      </div>

      <div className="flex items-center gap-[31px] rounded-[30px] bg-[#C4EFBD] p-[30px]">
        <div className="rounded-2xl bg-[#242947] p-[17px] backdrop-blur-xl">
          <Verify />
        </div>
        <div>
          <h3 className="text-[50px] font-medium leading-none text-black">
            58%
          </h3>
          <p className="text-sm text-black opacity-60 ">Успешных звонков</p>
        </div>
      </div>

      <div className="flex items-center gap-[31px] rounded-[30px] bg-[#FAF8D1] p-[30px]">
        <div className="rounded-2xl bg-[#242947] p-[17px] backdrop-blur-xl">
          <AutoBrightness />
        </div>
        <div>
          <h3 className="text-[50px] font-medium leading-none text-black">
            22%
          </h3>
          <p className="text-sm text-black opacity-60 ">Нейтральных звонков</p>
        </div>
      </div>

      <div className="flex items-center gap-[31px] rounded-[30px] bg-[#EEBBC2] p-[30px]">
        <div className="rounded-2xl bg-[#242947] p-[17px] backdrop-blur-xl">
          <Information />
        </div>
        <div>
          <h3 className="text-[50px] font-medium leading-none text-black">
            10%
          </h3>
          <p className="text-sm text-black opacity-60 ">Негативных звонков</p>
        </div>
      </div>
    </div>
  );
};
