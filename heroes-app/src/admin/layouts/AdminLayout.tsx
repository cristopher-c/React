import { Outlet } from "react-router"

export const AdminLayout = () => {
  return (
    <div className="bg-yellow-400">
      <Outlet/>
    </div>
  )
}