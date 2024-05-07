import { Button, IconButton, Snackbar } from "@mui/material";
import { Fragment, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import Header from "../Header.jsx";
import  '../style/Cadastro.css';

export function ViagensMotoristas() {

    const [id, setId] = useState();

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

    
    function click() {
        fetch('http://localhost:8081/motorista/' + id, {
            method: 'GET'
        })
        .then(response => {
            if (response.ok) {
                setOpen(true)
            }
            else {
                throw new Error('Erro ao listar as viagens do motorista!')
            }
        })
        .catch(error => {
            alert(error.message)
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
        </>
    )


}