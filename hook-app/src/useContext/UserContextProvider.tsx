import { createContext, useEffect, useState, type PropsWithChildren } from "react"
import { users, type User } from "./data/user-mock.data";

type AuthStatus = 'authenticated' | 'checking' | 'notAuthenticated';

interface UserContextProps {
  // * MANEJO DE ESTADOS 
  authStatus : AuthStatus;
  user: User | null;
  isAutheticated:boolean;

  // * METODOS
  login: (userId : number) => boolean;
  logout: () => void;
}

export const UserContext = createContext({} as UserContextProps);

export const UserContextProvider = ({children}:PropsWithChildren) => {

  const [authStatus, setAuthStatus] = useState<AuthStatus>('notAuthenticated');
  const [user, setUser] = useState<User|null>(null);
  
  const handleLogin = (userId:number) =>{
    const user = users.find((user) => user.id === userId);
    if(!user){
      console.log(`Usuario ${userId} no fue encontrado`);
      setAuthStatus("notAuthenticated");
      setUser(null);
      return false;
    }
    
    setAuthStatus("authenticated");
    setUser(user);
    localStorage.setItem('userId', userId.toString());
    console.log('BIENVENIDOOO');
    return true;
  };
  
  const handleLogout = () =>{
    setAuthStatus("notAuthenticated");
    setUser(null);
    localStorage.removeItem('userId');
    console.log('saliOOOOOOOO');
  };
  
  useEffect(() => {
    const findUserId = localStorage.getItem('userId');
    if(findUserId){
      handleLogin(+findUserId);
      return;
    }
    handleLogout();
  });
  

  return <UserContext
    value={{ 
      authStatus: authStatus,
      user: user,
      isAutheticated: authStatus === 'authenticated',
      login: handleLogin,
      logout: handleLogout
    }}
  >

    {children}

  </UserContext>
}
