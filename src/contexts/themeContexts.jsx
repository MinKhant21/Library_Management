import { createContext } from "react";

let ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    return(
        <ThemeContext.Provider value={{theme:'light'}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext,ThemeProvider}