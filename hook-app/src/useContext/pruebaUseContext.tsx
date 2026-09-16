import { RouterProvider } from "react-router"
import { appRouter } from "./pages/router/app.router"
import { UserContextProvider } from "./UserContextProvider"

export const PruebaUseContext = () => {
  return (
    <UserContextProvider>

    <div className="bg-gradient">
      <RouterProvider router={appRouter}/>
    </div>

    </UserContextProvider>
  )
}
