'use client'
import HeaderPatient from '@/components/tables/HeaderPatient';
import TablePatient from '@/components/tables/TablePatient';
import { Alert } from '@mui/material';
import BlueButton from '@/components/buttons/BlueButton';

export default function SearchClient() {
  return (
    <div className="max-w-7xl flex flex-col mx-auto gap-6 h-auto">
      <h1 className='text-2xl font-bold text-negro-claro uppercase text-center'>Buscar Paciente | Lista de pacientes</h1>
      <div className='px-16'>
        <Alert variant="filled" severity="info" sx={{ backgroundColor:'#008da6'}}>
          Aqui podras encontrar a todos los pacientes de laboratorio y editar su información de contacto.
        </Alert>
      </div>

      <div className='bg-gris-muy-claro w-full px-5 py-8 rounded-lg flex flex-col gap-6 h-full'>
        
        <div className='flex flex-col gap-6 divide-y-[3px] divide-gris-oscuro/30'>
          <HeaderPatient/>
          <div className='pt-4 px-5'>
            <TablePatient/>
          </div>
        </div>
        
        <div className=' flex content-center w-1/4 mx-auto gap-6 '>
          <BlueButton fullWidth>Nueva Busqueda</BlueButton>
        </div> 
      </div>
    </div>
  )
}
