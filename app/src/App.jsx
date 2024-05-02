import { useState } from 'react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Motorista from './pages/Motorista'
import { CadastrarMotoristas } from "./pages/motoristas/CadastrarMotoristas";
import { EditarMotoristas } from "./pages/motoristas/EditarMotoristas";
import { ListarMotoristas } from "./pages/motoristas/ListarMotoristas";
import { ExcluirMotoristas } from "./pages/motoristas/ExcluirMotoristas";

import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/motorista' element={<Motorista />} />
        <Route path="/motorista/cadastro" element={<CadastrarMotoristas />}/>
        <Route path="/motorista/edicao/" element={<EditarMotoristas />}/>
        <Route path="/motorista/listagem" element={<ListarMotoristas />}/>
        <Route path="/motorista/exclusao/" element={<ExcluirMotoristas />}/>
      </Routes>
    </>
  )
}

export default App