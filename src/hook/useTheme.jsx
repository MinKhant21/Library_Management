import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContexts";

export default function useTheme(){
    let contexts = useContext(ThemeContext)
    if(contexts == 'undefined'){
        new Error('Context undefindex')
    }
    return contexts
}