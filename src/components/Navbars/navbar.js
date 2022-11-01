import React from 'react'
import { Link } from 'react-router-dom'




export default function Navbar() {
    return (
        <div>
            <nav className='navbar navbar-expand navbar-dark bg-dark'>
                <div className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                        <Link to={"/accueil"} className="nav-link">Accueil</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={"/apropos"} className="nav-link">A propos</Link>
                    </li>

                    <li className='nav-item'>
                        <Link to={"/contact"} className="nav-link">Contact</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={"/"} className="nav-link">Deconnexion</Link>
                    </li>
                </div>

            </nav>
        </div>
    )
}
