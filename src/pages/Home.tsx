import { Records } from "components/Records";
import { Statistics } from "components/Statistics";
import React from "react";

export const Home: React.FC = () => {
  return (
    <main className="flex gap-5">
      <Statistics />
      <Records />
    </main>
  );
};
