import { Button, IconButton, Snackbar } from "@mui/material"
import { Fragment, useState } from "react"
import CloseIcon from '@mui/icons-material/Close';
import Header from "../Header.jsx"
import  '../style/Editar.css'


export function EditarMotoristas() {

    const [id, setId] = useState()
    const [nome, setNome] = useState()
    const [cpf, setCpf] = useState()
    const [placaVeiculo, setPlacaVeiculo] = useState()
    const [modeloVeiculo, setModeloVeiculo] = useState()
    const [precoViagem, setPrecoViagem] = useState()

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
          'precoViagem': precoViagem

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
          <div className="editar-container">
              <h1>Edição de Motorista</h1>
              <div className="editar-form">
                  <div className="editar-input-container">
                      <label className="editar-label">ID: </label>
                      <input className="editar-input" type='text' value={id} onChange={e => setId(e.target.value)} />
                  </div>
                  <div className="editar-input-container">
                      <label className="editar-label">Nome: </label>
                      <input className="editar-input" type='text' value={nome} onChange={e => setNome(e.target.value)} />
                  </div>
                  <div className="editar-input-container">
                      <label className="editar-label">CPF: </label>
                      <input className="editar-input" type='text' value={cpf} onChange={e => setCpf(e.target.value)} />
                  </div>
                  <div className="editar-input-container">
                      <label className="editar-label">Placa Veículo: </label>
                      <input className="editar-input" type='text' value={placaVeiculo} onChange={e => setPlacaVeiculo(e.target.value)} />
                  </div>
                  <div className="editar-input-container">
                      <label className="editar-label">Modelo Veículo: </label>
                      <input className="editar-input" type='text' value={modeloVeiculo} onChange={e => setModeloVeiculo(e.target.value)} />
                  </div>
                  <div className="editar-input-container">
                      <label className="editar-label">Preço Viagem: </label>
                      <input className="editar-input" type='text' value={precoViagem} onChange={e => setPrecoViagem(e.target.value)} />
                  </div>
                  <Button className="editar-button" onClick={click}>Editar</Button> 
              </div>
          </div>
          <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              message="Motorista editado com sucesso!"
              action={action}
          />
      </>
  );
  
    
}