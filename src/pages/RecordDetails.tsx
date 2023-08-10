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

  const getText = () => {
    if (id === "5") {
      return (
        <>
          Данная запись - беседа между клиентом и представителем колл-центра. Во
          время этого разговора, клиент звонит с <span>вопросом</span>,
          связанным с состоянием <span>его заявления</span>, которое он{" "}
          <span>подал на сайте</span>, однако,{" "}
          <span>не получил обратной связи</span> в<span>обещанные сроки</span>.
          Можно предположить, что первые фразы принадлежат
          <span>клиенту</span>, в них{" "}
          <span>
            чувствуется некое недоумение и фрустрация от кажущейся
            неэффективности работы службы поддержки компании
          </span>
          . Клиент здесь выражает свое разочарование и нервозность, так как, как
          он{" "}
          <span>утверждает, от состояния его заявления зависит его работа</span>
          . Это подчеркивается фразами <span>"Моя работа под угрозой"</span>,{" "}
          <span>"Трактор срочно нужен"</span>, что указывает на высокий уровень
          стресса и срочности его запроса. Оператор колл-центра, вероятно,
          говорит дальше, пытаясь сохранить <span>спокойствие</span> и{" "}
          <span>профессионализм</span>, старается <span>проверить</span> факты и
          <span>уточнить информацию</span> в базе данных. В диалоге также
          присутствует <span>ненавязчивое заверение в том</span>, что их
          <span>компания - лучшая на рынке</span>, что может рассматриваться как
          попытка <span>успокоить клиента</span>. Однако, последняя фраза вряд
          ли могла <span>успокоить клиента</span>, и звучит довольно{" "}
          <span>запутанно и неуверенно</span>, что говорит о некоторой
          <span>неуверенности</span> и возможно{" "}
          <span>недостатке компетентности со стороны оператора</span>.
        </>
      );
    }

    if (id === "6") {
      return (
        <>
          Диалог происходит между потенциальным клиентом - Евгением и
          представителем колл-центра - Светкой. Евгений обращается с запросом о
          покупке <span>комбайна</span> модели <span>RSM-200</span> в{" "}
          <span>лизинг</span> или в рассрочку за месяц и половину{" "}
          <span>с первоначальным взносом</span> в размере <span>10%</span>. Он
          оставляет свои <span>контактные данные</span>, а также{" "}
          <span>информацию о</span>
          своей <span>компании</span>, которая работает в сфере
          радиокопировальных услуг. Очевидно,{" "}
          <span>
            он настроен на длительное сотрудничество и ожидает конкретного
            ответа от руководителя
          </span>
          . Светка обещает предоставить всю необходимую информацию по его
          запросу, когда Дмитрий обработает его данные.{" "}
          <span>Тон диалога профессиональный</span> и в целом{" "}
          <span>дружелюбный</span>. Есть <span>эмоции интереса</span> и{" "}
          <span>ожидания со стороны клиента</span>, а также{" "}
          <span>уверенности</span> и{" "}
          <span>обещания помощи со стороны работника колл-центра</span>.
        </>
      );
    }

    return data?.summary;
  };

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
              <div className="md:custom-scroll highlight font-public-sans text-lg leading-7 tracking-[0.35px] text-[#1F1F1F] md:max-h-[430px] md:overflow-y-scroll md:pr-[10%]">
                {getText()}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
