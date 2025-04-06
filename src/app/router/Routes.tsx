import { createBrowserRouter } from "react-router";
import HomePage from "../../features/home/HomePage";
import App from "../layout/App";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetailPage from "../../features/activities/details/ActivityDetailPage";

export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "activities",
        element: <ActivityDashboard />,
      },
      {
        path: "createActivity",
        element: <ActivityForm />,
      },
      {
        path: "activities/:id",
        element: <ActivityDetailPage />,
      },
    ],
  },
]);
