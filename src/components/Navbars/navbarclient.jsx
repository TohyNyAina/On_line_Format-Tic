import React from 'react'
import { Link } from 'react-router-dom'




export default function Navbarclient() {
    return (
        <div>
            <nav className='navbar navbar-expand navbar-dark bg-dark'>
                <div className='navbar-nav mr-auto'>


                   


                    <li className='nav-item'>
                        <Link to={"/accueilclient"} className="nav-link">Accueil</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={"/aproposclient"} className="nav-link">A propos</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={"/contactclient"} className="nav-link">Contact</Link>
                    </li>
                   
                    <li className='nav-item'>
                        <Link to={"/"} className="nav-link">Deconnexion</Link>
                    </li>


                </div>

            </nav>
            <div>
 
            </div>

        </div>
    )
}
