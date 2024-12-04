import {
    DataGrid, GridColDef, GridRowSelectionModel, GridToolbar,
    GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport,
    GridToolbarQuickFilter
} from '@mui/x-data-grid';
import LabCalculator, { LabItem } from '../services/lab-calculator';
import { Box } from '@mui/material';
import { useOrderStore } from "@/src/store";


function CustomToolbar() {
        return (
        <GridToolbarContainer>
            <GridToolbarDensitySelector 
            slotProps={{ tooltip: { title: 'Cambiar densidad' } }} 
            />
            <GridToolbarExport 
            slotProps={{ tooltip: { title: 'Exportar datos' } }} 
            />
            <Box sx={{ flexGrow: 1 }} />
            <GridToolbarQuickFilter /> {/* Agrega la barra de búsqueda */}
        </GridToolbarContainer>
        );
    }

const columns: GridColDef[] = [
  {
    field: 'code',
    headerName: 'Abreviatura',
    maxWidth: 110,
    minWidth: 110,
    flex: 1,
    editable: false,
    disableColumnMenu: true,
  },
  {
    field: 'name',
    headerName: 'Estudio de Laboratorio',
    maxWidth:416,
    minWidth: 380,
    flex: 1,
    editable: false,
    disableColumnMenu: true,
  },
  {
    field: 'price',
    headerName: 'Precio',
    type: 'number',
    maxWidth: 110,
    minWidth: 110,
    flex: 1,
    editable: false,
    disableColumnMenu: true,
  },
];

type LabTableInputParams = {
    rowSelectionModel: GridRowSelectionModel,
}
export default function LabTableDesktop( { rowSelectionModel }: LabTableInputParams ) {

    return (
        <div className='min-w-fit h-fit'>
            <DataGrid
                sx={{border: 'none',
                    width: '100%',
                    '& .container--top': {
                        background: 'none',
                    },
                    '& .MuiDataGrid-container--top [role=row]': {
                        backgroundColor: '#e7e5e4',
                        borderBottomWidth: 2,
                        borderBottomColor: '#BFBFBF',
                        borderTopRightRadius: 6,
                        borderTopLeftRadius: 6, 
                    },
                    '& .MuiDataGrid-columnHeaderTitle': {
                        // backgroundColor: '#7BF3A4',
                        fontWeight: 700,
                    },
                    '& .MuiDataGrid-toolbarContainer': {
                        marginBottom: '8px',
                    },
                    '& .MuiDataGrid-overlayWrapper':{
                        backgroundColor: 'red',
                        height: 100,
                    },
                    '& .MuiInput-underline:before': {
                        borderBottomWidth: 2,
                        borderBottomColor: '#BFBFBF', 
                    },               
                }}

                rows={LabCalculator.getCurrentLabItems()}
                

                onRowSelectionModelChange={(ids) => {
                    const selectedIDs = new Set(ids);
                    const selectedRowData: LabItem[] = LabCalculator.getCurrentLabItems().filter(labItem => selectedIDs.has(labItem.id));
                    useOrderStore.setState({ selectedLabItems: selectedRowData });
                    useOrderStore.setState({ selectedRows: ids})
                }}
                autosizeOnMount= {true}
                columns={columns}
                rowSelectionModel={rowSelectionModel}
                keepNonExistentRowsSelected
                initialState={{
                    pagination: { paginationModel: { pageSize: 6 } },
                }}
                pageSizeOptions={[4, 6, 8, { value: -1, label: 'All' }]}
                checkboxSelection
                slots={{
                    toolbar: CustomToolbar
                }}
                localeText={{
                    toolbarDensity: 'Densidad',
                    toolbarExport: 'Exportar',
                    toolbarQuickFilterPlaceholder: 'Buscar',

                    toolbarDensityCompact: 'Compacto',
                    toolbarDensityStandard: 'Estándar',
                    toolbarDensityComfortable: 'Cómodo',
                    toolbarExportCSV: 'Exportar como CSV',
                    toolbarExportPrint: 'Imprimir',
                    noResultsOverlayLabel: 'No se encotraron resultados.',
                    MuiTablePagination: {
                        labelDisplayedRows: ({ from, to, count }) =>
                          `${from} - ${to} de ${count === -1 ? `más que ${to}` : count}`,
                        labelRowsPerPage: 'Filas por Página',
                    },
                    footerRowSelected: (count) =>
                        count !== 1
                            ? `${count.toLocaleString()} estudios seleccionados`
                            : `${count.toLocaleString()} estudio seleccionado`,
                }}
            />
        </div>
    );
}
