import React from "react";
import { Link } from "react-router-dom";


export default function Auth() {
    return (
        <div>

            <h1> Bonjour! <br /> Bienvenu sur notre plateforme </h1>
            <div className="po">
            <Link to={'/Login'} class='link'> <button className="submit-button"
            >
                Connexion en tant qu'Administrateur
            </button> </Link>

            <br />

            <Link to={'/Loginclient'} class='link'> <button className="submit-button"
            >  
                Connexion en tant que Client
            </button> </Link>
            </div>
        </div>
    )
}

