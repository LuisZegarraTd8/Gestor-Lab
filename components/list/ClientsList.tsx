import { useOrderStore } from "@/src/store"
import ClientDetails from "./ClientDetails"
import BlueButton from "../buttons/BlueButton";
import ClientForm from "../forms/ClientForm";

export default function ClientsList() {

    const clients = useOrderStore((state) => state.foundClients)
    const { showNewClientForm, hideSearchResult } = useOrderStore()

    function goToNewClientForm () {
        hideSearchResult();
        showNewClientForm();
    }
    
    return (
        <>
            {clients.length ? (
                <div  className="w-full  overflow-y-scroll">
                    <h3 className="font-black text-3xl text-center border-b-2 border-gris-oscuro/30 h-fit w-11/12">Listado de Clientes</h3>
                    {clients.map( client => (
                        <ClientDetails
                            key={client.id}
                            client={client}
                        />
                    ))}
                </div>
            ) : (
                <>
                    <p className='text-center text-base 2xl:text-lg text-stone-700'>
                        No se encontraron clientes con esos parametros de busqueda. Por favor, complete el formulario para registra al cliente.
                    </p>

                    <ClientForm/>
                </>
            )}
        </>
    )
}
