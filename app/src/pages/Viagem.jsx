import React from "react";
import Header from "./Header.jsx";
import "./style/Viagens.css"; 
import { Link } from "react-router-dom";

export default function Viagens() {
    return (
        <>
            <Header />
            <h1>Viagens</h1>
            <div>
                <Link className="link" to="/viagens/motorista">Listar Viagens Motorista</Link>
            </div>


        </>
    );
}