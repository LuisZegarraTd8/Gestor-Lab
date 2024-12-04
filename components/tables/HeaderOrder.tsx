import { Preview, EditNote, Mail } from '@mui/icons-material'

export default function HeaderOrder() {
  return (
    <div className='flex justify-between px-10'>
        <h1 className='text-negro-medio font-bold text-xl uppercase'>Datos de la orden de estudios:</h1>
        <div className='flex gap-6'>
            <div className='flex gap-2 text-negro-claro'>
                <Preview/>
                <p>Ver mas información.</p>
            </div>
            <div className='flex gap-2 text-negro-claro'>
                <EditNote/>
                <p>Editar Estado.</p>
            </div>
            <div className='flex gap-2 text-negro-claro'>
                <Mail/>
                <p>Enviar correo al paciente.</p>
            </div>
        </div>
    </div>
  )
}
