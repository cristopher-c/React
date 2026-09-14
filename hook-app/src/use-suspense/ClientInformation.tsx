import { use, type Usable } from "react"
import { type user } from "./api/get-user.action"

interface Props{
  getUserById: Usable<user>
}

export const ClientInformation = ({getUserById}:Props) => {

  const user = use(getUserById);

  return (
    <div className="bg-gradient gap-4 flex flex-col">
      <h2 className="text-white text-4xl">{user.name} # {user.id}</h2>

      <p className="text-white font-thin text-2xl">{user.location}</p>
      <p className="text-white font-thin">{user.role}</p>
    </div>
  )
}
