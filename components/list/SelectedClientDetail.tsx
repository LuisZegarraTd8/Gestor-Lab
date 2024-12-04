import { Client } from "@/types"
import ClientDetailItem from "./ClientDetailItem"
import { useOrderStore } from "@/src/store"
import GreyButton from "../buttons/GreyButton"
import BlueButton from "../buttons/BlueButton"

type ClientDetailsProps = {
    client: Client
}

export default function SelectedClientDetails({client} : ClientDetailsProps) {

    // const getPatientById = useOrderStore((state) => state.getClientById)

    const handleClick = () => {
        console.log("editando")
    }
        
    return (
        <div className="p-8 bg-gray-100 w-full h-fit rounded-lg flex flex-col gap-3 divide-y-[3px] divide-gris-oscuro/30">
            <h2 className="text-center text-xl font-bold text-negro-claro uppercase">
                Datos del Cliente seleccionado:
            </h2>

            <div className="py-4 bg-gray-100 w-full h-fit flex flex-col divide-y-[1px] divide-gris-oscuro/30">
                <ClientDetailItem label="ID" data={client.id} />
                <ClientDetailItem label="Nombre" data={client.firstName} />
                <ClientDetailItem label="Apellido" data={client.lastName} />
                <ClientDetailItem label="Tipo de Documento" data={client.personIdType} />
                <ClientDetailItem label="Número de Documento" data={client.personId} />
                <ClientDetailItem label="Email" data={client.email} />
                <ClientDetailItem label="Número de Teléfono" data={client.phoneNumber} />
            </div>

            <div className="flex flex-col lg:flex-row gap-3 justify-center pt-4">
                <BlueButton onClick={handleClick}>
                    Editar Cliente
                </BlueButton>

                <GreyButton>
                    Reiniciar selección de cliente
                </GreyButton>
            </div>
        </div>
    )
}
