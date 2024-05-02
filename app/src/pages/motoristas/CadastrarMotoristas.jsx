import { Button, IconButton, Snackbar } from "@mui/material"
import { Fragment, useState } from "react"
import CloseIcon from '@mui/icons-material/Close';

export function CadastrarMotoristas() {

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
        })
    }

    return (
      <>
        <div className="card">

            <h1>Cadastro de Motoristas</h1>

            Nome: <input type='text' value={nome} onChange={e => setNome(e.target.value)} ></input><br></br>
            CPF: <input type='text' value={cpf} onChange={e => setCpf(e.target.value)} ></input><br></br>
            Placa do Veículo: <input type='text' value={placaVeiculo} onChange={e => setPlacaVeiculo(e.target.value)} ></input><br></br>
            Modelo do Veículo: <input type='text' value={modeloVeiculo} onChange={e => setModeloVeiculo(e.target.value)} ></input><br></br>
            Preço da Viagem: <input type='text' value={precoViagem} onChange={e => setPrecoViagem(e.target.value)} ></input><br></br>
            Status de Ocupação: <input type='text' value={statusOcupacao} onChange={e => setStatusOcupacao(e.target.value)} ></input><br></br>
            <br></br>

            <Button variant="contained" onClick={() => click()}>Cadastrar</Button>
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