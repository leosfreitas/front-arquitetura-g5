import { useState } from 'react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Motorista from './pages/Motorista'

import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/motorista' element={<Motorista />} />
      </Routes>
    </>
  )
}

export default App
