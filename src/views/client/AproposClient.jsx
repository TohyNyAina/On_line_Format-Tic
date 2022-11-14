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
            <Navbarclient />
            <h2> A propos </h2>
           
        </div>
        

    )
}
