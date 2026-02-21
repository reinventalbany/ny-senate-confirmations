import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router";
import Rollbar from "rollbar";
import { ErrorBoundary, Provider } from "@rollbar/react";
import App from "./App";
import Home from "./components/Home";
import SenatorsTable from "./components/SenatorsTable";
import NomineesTable from "./components/NomineesTable";
import SlatesTable from "./components/SlatesTable";
import PositionsTable from "./components/PositionsTable";
import NomineeDetail from "./components/NomineeDetail";
import SenatorDetail from "./components/SenatorDetail";
import SlateDetail from "./components/SlateDetail";
import PositionDetail from "./components/PositionDetail";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "senators", element: <SenatorsTable /> },
      { path: "senators/:senatorId", element: <SenatorDetail /> },
      { path: "nominees", element: <NomineesTable /> },
      { path: "nominees/:nomineeId", element: <NomineeDetail /> },
      { path: "slates", element: <SlatesTable /> },
      { path: "slates/:slateId", element: <SlateDetail /> },
      { path: "positions", element: <PositionsTable /> },
      { path: "positions/:positionId", element: <PositionDetail /> },
    ],
  },
]);

const rollbarConfig: Rollbar.Configuration = {
  accessToken: "4a9340029db94477abe4b10e5ca68a84",
  environment: process.env.NODE_ENV || "development",
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider config={rollbarConfig}>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
);
