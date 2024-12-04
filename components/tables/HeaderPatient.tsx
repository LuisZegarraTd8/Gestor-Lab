import { EditNote } from '@mui/icons-material'

export default function c() {
  return (
    <div className='flex justify-between px-10'>
        <h1 className='text-negro-medio font-bold text-xl uppercase'>Datos del Paciente:</h1>
        <div className='flex gap-2 text-negro-claro'>
            <EditNote/>
            <p>Editar Paciente.</p>
        </div>
    </div>
  )
}
