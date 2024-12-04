import BlueButton from '../buttons/BlueButton'
import { useOrderStore } from "@/src/store";


export default function OptionsClient() {
    const { hideOptionClient, showNewClientForm, showSearchClientForm } = useOrderStore()

    function goToNewClientForm () {
        hideOptionClient();
        showNewClientForm();
    }

    function goToSearchClientForm () {
        hideOptionClient();
        showSearchClientForm();
    }

  return (
    <div className='flex flex-col justify-center items-center gap-3 px-10 divide-y-[3px] divide-gris-oscuro/30"'>
        <h2 className="text-center text-xl font-bold text-negro-medio uppercase">Elegir Cliente</h2>

        <div className='flex flex-col justify-center items-center gap-2 py-6'>
            <h3 className='font-semibold text-xl text-stone-700 underline'>Buscar Cliente</h3>
            <p className='text-center text-base text-stone-700'>Ingrese el nombre o número de identificación del cliente para buscar su registro en la base de datos.</p>
            <BlueButton onClick={goToSearchClientForm}>Ir a Buscar Cliente</BlueButton>
        </div>

        <div className='flex flex-col justify-center items-center gap-2 py-6'>
            <h3 className='font-semibold text-xl text-stone-700 underline'>Registrar Nuevo Cliente</h3>
            <p className='text-center text-base text-stone-700'>Crear un nuevo registro de cliente proporcionando su información personal.</p>
            <BlueButton onClick={goToNewClientForm}>Ir a Registrar Nuevo Cliente</BlueButton>
        </div>
    </div>
  )
}
