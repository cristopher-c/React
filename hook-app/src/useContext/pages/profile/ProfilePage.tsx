import { Button } from "@/components/ui/button"
import { UserContext } from "@/useContext/UserContextProvider"
import { use, useContext } from "react"

export const ProfilePage = () => {

  // const {user} = useContext(UserContext);
  const {user, logout} = use(UserContext);

  return (
    <div className="flex flex-col justify-start items-center gap-2">
      <h1 className="text-4xl font-bold">Profile Page</h1>
      <hr />

      <h2 className="text-white text-2xl">{user?.name} # {user?.id}</h2>

      <p className="text-white font-thin text-xl">{user?.about}</p>
      <p className="text-white font-thin">{user?.title}</p>

      <pre>{JSON.stringify(user)}</pre>

      <Button 
        variant="destructive"
        onClick={logout}
      >Salir</Button>
    </div>
  )
}
