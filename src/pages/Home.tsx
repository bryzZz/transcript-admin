import { Records } from "components/Records";
import { Statistics } from "components/Statistics";
import React from "react";

export const Home: React.FC = () => {
  return (
    <main className="flex flex-col gap-5 pb-6 md:flex-row">
      <Statistics />
      <Records />
    </main>
  );
};
