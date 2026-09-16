import { useContext, useState } from "react"

import { toast } from "sonner"
import { Link, useNavigate } from "react-router"

import { UserContext } from "@/useContext/UserContextProvider"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const AuthPage = () => {

  const { login } = useContext(UserContext);
  const navigation = useNavigate();

  const [userId, setUserId] = useState('');

  const handleSubmit = (event:React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const canAcces = login(+userId);

    if(!canAcces) {toast.error(`User # ${userId} not found!`); return}

    navigation('/profile', {replace:true});
    console.log(userId, canAcces)
  }

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="text-4xl font-bold">Iniciar Sesion</h1>
      <hr />

      <form className="flex flex-col gap-2 my-10"
        onSubmit={handleSubmit}
      >
        <Input type="number" placeholder="User ID"
          value={userId}
          onChange={(event) => setUserId(event.target.value)}
        />

        <Button type="submit" className={'bg-blue-950'}>Login</Button>
      </form>

      <Link to="/">
        <Button variant={'ghost'}>Back</Button>
      </Link>
    </div>
  )
}
