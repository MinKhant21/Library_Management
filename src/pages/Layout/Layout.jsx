import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar"
function Layout() {
    

    return (
        <>
            <div>
                <Navbar />
                <div className="p-4 max-w-6xl mx-auto">
                    <Outlet/>
                </div>
            </div>
        </>
    )
}

export default Layout
