import { Header } from "components/Header";
import { Records } from "components/Records";
import { Statistics } from "components/Statistics";
import React from "react";

export const App: React.FC = () => {
  return (
    <div className="bg-[#242947] min-h-screen">
      <div className="max-w-[1680px] w-full mx-auto pt-20">
        <Header />

        <main className="flex gap-5">
          <Statistics />
          <Records />
        </main>
      </div>
    </div>
  );
};
