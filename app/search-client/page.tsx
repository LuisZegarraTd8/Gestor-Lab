'use client'
import { Alert } from '@mui/material';
import BlueButton from '@/components/buttons/BlueButton';
import ClientTable from '@/components/tables/ClientTable';
import GreyButton from '@/components/buttons/GreyButton';
import EditClientTable from '@/components/tables/EditClientTable';
import { useState } from 'react';
import ClientForm from '@/components/forms/ClientForm';
import SearchClientForm from '@/components/forms/SearchClientForm';
import { loadClients } from '@/src/services/clientService';

const TABLE_VIEW = 0;
const REGISTER_VIEW = 1;
const SEARCH_VIEW = 2;

export default function SearchClient() {

  const [componentView, setComponentView] = useState(TABLE_VIEW);

  const handleAddClient = () => {
    setComponentView(REGISTER_VIEW);
  };
  
  const handleSearchClient = () => {
    setComponentView(SEARCH_VIEW);
  };
  
  const handleClientTable = () => {
    setComponentView(TABLE_VIEW);
  };


  return (
    <div className="max-w-7xl flex flex-col mx-auto gap-5 h-auto">
      <div className="mx-auto">
        <Alert variant="filled" severity="info" sx={{ backgroundColor:'#3397b3' }}>
          Aquí podrás encontrar a todos los clientes de laboratorio y filtrar si se necesita buscar a un cliente en especifico. Pronto se podrás editar su información de contacto.
        </Alert>
      </div>

      <div className='bg-neutral-100 w-full p-6 rounded-lg flex flex-col h-full'>
        {/* Tabla de clientes */}
        {componentView === TABLE_VIEW &&
        <>
          <div className=' flex flex-row justify-between items-end border-b-4 border-gris-oscuro/30 h-fit px-8 pb-3'>
            <h3 className="text-xl font-bold text-negro-claro uppercase">
              Lista de Clientes:
            </h3>

            <div className='flex gap-4 flex-wrap'>
              <BlueButton onClick={() => loadClients()}>Limpiar Filtros</BlueButton>
              <GreyButton onClick={handleAddClient}>Agregar Cliente</GreyButton>
              <GreyButton onClick={handleSearchClient}>Buscar Cliente</GreyButton>
            </div>
          </div>
          <div className='p-3'>
            {/* <ClientTable/> */}
            <EditClientTable/>
          </div>
        </>
        }

        {/* Formulario para agregar un cliente */}
        {componentView === REGISTER_VIEW &&
        <>
          <div className=' flex flex-row justify-between items-end border-b-4 border-gris-oscuro/30 h-fit px-8 pb-3'>
            <h3 className="text-xl font-bold text-negro-claro uppercase">
              Formulario de Nuevo Cliente:
            </h3>

            <div className='flex gap-4'>
              <GreyButton onClick={handleSearchClient}>Buscar Cliente</GreyButton>
              <BlueButton onClick={handleClientTable}>Volver a la tabla</BlueButton>
            </div>
          </div>
          <div className='p-3 mx-auto'>
            <ClientForm/>
          </div>
        </>
        }
        
        {/* Formulario para buscar un cliente */}
        {componentView === SEARCH_VIEW &&
        <>
          <div className=' flex flex-row justify-between items-end border-b-4 border-gris-oscuro/30 h-fit px-8 pb-3'>
            <h3 className="text-xl font-bold text-negro-claro uppercase">
              Buscar Cliente mediante:
            </h3>

            <div className='flex gap-4'>
              <GreyButton onClick={handleAddClient}>Agregar Cliente</GreyButton>
              <BlueButton onClick={handleClientTable}>Volver a la tabla</BlueButton>
            </div>
          </div>
          <div className='p-3 mx-auto'>
            <SearchClientForm/>
          </div>
        </>
        }
      </div>
    </div>
  )
}
