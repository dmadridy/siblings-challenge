import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Root from "./components/layout/root";
import Details from "./pages/details";
import NotFound from "./pages/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        id: "dashboard",
        element: <Dashboard />,
        index: true,
      },
      {
        id: "company-details",
        path: "company-details/:id",
        element: <Details />,
      },
      {
        id: "not-found",
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
