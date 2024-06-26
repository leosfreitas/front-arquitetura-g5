import { Button, IconButton, Snackbar } from "@mui/material";
import { Fragment, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import Header from "../Header.jsx";
import  '../style/Cadastro.css';

export function CadastrarMotoristas() {

    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [placaVeiculo, setPlacaVeiculo] = useState("");
    const [modeloVeiculo, setModeloVeiculo] = useState("");
    const [precoViagem, setPrecoViagem] = useState("");
    const [open, setOpen] = useState(false);

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
        };
    
        fetch('http://localhost:8080/motoristas', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(response => {
          setOpen(true)
        }).catch(response => {
          alert('Erro no cadastro do motorista!')
          alert(response.status)
        });
    }

    return (
      <>
        <div className="card">
            <Header />
            <h1>Cadastro de Motoristas</h1>
            <form className="form">
                <input type='text' placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
                <input type='text' placeholder="CPF" value={cpf} onChange={e => setCpf(e.target.value)} />
                <input type='text' placeholder="Placa do Veículo" value={placaVeiculo} onChange={e => setPlacaVeiculo(e.target.value)} />
                <input type='text' placeholder="Modelo do Veículo" value={modeloVeiculo} onChange={e => setModeloVeiculo(e.target.value)} />
                <input type='text' placeholder="Preço da Viagem" value={precoViagem} onChange={e => setPrecoViagem(e.target.value)} />
                <Button variant="contained" onClick={() => click()}>Cadastrar</Button>
            </form>
        </div>
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Motorista cadastrado com sucesso!"
            action={action}
        ></Snackbar>
      </>
    )
}
