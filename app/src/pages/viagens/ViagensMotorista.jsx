import { Button, IconButton, Snackbar } from "@mui/material";
import { Fragment, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import Header from "../Header.jsx";
import '../style/ViagensMotorista.css'

export function ViagensMotoristas() {

    const [id, setId] = useState();
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    }

    const action = (
        <Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </Fragment>
    )

    const [data, setData] = useState([])

    function click() {
        fetch('http://localhost:8081/motorista/' + id, {
        method: 'GET'
        }).then(response => {
        return response.json()
        }).then(data => {
        setData(data)
        }).catch(response => {
        alert('Erro ao listar as viagens do motorista!')
        })
    }

    return (
        <>
        <Header />
            <h1>Mostrar viagens do motorista</h1>
            <div>
                <label>ID: </label>
                <input type='text' value={id} onChange={e => setId(e.target.value)} />
            </div>
            <Button onClick={click}>Listar</Button>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Viagens listadas com sucesso!"
                action={action}
            />
            <div className="card">
                <table className="table">
                    <tbody>
                        <tr>
                        <td>ID</td>
                        <td>Origem</td>
                        <td>Destino</td>
                        <td>Data Início</td>
                        <td>Duração</td>
                        <td>Preço</td>
                        <td>Status</td>
                        </tr>            
                        {
                        data.map((viagem, index) => {
                            return <tr key={index}>
                            <td>{viagem.id}</td>
                            <td>{viagem.origem}</td>
                            <td>{viagem.destino}</td>
                            <td>{viagem.dataInicio}</td>
                            <td>{viagem.horasViagem}</td>
                            <td>{viagem.precoTotal}</td>
                            <td>{viagem.status}</td>
                            </tr>
                        })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}