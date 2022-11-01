import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import http from "../../http"
import Navbar from "../../components/Navbars/navbar";



export default function Contact() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchAllUsers();
    }, []);

    const fetchAllUsers = () => {
        http.get('http://127.0.0.1:8000/api/testlara').then(res => {
            setUsers(res.data);
        })
    }

    const deleteUser = (id) => {
        http.delete(`http://127.0.0.1:8000/api/testlara/${id}`).then(res => {
            fetchAllUsers();
        })
    }

    return (
        <div>
            <Navbar/>
            <h2> Contact </h2>
           
        </div>

    )
}
