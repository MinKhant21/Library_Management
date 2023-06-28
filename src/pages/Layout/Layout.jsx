import React from "react"
import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../../components/Navbar"
import './style.css'
import { SwitchTransition , CSSTransition } from "react-transition-group"

function Layout() {
    
    const location = useLocation();

    return (
        <>
            <div>
                <Navbar />
                <SwitchTransition>
                    <CSSTransition timeout={200} classNames="fade" key={location.pathname}>
                        <div className="p-4 max-w-6xl mx-auto">
                            <Outlet/>
                        </div>
                    </CSSTransition>
                </SwitchTransition>
            </div>
        </>
    )
}

export default Layout
