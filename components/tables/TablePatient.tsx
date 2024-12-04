import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { EditNote } from '@mui/icons-material'

function createData(
  id: string,
  patientDoc: string,
  name: string,
  surname: string,
  mail: string,
  phone: string
) {
  return { id, patientDoc, name, surname, mail, phone };
}

const rows = [
  createData('453mi312k01', 'DNI - 30.365.001', 'Homero Jey', 'Simpson', 'HoneroJSimpson@correo.com', '11-1234-5678'),
  createData('16d302fdfs0', 'DNI - 45.395.025', 'Bartolomeo Jey', 'Simpson', 'no.soy.el.barto@correo.com', '11-8888-5266'),
  createData('332ed32d2dc', 'DNI - 38.378.221', 'Ned', 'Flanders', 'Ned.Flander2@correo.com', '11-0285-2754'),
];

export default function TablePatient() {
  return (
    <TableContainer component={Paper} sx={{boxShadow: 'none', backgroundColor: 'transparent' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{backgroundColor: '#D9D9D9', borderBottom: 2, borderBottomColor: '#BFBFBF'}}>
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
          {rows.map((row, index) => (
            <TableRow
              key={row.id}
              sx={{   backgroundColor: index % 2 === 0 ? 'transparent' : '#D9D9D9',
                borderBottom: 2, borderBottomColor: '#BFBFBF', '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.id}</TableCell>
              <TableCell align="center">{row.patientDoc}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.surname}</TableCell>
              <TableCell align="center">{row.mail}</TableCell>
              <TableCell align="center">{row.phone}</TableCell>
              <TableCell align="center">
                <div className='text-negro-medio px-2'>
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