import { AboutPage } from "@/useContext/AboutPage";
import { createBrowserRouter } from "react-router";
import { AuthPage } from "../auth/AuthPage";
import { ProfilePage } from "../profile/ProfilePage";
import { Page404 } from "../error_404/Page404";
import { PrivateRoute } from "./privateRouter";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AboutPage/>,
  },
  {
    path: "/auth",
    element: <AuthPage/>,
  },
  {
    path: "/profile",
    element: <PrivateRoute component={<ProfilePage/>}/>,
  },
  {
    path: "*",
    element: <Page404/>,
  },
]);