import { Link, Outlet } from "react-router"

export const HeroesLayout = () => {
  return (
    <div className="bg-blue-400">
      <div className="bg-white">
        <ul>
          <li>
            <Link to='/'>HomePage</Link>
          </li>
          <li>
            <Link to='/hero/1'>Hero # 1</Link>
          </li>
          <li>
            <Link to='/search'>SearchPage</Link>
          </li>
          <li>
            <Link to='/admin'>Admin</Link>
          </li>
        </ul>
      </div>
      <Outlet/>
    </div>
  )
}
