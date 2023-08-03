import { Header } from "components/Header";
import { Statistics } from "components/Statistics";
import React from "react";

export const App: React.FC = () => {
  return (
    <div className="bg-[#242947] min-h-screen">
      <div className="max-w-[1680px] w-full mx-auto pt-20">
        <Header />

        <main>
          <Statistics />
        </main>
      </div>
    </div>
  );
};
