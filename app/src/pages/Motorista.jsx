import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Header.jsx";

export default function Motorista() {
    return (
        <>
        <Header />
        <h1>Motoristas</h1>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Link style={{ marginBottom: '10px' }} to="/motorista/cadastro">Cadastrar Motorista</Link>
            <Link style={{ marginBottom: '10px' }} to="/motorista/listagem">Listar Motoristas</Link>
            <Link style={{ marginBottom: '10px' }} to="/motorista/edicao">Editar Motorista</Link>
            <Link to="/motorista/exclusao">Excluir Motorista</Link>
        </div>

        </>
    )
}