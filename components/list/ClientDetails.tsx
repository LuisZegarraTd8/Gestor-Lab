import { Client } from "@/types"
import ClientDetailItem from "./ClientDetailItem"
import { useOrderStore } from "@/src/store"
import GreyButton from "../buttons/GreyButton"
import BlueButton from "../buttons/BlueButton"

type ClientDetailsProps = {
    client: Client
}

export default function ClientDetails({client} : ClientDetailsProps) {

    // const getClientById = useOrderStore((state) => state.getClientById)

    const handleClick = () => {
        console.log("hola")
    }
        
    return (
        <div className="mx-5 my-6 px-4 py-6 bg-white shadow-md rounded-xl">
            <ClientDetailItem label="ID" data={client.id} />
            <ClientDetailItem label="Nombre" data={client.firstName} />
            <ClientDetailItem label="Apellido" data={client.lastName} />
            <ClientDetailItem label="Tipo de Documento" data={client.personIdType} />
            <ClientDetailItem label="Número de Documento" data={client.personId} />
            <ClientDetailItem label="Email" data={client.email} />
            <ClientDetailItem label="Número de Teléfono" data={client.phoneNumber} />

            <div className="flex flex-col lg:flex-row gap-3 justify-center mt-6">
                {/* <GreyButton
                    onClick={() => getClientById(client.id)}
                >Editar Cliente</GreyButton> */}

                <BlueButton onClick={handleClick}>
                    Seleccionar Cliente
                </BlueButton>
            </div>
        </div>
    )
}
