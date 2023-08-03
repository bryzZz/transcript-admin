import { Header } from "components/Header";
import { Home } from "pages/Home";
import { RecordDetails } from "pages/RecordDetails";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/transcript-admin/",
    element: <Home />,
  },
  {
    path: "/transcript-admin/records/:id",
    element: <RecordDetails />,
  },
]);

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#242947]">
      <div className="mx-auto w-full max-w-[1650px] px-[15px] pt-20">
        <Header />

        <RouterProvider router={router} />
      </div>
    </div>
  );
};
