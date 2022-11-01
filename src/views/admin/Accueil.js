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
        http.get('http://127.0.0.1:8000/api/user').then(res => {
            setUsers(res.data);
        })
    }

    const deleteUser = (id) => {
        const res = axios.delete(`http://127.0.0.1:8000/api/user/${id}`).then(res => {
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
