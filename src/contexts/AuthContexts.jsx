import { createContext } from "react";

let AuthContext = createContext();

export default function AuthContextProvider({childen}) {
  return (
    <AuthContext.Provider value={{user:'kaungminkhant'}}>{childen}</AuthContext.Provider>
  )
}

export {AuthContext , AuthContextProvider}
