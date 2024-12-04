import { useOrderStore } from "@/src/store"
import ClientDetails from "./ClientDetails"

export default function ClientsList() {

    const clients = useOrderStore((state) => state.foundClients)
    
    return (
        <div className="w-full  overflow-y-scroll">
            {clients.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado de Clientes</h2>
                    {clients.map( client => (
                        <ClientDetails
                            key={client.id}
                            client={client}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2 className="font-bold text-xl text-center text-stone-700 uppercase">No hay clientes</h2>
                    <p className="text-lg mt-5 mb-10 text-center">
                        Comienza buscando clientes {''}
                        <span className="text-stone-700 font-bold">y aparecerán en este lugar</span>
                    </p>
                </>
            )}
        </div>
    )
}
