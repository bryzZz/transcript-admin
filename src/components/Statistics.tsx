import React from "react";

import { ReactComponent as Chart } from "assets/chart.svg";
import { ReactComponent as Verify } from "assets/verify.svg";
import { ReactComponent as AutoBrightness } from "assets/auto-brightness.svg";
import { ReactComponent as Information } from "assets/information.svg";

export const Statistics: React.FC = () => {
  return (
    <div className="max-w-[405px] flex flex-col gap-5">
      <div className="bg-[#D4D8F1] rounded-[30px] p-[30px] gap-[31px] flex items-center">
        <div className="rounded-2xl bg-[#242947] backdrop-blur-xl p-[17px]">
          <Chart />
        </div>
        <div>
          <h3 className="text-black text-[50px] leading-none font-medium">
            1583
          </h3>
          <p className="text-black opacity-60 text-sm ">Всего звонков</p>
        </div>
      </div>

      <div className="bg-[#C4EFBD] rounded-[30px] p-[30px] gap-[31px] flex items-center">
        <div className="rounded-2xl bg-[#242947] backdrop-blur-xl p-[17px]">
          <Verify />
        </div>
        <div>
          <h3 className="text-black text-[50px] leading-none font-medium">
            58%
          </h3>
          <p className="text-black opacity-60 text-sm ">Успешных звонков</p>
        </div>
      </div>

      <div className="bg-[#FAF8D1] rounded-[30px] p-[30px] gap-[31px] flex items-center">
        <div className="rounded-2xl bg-[#242947] backdrop-blur-xl p-[17px]">
          <AutoBrightness />
        </div>
        <div>
          <h3 className="text-black text-[50px] leading-none font-medium">
            22%
          </h3>
          <p className="text-black opacity-60 text-sm ">Нейтральных звонков</p>
        </div>
      </div>

      <div className="bg-[#EEBBC2] rounded-[30px] p-[30px] gap-[31px] flex items-center">
        <div className="rounded-2xl bg-[#242947] backdrop-blur-xl p-[17px]">
          <Information />
        </div>
        <div>
          <h3 className="text-black text-[50px] leading-none font-medium">
            10%
          </h3>
          <p className="text-black opacity-60 text-sm ">Негативных звонков</p>
        </div>
      </div>
    </div>
  );
};
