import { Button, IconButton, Snackbar } from "@mui/material"
import { Fragment, useState } from "react"
import CloseIcon from '@mui/icons-material/Close';
import Header from "../Header.jsx"

export function EditarMotoristas() {

    const [id, setId] = useState()
    const [nome, setNome] = useState()
    const [cpf, setCpf] = useState()
    const [placaVeiculo, setPlacaVeiculo] = useState()
    const [modeloVeiculo, setModeloVeiculo] = useState()
    const [precoViagem, setPrecoViagem] = useState()
    const [statusOcupacao, setStatusOcupacao] = useState()

    const [open, setOpen] = useState(false)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
    };

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
    );

    function click() {
        let data = {
          'nome': nome,
          'cpf': cpf,
          'placaVeiculo': placaVeiculo,
          'modeloVeiculo': modeloVeiculo,
          'precoViagem': precoViagem,
          'statusOcupacao': statusOcupacao

        }
    
        fetch('http://localhost:8080/motoristas/' + id, {
          method: 'PUT',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(response => {
          setOpen(true)
        }).catch(response => {
          alert('Erro ao editar o motorista!')
        })
    }

    return (
        <>
        <Header />

            <h1>Edição de Motorista</h1>

            <div>
                <label>ID: </label>
                <input type='text' value={id} onChange={e => setId(e.target.value)} />
            </div>
            <div>
                <label>Nome: </label>
                <input type='text' value={nome} onChange={e => setNome(e.target.value)} />
            </div>
            <div>
                <label>CPF: </label>
                <input type='text' value={cpf} onChange={e => setCpf(e.target.value)} />
            </div>
            <div>
                <label>Placa Veículo: </label>
                <input type='text' value={placaVeiculo} onChange={e => setPlacaVeiculo(e.target.value)} />
            </div>
            <div>
                <label>Modelo Veículo: </label>
                <input type='text' value={modeloVeiculo} onChange={e => setModeloVeiculo(e.target.value)} />
            </div>
            <div>
                <label>Preço Viagem: </label>
                <input type='text' value={precoViagem} onChange={e => setPrecoViagem(e.target.value)} />
            </div>
            <div>
                <label>Status Ocupação: </label>
                <input type='text' value={statusOcupacao} onChange={e => setStatusOcupacao(e.target.value)} />
            </div>
            <Button onClick={click}>Editar</Button> 
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Motorista editado com sucesso!"
                action={action}
            />
        </>
    )
    
}