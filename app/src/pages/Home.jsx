import React from "react";
import Header from "./Header.jsx";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <Header />
            <div className="content">
                <h1>Olá</h1>
                <Link to="/motorista">Motoristas</Link>
            </div>
        </>
    );
}
