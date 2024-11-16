import React from "react"
import { Link, NavLink } from "react-router-dom"
import imageUrl from "/avatar-icon.png"


export default function Header() {

    function fakeLogOut() {
        localStorage.removeItem("loggedin")
    }
    
    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink 
                to="/host"
                className={({isActive}) => isActive ? "active-link" : null}
                >
                    Host
                </NavLink>

                <NavLink 
                to="/about"
                className={({isActive}) => isActive ? "active-link" : null}
                >
                    About
                </NavLink>

                <NavLink 
                to="/vans"
                className={({isActive}) => isActive ? "active-link" : null}
                >
                    Vans
                </NavLink>

                <Link to="login" className="login-link">
                    <img 
                        src={imageUrl} 
                        className="login-icon"
                    />
                </Link>
                <button onClick={fakeLogOut}>X</button>
            </nav>
        </header>
    )
}