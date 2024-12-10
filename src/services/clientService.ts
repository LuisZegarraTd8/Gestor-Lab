import { Client, SearchDocFormData } from "@/src/types";
import clientsData from '../data/falseClients.json'

// Para importar los datos de clientes
export function loadClients(): Client[] {
    return clientsData;
}

// Para filtrar los cliente por tipo y numero de documento
export function filterClients(clients: Client[], searchData: SearchDocFormData): Client[] {
  const { personIdType, personId } = searchData;
  console.log(`Tipo de Documento: "${personIdType}", Número de Documento: "${personId}"`);
  console.log(`Tipo de Documento: "${Boolean(personIdType.trim())}", Número de Documento: "${Boolean(personId)}"`);
  

  return clients.filter((client) => {
    // Por tipo y numero de documento
    if (personIdType.trim() && personId) {
      return (
        client.personIdType === personIdType && client.personId === personId
      );
    }
    // Solo por numero de documento
    if (personId) {
      return client.personId === personId;
    }
  });
}