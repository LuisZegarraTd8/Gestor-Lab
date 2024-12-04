import SelectedServiciesTable from "../tables/SelectedServiciesTable";
import { Alert } from "@mui/material";
import TotalQuote from "../tables/TotalQuote";
import { useOrderStore } from "@/src/store";
import OptionsClient from "../forms/OptionsClient";
import ClientForm from "../forms/ClientForm";
import SearchDocForm from "../forms/SearchDocForm";
import ClientsList from "../list/ClientsList";
import SelectedClientDetails from "../list/SelectedClientDetail";

export default function SelectPatientStep() {
  // Store de Zustand
  const selectedItems = useOrderStore( (state) => state.selectedLabItems )
  const totalAmountOrder  = useOrderStore( (state) => state.totalAmountOrder )
  const selectedClient = useOrderStore( (state) => state.selectedClient )
  const { visibleOptionsClient, visibleNewClientForm, visibleSearchClientForm, visibleSearchResult, visibleSelectedClient } = useOrderStore()

  return (
    <div className="flex flex-col gap-5">
      <div className="mx-auto">
        <Alert variant="filled" severity="info" sx={{ backgroundColor:'#47A2BC'}}>
          Por favor para continuar, busque al cliente o registre uno nuevo sino se encuentra en la base de datos. Completar todos los campos obligatorios del formulario de registro.
        </Alert>
      </div>

      <div className='flex flex-col lg:flex-row justify-center lg:min-h-[32rem] gap-6 w-full'>
        <div className="p-4 rounded-lg bg-stone-100 w-[41rem] lg:w-full shadow-md flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-3 w-full">

            {visibleOptionsClient && (
              <OptionsClient/>
            )}
            
            {visibleNewClientForm && (
              <ClientForm/>
            )}

            {visibleSearchClientForm && (
              <SearchDocForm/>
            )}

            {visibleSearchResult && (
              <ClientsList/>
            )}

            {visibleSelectedClient && (
              <SelectedClientDetails client={selectedClient} />
            )}

          </div>
        </div>

        <div className="p-4 rounded-lg bg-stone-100 min-w-[33rem] flex flex-col justify-between shadow-md">
          <SelectedServiciesTable selectedLabItems = {selectedItems}/>

          <TotalQuote description={'Total de los Estudios:'} total={totalAmountOrder}/>
        </div>
      </div>
    </div>
  )
}


