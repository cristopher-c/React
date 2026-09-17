import { createBrowserRouter } from "react-router";

import { AdminLayout } from "@/admin/layouts/AdminLayout";
// import { AdminPage } from "@/admin/pages/AdminPage";
import { HeroesLayout } from "@/heroes/layouts/HeroesLayout";
import { HeroPage } from "@/heroes/pages/hero/components/HeroPage";
import { HomePage } from "@/heroes/pages/home/HomePage";
import { lazy } from "react";
// import { SearchPage } from "@/heroes/pages/search/SearchPage";

const SearchPage = lazy(() => import('@/heroes/pages/search/SearchPage'));
const AdminPage = lazy(() => import('@/admin/pages/AdminPage'));

export const appRouter = createBrowserRouter([
  {
    path:'/',
    element: <HeroesLayout/>,
    children:[
      {
        index: true,
        element: <HomePage/> /** DONDE ESTÁN TODOS LOS HEROES */
      },
      {
        path:'search',
        element: <SearchPage/>
      },
      {
        path:'hero/1',
        element: <HeroPage/> /** SOLO SE VERÁN LAS STATS DE 1 HEROE */
      },
    ]
  },
  {
    path:'/admin',
    element: <AdminLayout/>,
    children:[
      {
        index: true,
        element: <AdminPage/>
      },
    ]
  }
]);
