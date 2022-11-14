import { useState, useEffect } from "react";
import http from "../../http";
import axios from "axios";
import Navbar from "../../components/Navbars/navbar";

export default function Accueil() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchAllUsers();
    }, []);

    const fetchAllUsers = () => {
        http.get('').then(res => {
            setUsers(res.data);
        })
    }

    const deleteUser = (id) => {
        const res = axios.delete(`${id}`).then(res => {
            fetchAllUsers();
        })
    }

    return (
        <div>
            <Navbar />
            <h2> Accueil </h2>
           
        </div>
        

    )
}
