import { UserContext } from "@/useContext/UserContextProvider";
import { use } from "react";
import { Navigate } from "react-router";

interface Props {
  component : React.ReactNode;
}

export const PrivateRoute = ({component}:Props) => {
  
  const {authStatus} = use(UserContext)
 
  if(authStatus === 'checking'){ 
    return null;
  }

  if(authStatus === 'authenticated'){
    return component;
  }

  return (
    <Navigate to='/' replace/>
  )
}