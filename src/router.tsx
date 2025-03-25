import {
  Link,
  Outlet,
  RouteObject,
  createBrowserRouter,
} from "react-router-dom";
import AuthLayout from "./components/layout/auth-layout";
import Dashboard from "./pages/dashboard";
import PageNotFound from "./pages/page-not-found";
import NoAuthLayout from "./components/layout/no-auth-layout";
import LogIn from "./pages/log-in";
import AuthGuardian from "./components/layout/auth-guardian";
import GuestGuardian from "./components/layout/guest-guardian";
import Flights from "./pages/flights";

const authRoutes: RouteObject[] = [
  {
    element: (
      <AuthGuardian>
        <AuthLayout>
          <Outlet />
        </AuthLayout>
      </AuthGuardian>
    ),
    children: [
      {
        id: "dashboard",
        path: "dashboard",
        element: <Dashboard />,
        handle: { crumb: () => <Link to="/dashboard">Dashboard</Link> },
        children: [
          {
            id: "flights",
            path: "flights",
            element: <Flights />,
            handle: { crumb: () => <span>Flights</span> },
          },
        ],
      },
    ],
  },
];

const noAuthRoutes: RouteObject[] = [
  {
    element: (
      <GuestGuardian>
        <NoAuthLayout>
          <Outlet />
        </NoAuthLayout>
      </GuestGuardian>
    ),
    children: [
      {
        id: "log-in",
        index: true,
        element: <LogIn />,
      },
    ],
  },
];

export const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <Outlet />,
    errorElement: <PageNotFound />,
    children: [...authRoutes, ...noAuthRoutes],
  },
]);
