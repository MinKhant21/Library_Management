import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "../contexts/themeContexts"
import useTheme from "../hook/useTheme"
function Navbar(props) {
let {theme,ChangeTheme} = useTheme()
    
    return (
      
            <nav onClick={ChangeTheme} className={`border-b-2 ${theme == 'dark' ? 'bg-slate-600' : 'bg-yellow-500'}`}>
                    <ul className="flex justify-between item-center p-4 max-w-6xl mx-auto ">
                        <li className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                            <input type="text" placeholder="Search Books...." className="outline-none" />


                        </li>
                        <li className="flex items-center gap-3 md:-ml-64">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                            </svg>
                            <span className="text-2xl text-indigo-600 font-bold hidden md:block">
                                <Link to="/">
                                Book Store</Link>
                            </span>
                        </li>
                        <li className="flex gap-3 ">
                            <button className="px-3 py-2 bg-indigo-600  text-white rounded-2xl flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                               <span className="hidden md:block">
                                 <Link to="/create">
                                    Create Book
                                 </Link>
                               </span>
                            </button>
                            <div className="w-11 ">
                                 
                                <img src="https://avatars.githubusercontent.com/u/102233767?v=4" alt="" className="w-full rounded-2xl" />
                            </div>
                        </li>
                    </ul>
                </nav>
       
    )
}

export default Navbar
