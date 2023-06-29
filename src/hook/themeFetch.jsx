import React, { createContext } from "react";

let ThemeContext = createContext();

const themeFetch = ({children}) => {
    return(
        <ThemeContext.Provider value={{theme:"dark"}}>
            {children}
        </ThemeContext.Provider>
    )
}


