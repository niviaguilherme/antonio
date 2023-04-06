import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Form() {
  const navigate = useNavigate()

  const voltar = () => {
    navigate('/')
  }

  return (
    <>
      <Box sx={{ padding: 10 }}>
        <TextField
          id="standard-basic"
          label="Nome"
          variant="standard"
          sx={{ width: '80%', marginBottom: 5 }}
        />
        <TextField
          id="standard-basic"
          label="Idade"
          variant="standard"
          sx={{ width: '80%' }}
        />
      </Box>
      <Box sx={{ paddingLeft: 10, paddingTop: 1 }}>
        <Button variant="contained">Salvar</Button>
        <Button variant="contained" sx={{ marginLeft: 2 }} onClick={voltar}>
          Voltar
        </Button>
        <a href="/">Voltar 2</a>
      </Box>
    </>
  )
}
