import { createContext, useReducer } from "react";

let ThemeContext = createContext();

let ThemeReducer = (state,action) =>{
    switch(action.type){
        case "CHANGE_THEME":
            return{...state,theme:action.payload}
        default:
            return state
    }
}

const ThemeProvider = ({children}) => {
    let [state,dispatch] = useReducer(ThemeReducer,{
        theme:'light'
    })
    // action -> type + payload
    let ChangeTheme = (theme) => {
        dispatch({type : "CHANGE_THEME",payload:theme})
    }
    return(
        <ThemeContext.Provider value={{...state,ChangeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext,ThemeProvider}