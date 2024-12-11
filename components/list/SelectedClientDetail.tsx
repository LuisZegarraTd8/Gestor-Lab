import { Client } from "@/src/types"
import ClientDetailItem from "./ClientDetailItem"
import { getDocTypeAbbr } from "@/src/services/clientService"

type ClientDetailsProps = {
    client: Client
}

export default function SelectedClientDetails({client} : ClientDetailsProps) {
 
    return (
        <div className="p-4 w-full divide-y-[1px] divide-gris-oscuro/30">
            <ClientDetailItem label="ID" data={client.id} />
            <ClientDetailItem label="Nombre" data={client.firstName} />
            <ClientDetailItem label="Apellido" data={client.lastName} />
            <ClientDetailItem label="Tipo de Documento" data={getDocTypeAbbr(client.personIdType)} />
            <ClientDetailItem label="Número de Documento" data={client.personId} />
            <ClientDetailItem label="Correo Electrónico" data={client.email} />
            <ClientDetailItem label="Número de Teléfono" data={client.phoneNumber} />
        </div>
    )
}
