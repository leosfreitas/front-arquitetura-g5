import { Button, IconButton, Snackbar } from "@mui/material"
import { Fragment, useState } from "react"
import CloseIcon from '@mui/icons-material/Close';
import Header from "../Header.jsx"

export function ExcluirMotoristas() {

    const [id, setId] = useState()
    const [open, setOpen] = useState(false)

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
        fetch('http://localhost:8080/motoristas/exclusao/' + id, {
        method: 'DELETE'
        }).then(response => {
        setOpen(true)
        }).catch(response => {
        alert('Erro ao excluir motorista!')
        })
    }

    return (
        <>
        <Header />
            <h1>Exclusão de Motoristas</h1>
            <div>
                <label>ID: </label>
                <input type='text' value={id} onChange={e => setId(e.target.value)} />
            </div>
            <Button onClick={click}>Excluir</Button>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Motorista excluído com sucesso!"
                action={action}
            />
        </>
    )

}