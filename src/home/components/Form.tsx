import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PersonService from '../../services/PersonService'

export default function Form() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  const voltar = () => {
    navigate('/')
  }

  const storePerson = () => {
    const data = {
      name: name,
      age: age,
    }

    PersonService.store(data)
      .then((response: any) => {
        voltar()
      })
      .catch((e: Error) => {
        console.log(e)
      })
  }

  return (
    <>
      <Box sx={{ padding: 10 }}>
        <TextField
          id="name"
          name="name"
          label="Nome"
          variant="standard"
          sx={{ width: '80%', marginBottom: 5 }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value)
          }}
        />
        <TextField
          id="age"
          name="age"
          label="Idade"
          variant="standard"
          sx={{ width: '80%' }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setAge(event.target.value)
          }}
        />
      </Box>
      <Box sx={{ paddingLeft: 10, paddingTop: 1 }}>
        <Button variant="contained" onClick={storePerson}>
          Salvar
        </Button>
        <Button variant="contained" sx={{ marginLeft: 2 }} onClick={voltar}>
          Voltar
        </Button>
      </Box>
    </>
  )
}
