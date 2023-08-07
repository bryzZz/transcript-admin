import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SWRConfig } from "swr";
import { Header } from "components/Header";
import { Home } from "pages/Home";
import { RecordDetails } from "pages/RecordDetails";
import { BASE_URL } from "constants/index";

const fetcher = (input: RequestInfo | URL, init?: RequestInit) =>
  fetch(`${import.meta.env.VITE_API_URL}${input}`, init).then((res) =>
    res.json(),
  );

const router = createBrowserRouter([
  {
    path: BASE_URL,
    element: <Home />,
  },
  {
    path: `${BASE_URL}/records/:id`,
    element: <RecordDetails />,
  },
]);

export const App: React.FC = () => {
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <div className="min-h-screen bg-[#242947]">
        <div className="mx-auto w-full max-w-[1650px] px-[15px] pt-20">
          <Header />

          <RouterProvider router={router} />
        </div>
      </div>
    </SWRConfig>
  );
};
