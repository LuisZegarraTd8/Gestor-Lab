import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { EditNote } from '@mui/icons-material'
import { useOrderStore } from '@/src/store';
import { Client } from '@/src/types';
import { loadClients, getDocTypeAbbr } from "../../src/services/clientService";
import { useEffect, useState } from 'react';


export default function TablePatient() {

  const { allClients} = useOrderStore(); 
  const [rows, setRows] = useState<Client[]>([]);

  useEffect(() => {
    const clients = loadClients();
    useOrderStore.setState({ allClients: clients });
    setRows(clients);
  }, []);


  return (
    <TableContainer component={Paper} sx={{boxShadow: 'none', backgroundColor: 'transparent' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{backgroundColor: '#e7e5e4', borderBottom: 3, borderBottomColor: '#BFBFBF'}}>
          <TableRow>
            <TableCell><b>ID del Paciente</b></TableCell>
            <TableCell align="center"><b>Documento</b></TableCell>
            <TableCell align="center"><b>Nombre</b></TableCell>
            <TableCell align="center"><b>Apellido</b></TableCell>
            <TableCell align="center"><b>Correo electrónico</b></TableCell>
            <TableCell align="center"><b>N° de teléfono</b></TableCell>
            <TableCell align="center"><b>Opciones</b></TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{   backgroundColor: rows.indexOf(row) % 2 === 0 ? 'transparent' : '#e7e5e499',
                borderBottom: 2, borderBottomColor: '#BFBFBF', '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.id}</TableCell>
              <TableCell align="center">{getDocTypeAbbr(row.personIdType)} - {row.personId}</TableCell>
              <TableCell align="center">{row.firstName}</TableCell>
              <TableCell align="center">{row.lastName}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.phoneNumber}</TableCell>
              <TableCell align="center">
                <div className='text-negro-medio px-2' aria-label='Editar Cliente.'>
                    <EditNote/>
                </div>
              </TableCell>
            </TableRow>
          ))}

        </TableBody>
      </Table>
    </TableContainer>
  );
}