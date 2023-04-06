import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../home/pages/Home'
import FormRegister from '../home/pages/FormRegister'

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/antonio" element={<Home />} />
      <Route path="/add" element={<FormRegister />} />
    </Routes>
  )
}

export default Routers
