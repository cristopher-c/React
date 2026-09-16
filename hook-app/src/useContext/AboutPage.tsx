import { Link } from "react-router"
import { UserContext } from "./UserContextProvider"
import { use } from "react";
import { Button } from "@/components/ui/button";

export const AboutPage = () => {
  
  const {isAutheticated, logout} = use(UserContext);
  
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <h1 className="text-4xl text-white font-bold">About Page!!</h1>
        <hr />
      <div className="flex flex-col gap-2 items-center">

        {
          isAutheticated && (
            <Link to="/profile" className="underline hover:text-blue-500 hover:text-xl">Profile</Link>
          )
        }        
        
        {
          isAutheticated ? (
            <Button 
            variant="destructive"
            onClick={logout}
            >Salir</Button>
          ) : (

            <Link to="/auth" className="underline hover:text-blue-500 hover:text-xl">Login</Link>
          )
        }
      </div>
    </div>
  )
}
