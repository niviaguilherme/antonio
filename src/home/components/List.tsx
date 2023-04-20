import Typography from '@mui/material/Typography'
import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import PersonService from '../../services/PersonService'
import IPersonData from '../../types/Person'

export default function List() {
  const navigate = useNavigate()
  const [people, setPeople] = useState<IPersonData[]>([])

  const add = () => {
    navigate('/add')
  }

  const listPerson = async () => {
    await PersonService.list()
      .then((response: any) => {
        setPeople(response.data.person)
      })
      .catch((e: Error) => {
        console.log(e)
      })
  }

  useEffect(() => {
    listPerson()
  }, [])

  return (
    <Box sx={{ padding: 10 }}>
      <h1>Lista</h1>
      <Button variant="contained" onClick={add} sx={{ mb: 3 }}>
        Adicionar
      </Button>
      <TableContainer component={Paper} sx={{ width: '80%' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Idade</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {people.map((row, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
