import React from 'react'
import { useState } from "react"
import axios from "axios";


export default function CreatePortfolio() {
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const [categorie, setCategorie] = useState("A");
    const submitForm = () => {
        console.log(inputs)
        axios.post('', inputs).then((res) => {
            // navigate('/formation');
        })
    }

    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div>
                        <h1 align="center">Creation du Portfolio</h1>
                        <table  align="center">
                            <thead>
                                <tr>
                                    <th> <label>Nom</label> <br />
                                        <input type="text" name="nom" className="from-control mb-2"
                                            value={inputs.nom || ''}
                                            onChange={handleChange}
                                        />
                                    </th>
                                    <th> <label>Prenom</label> <br />
                                        <input type="text" name="prenom" className="from-control mb-2"
                                            value={inputs.prenom || ''}
                                            onChange={handleChange}
                                        />
                                    </th>
                                    <th> <label>Date de naissance</label> <br />
                                        <input type="date" name="date" className="from-control mb-2"
                                            value={inputs.date || ''}
                                            onChange={handleChange}
                                        />
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th> <label>Mail</label> <br />
                                        <input type="email" name="email" className="from-control mb-2"
                                            value={inputs.email || ''}
                                            onChange={handleChange}
                                        />
                                    </th>
                                    <th>  <label>Github</label> <br />
                                        <input type="text" name="git" className="from-control mb-2"
                                            value={inputs.git || ''}
                                            onChange={handleChange}
                                        />
                                    </th>
                                    <th>  <label>Facebook</label> <br />
                                        <input type="text" name="facebook" className="from-control mb-2"
                                            value={inputs.facebook || ''}
                                            onChange={handleChange}
                                        /> </th>
                                </tr>
                                <tr>
                                    <th>  <label>LinkedIn</label> <br />
                                        <input type="text" name="linkedin" className="from-control mb-2"
                                            value={inputs.linkedin|| ''}
                                            onChange={handleChange}
                                        />
                                    </th>
                                    <th>   <label>Telephone</label> <br />
                                        <input type="number" name="tel" className="from-control mb-2"
                                            value={inputs.tel || ''}
                                            onChange={handleChange}
                                        />
                                    </th>
                                    <th>  <label>Poste</label> <br />
                                        <input type="text" name="poste" className="from-control mb-2"
                                            value={inputs.poste || ''}
                                            onChange={handleChange}
                                        />
                                    </th>
                                </tr>
                                <tr>
                                    <th>  <label>Photo</label> <br />
                                        <input type="file" name="photo" className="from-control mb-2"
                                            value={inputs.photo || ''}
                                            onChange={handleChange}
                                        />
                                    </th>
                                    <th>
                                        <button type="button" onClick={submitForm} >Créer</button>
                                    </th>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
