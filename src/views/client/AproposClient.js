import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import http from "../../http"
import axios from "axios";
import Navbarclient from "../../components/Navbars/navbarclient";

export default function AproposClient() {
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
            <Navbarclient />
            <h2> A propos </h2>
           
        </div>
        

    )
}
