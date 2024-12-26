import { Client, reponseMeta, SearchDocFormData } from "../types";


interface ClientSearchResponse {
    data: Client[];
    meta: reponseMeta;
}
  

export default class ClientFacade {
    private apiUrl: string;
  
    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }


    // Funcion para buscar un cliente por ID
    async getClientById(id: string): Promise<Client | null> {
        try {
            const response = await fetch(`${this.apiUrl}/clients/${id}`, {
                method: "GET",
                redirect: "follow",
            })

            if (!response.ok) {
                console.error(`Error al obtener el cliente: ${response.status} ${response.statusText}`);
                return null;
            }

            const data = await response.json() as Client;
            console.log('Cliente:', data);
            return data;

        } catch (error) {
            console.error(`Error al obtener el cliente:: ${error}`);
            return null;
        }
    }


    // Funcion para buscar varios clientes.
    async getClients(
        page: number = 1,
        pageSize: number = 10
    ): Promise<ClientSearchResponse> {

        try {
            const response = await fetch(
                `${this.apiUrl}/clients?page=${page}&take=${pageSize}`,
                {
                    method: "GET",
                    redirect: "follow",
                });

            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const result = await response.json();
            const data = result.data;
            const meta = result.meta;
            return { data, meta };
            
        } catch (error) {
            alert(`Error al obtener los clientes: ${error}`);
            const meta = {
                hasNextPage: false, hasPreviousPage: false,
                itemCount: 0, page: page.toString(),
                pageCount: 0, take: pageSize.toString()
            };
            return { data: [], meta };
        }
    };


    // Funcion para buscar varios clientes por tipo y número de documento.
    async getClientsByDoc(
        dataForm: SearchDocFormData,
        page: number = 1,
        pageSize: number = 10
    ): Promise<ClientSearchResponse> {

        let queryParams = '';

        // Construya los parámetros de consulta en función a los parametros dados
        if (dataForm.personIdType?.trim()) {
            queryParams += `personIdType=${dataForm.personIdType}&`;
        }
        if (dataForm.personId?.trim()) {
            queryParams += `personId=${dataForm.personId}&`;
        }

        try {
            const response = await fetch(
                `${this.apiUrl}/clients?${queryParams}&page=${page}&take=${pageSize}`,
                {
                    method: "GET",
                    redirect: "follow",
                });

            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const result = await response.json();
            const data = result.data;
            const meta = result.meta;
            return { data, meta };
            
        } catch (error) {
            alert(`Error al obtener los clientes: ${error}`);
            const meta = {
                hasNextPage: false, hasPreviousPage: false,
                itemCount: 0, page: page.toString(),
                pageCount: 0, take: pageSize.toString()
            };
            return { data: [], meta };
        }
    };


    // Funcion para buscar varios clientes por el nombre.
    async getClientsByFirstName(
        firstName: string,
        page: number = 1,
        pageSize: number = 10
    ): Promise<ClientSearchResponse> {

        let queryParams = '';

        // Construya los parámetros de consulta en función a los parametros dados
        if (firstName?.trim()) {
            queryParams += `firstName=${firstName}&`;
        }

        try {
            const response = await fetch(
                `${this.apiUrl}/clients?${queryParams}&page=${page}&take=${pageSize}`,
                {
                    method: "GET",
                    redirect: "follow",
                });

            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const result = await response.json();
            const data = result.data;
            const meta = result.meta;
            return { data, meta };
            
        } catch (error) {
            alert(`Error al obtener los clientes: ${error}`);
            const meta = {
                hasNextPage: false, hasPreviousPage: false,
                itemCount: 0, page: page.toString(),
                pageCount: 0, take: pageSize.toString()
            };
            return { data: [], meta };
        }
    };


    // Funcion para buscar varios clientes por el apellido.
    async getClientsByLastName(
        lastName: string,
        page: number = 1,
        pageSize: number = 10
    ): Promise<ClientSearchResponse> {

        let queryParams = '';

        // Construya los parámetros de consulta en función a los parametros dados
        if (lastName?.trim()) {
            queryParams += `lastName=${lastName}&`;
        }

        try {
            const response = await fetch(
                `${this.apiUrl}/clients?${queryParams}&page=${page}&take=${pageSize}`,
                {
                    method: "GET",
                    redirect: "follow",
                });

            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const result = await response.json();
            const data = result.data;
            const meta = result.meta;
            return { data, meta };
            
        } catch (error) {
            alert(`Error al obtener los clientes: ${error}`);
            const meta = {
                hasNextPage: false, hasPreviousPage: false,
                itemCount: 0, page: page.toString(),
                pageCount: 0, take: pageSize.toString()
            };
            return { data: [], meta };
        }
    };
    
    
    // Funcion para agregar un nuevo cliente
    async createClient(clientData: Client): Promise<string | null> {
        try {
            // Crear el cliente
            const raw = JSON.stringify(clientData);

            const response = await fetch(`${this.apiUrl}/clients`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: raw,
                redirect: "follow",
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`${response.status} ${response.statusText} - ${errorData.message}`);
            }

            const data = await response.json();

            return data.id;

        } catch (error) {
            alert(`Error al crear el cliente: ${error}`);
            return null;
        }
    };
};

