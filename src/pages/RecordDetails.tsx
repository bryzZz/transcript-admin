import React from "react";
import { Link } from "react-router-dom";

import { Record } from "components/Record";

import { ReactComponent as Back } from "assets/back.svg";

export const RecordDetails: React.FC = () => {
  return (
    <main>
      <Link
        to={"/transcript-admin/"}
        className="mb-10 inline-flex items-center gap-4 rounded-[9px] border border-[#F3F6FE] p-[9px] pr-[18px] text-lg font-medium text-[#F3F6FE] backdrop-blur-md transition-opacity hover:opacity-70"
      >
        <Back />
        Назад
      </Link>

      <div className="flex gap-[20px]">
        <div className="flex w-full min-w-[400px] max-w-[546px] flex-1 flex-col justify-stretch gap-5">
          <Record />

          <div className="flex h-full flex-col gap-4 rounded-[20px] bg-[#F3F6FE] p-[15px]">
            <h3 className="text-[17px] font-medium text-black">
              Краткая сводка
            </h3>
            <div className="h-full justify-self-stretch rounded-[10px] bg-[#FFFFFF] p-5 text-base leading-5 text-[#1F1F1F]">
              Диалог ведется между клиентом и представителем колл-центра.
              Основной тон разговора — деловой, вежливый, со стремлением к
              решению проблемы. Главная эмоция клиента — раздражение от проблем
              с интернетом и недовольство тем, что проблема не решилась ранее,
              но он сохраняет спокойствие и готов идти на сотрудничество. Эмоция
              представителя колл-центра — стремление помочь, профессионализм и
              терпение. Он общается вежливо, пытается разобраться в ситуации и
              предлагает различные варианты решения проблемы.
            </div>
          </div>
        </div>

        <div className="w-full flex-1 rounded-[20px] bg-[#F3F6FE] p-[15px]">
          <h3 className="mb-[16px] text-[17px] font-medium text-black">
            Полная транскрибация
          </h3>
          <div className="rounded-[10px] bg-[#FFFFFF] p-5">
            <div className="custom-scroll max-h-[50vh] overflow-y-scroll pr-72 font-public-sans text-lg leading-7 tracking-[0.35px] text-[#1F1F1F]">
              I was a government major which means I had to write a lot of
              papers. Now when a normal student writes a paper they might spread
              the work out a little like this. So you know. You get started
              maybe a little slowly but you get enough done in the first week
              that some have your days later on everything gets done things stay
              civil and I would want to do that like that. Диалог ведется между
              клиентом и представителем колл-центра. Основной тон разговора —
              деловой, вежливый, со стремлением к решению проблемы. Главная
              эмоция клиента — раздражение от проблем с интернетом и
              недовольство тем, что проблема не решилась ранее, но он сохраняет
              спокойствие и готов идти на сотрудничество. Эмоция представителя
              колл-центра — стремление помочь, профессионализм и терпение. Он
              общается вежливо, пытается разобраться в ситуации и предлагает
              различные варианты решения проблемы. Диалог ведется между клиентом
              и представителем колл-центра. Основной тон разговора — деловой,
              вежливый, со стремлением к решению проблемы. Главная эмоция
              клиента — раздражение от проблем с интернетом и недовольство тем,
              что проблема не решилась ранее, но он сохраняет спокойствие и
              готов идти на сотрудничество. Эмоция представителя колл-центра —
              стремление помочь, профессионализм и терпение. Он общается
              вежливо, пытается разобраться в ситуации и предлагает различные
              варианты решения проблемы. Диалог ведется между клиентом и
              представителем колл-центра. Основной тон разговора — деловой,
              вежливый, со стремлением к решению проблемы. Главная эмоция
              клиента — раздражение от проблем с интернетом и недовольство тем,
              что проблема не решилась ранее, но он сохраняет спокойствие и
              готов идти на сотрудничество. Эмоция представителя колл-центра —
              стремление помочь, профессионализм и терпение. Он общается
              вежливо, пытается разобраться в ситуации и предлагает различные
              варианты решения проблемы. Диалог ведется между клиентом и
              представителем колл-центра. Основной тон разговора — деловой,
              вежливый, со стремлением к решению проблемы. Главная эмоция
              клиента — раздражение от проблем с интернетом и недовольство тем,
              что проблема не решилась ранее, но он сохраняет спокойствие и
              готов идти на сотрудничество. Эмоция представителя колл-центра —
              стремление помочь, профессионализм и терпение. Он общается
              вежливо, пытается разобраться в ситуации и предлагает различные
              варианты решения проблемы. Диалог ведется между клиентом и
              представителем колл-центра. Основной тон разговора — деловой,
              вежливый, со стремлением к решению проблемы. Главная эмоция
              клиента — раздражение от проблем с интернетом и недовольство тем,
              что проблема не решилась ранее, но он сохраняет спокойствие и
              готов идти на сотрудничество. Эмоция представителя колл-центра —
              стремление помочь, профессионализм и терпение. Он общается
              вежливо, пытается разобраться в ситуации и предлагает различные
              варианты решения проблемы. Диалог ведется между клиентом и
              представителем колл-центра. Основной тон разговора — деловой,
              вежливый, со стремлением к решению проблемы. Главная эмоция
              клиента — раздражение от проблем с интернетом и недовольство тем,
              что проблема не решилась ранее, но он сохраняет спокойствие и
              готов идти на сотрудничество. Эмоция представителя колл-центра —
              стремление помочь, профессионализм и терпение. Он общается
              вежливо, пытается разобраться в ситуации и предлагает различные
              варианты решения проблемы. Диалог ведется между клиентом и
              представителем колл-центра. Основной тон разговора — деловой,
              вежливый, со стремлением к решению проблемы. Главная эмоция
              клиента — раздражение от проблем с интернетом и недовольство тем,
              что проблема не решилась ранее, но он сохраняет спокойствие и
              готов идти на сотрудничество. Эмоция представителя колл-центра —
              стремление помочь, профессионализм и терпение. Он общается
              вежливо, пытается разобраться в ситуации и предлагает различные
              варианты решения проблемы. Диалог ведется между клиентом и
              представителем колл-центра. Основной тон разговора — деловой,
              вежливый, со стремлением к решению проблемы. Главная эмоция
              клиента — раздражение от проблем с интернетом и недовольство тем,
              что проблема не решилась ранее, но он сохраняет спокойствие и
              готов идти на сотрудничество. Эмоция представителя колл-центра —
              стремление помочь, профессионализм и терпение. Он общается
              вежливо, пытается разобраться в ситуации и предлагает различные
              варианты решения проблемы.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};