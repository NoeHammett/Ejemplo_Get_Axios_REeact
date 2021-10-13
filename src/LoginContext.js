import React,{useContext,useState} from "react";

const LoginContext = React.createContext();

const LoginChangeContext = React.createContext();


export const useLoginContext = () => {
    return useContext(LoginContext);
}


export const useLoginChangeContext = () => {
  return useContext(LoginChangeContext);
}


 export function LoginProvider({children}){
    const [user,setUser] = useState({nombre: "Samuel", email:"Samuel@context.com"});
    const changeUser = (newUser) => {
      setUser(newUser);
    }

    
    return (
    <LoginContext.Provider value={user}>
        <LoginChangeContext.Provider value={changeUser}>
        {children}
        </LoginChangeContext.Provider>
    </LoginContext.Provider>
    );

}

