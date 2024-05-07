import { useEffect, useState } from "react";
import Header from "../Header.jsx"
import '../style/ListarMotoristas.css'

export function ListarMotoristas() {

    const [data, setData] = useState([])
    
    useEffect(() => {
        load()
    }, [])
    
    function load() {
        fetch('http://localhost:8080/motoristas', {
        method: 'GET'
        }).then(response => {
        return response.json()
        }).then(data => {
        setData(data)
        }).catch(response => {
        alert('Erro ao listar os motoristas cadastrados!')
        })
    }
    
    return(
        <>
        <Header />
            <h1>Listagem de Motoristas</h1>

            <div className="card">
                <table>
                    <tbody>
                        <tr>
                        <td>ID</td>
                        <td>Nome</td>
                        <td>CPF</td>
                        <td>Placa Veículo</td>
                        <td>Modelo Veículo</td>
                        <td>Preço Viagem</td>
                        <td>Status Ocupação</td>
                        </tr>            
                        {
                        data.map((partida, index) => {
                            return <tr key={index}>
                            <td>{partida.id}</td>
                            <td>{partida.nome}</td>
                            <td>{partida.cpf}</td>
                            <td>{partida.placaVeiculo}</td>
                            <td>{partida.modeloVeiculo}</td>
                            <td>{partida.precoViagem}</td>
                            <td>{partida.statusOcupacao}</td>
                            </tr>
                        })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}