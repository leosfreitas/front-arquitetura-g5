import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header.jsx";
import "./style/Motorista.css"; // Import the CSS file

export default function Motorista() {
    return (
        <>
            <Header />
            <div className="container"> {/* Added a class name for the container */}
                <h1>Motoristas</h1>

                <div>
                    <Link className="link" to="/motorista/cadastro">Cadastrar Motorista</Link>
                    <Link className="link" to="/motorista/listagem">Listar Motoristas</Link>
                    <Link className="link" to="/motorista/edicao">Editar Motorista</Link>
                    <Link className="link" to="/motorista/exclusao">Excluir Motorista</Link>
                </div>
            </div>
        </>
    );
}
