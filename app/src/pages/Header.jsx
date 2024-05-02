import React from "react";
import { Link } from "react-router-dom";
import "./style/Header.css";

export default function Header() {
    return (
        <header className="header">
            <nav>
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/motorista">Motoristas</Link>
                    </li>
                    <li>
                        <Link to="/viajens">Viagens</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
