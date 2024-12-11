import { Client, SearchDocFormData } from "@/src/types";
import clientsData from '../data/falseClients.json'
import { docTypes } from "../data";

// Para importar los datos de clientes
export function loadClients(): Client[] {
    return clientsData;
}

// Para filtrar los cliente por tipo y numero de documento
export function filterDocClients(clients: Client[], searchData: SearchDocFormData): Client[] {
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

//  Para reemplazar el valor por la abreviatura del documento
export function getDocTypeAbbr(value: string): string {
    const docType = docTypes.find((type) => type.value === value);
    return docType ? docType.abbr : value;
  }