import LabCalculator, {LabItem} from "../services/lab-calculator";
import {useEffect} from "react";
import {GridRowSelectionModel} from "@mui/x-data-grid";
import BigNumber from "bignumber.js";
import MathUtils from "../services/math-utils";
import LabMiniSummaryDesktop from '../tables/LabMiniSummaryDesktop';
import LabTableDesktop from "../tables/LabTableDesktop";
import TotalQuote from "../tables/TotalQuote";
import { Alert } from "@mui/material";
import { useOrderStore } from "@/src/store";


export default function SelectServiciesStep() {
    // Store de Zustand
    const selectedItems = useOrderStore((state) => state.selectedLabItems )
    const totalAmountOrder  = useOrderStore((state) => state.totalAmountOrder )
    const selectedRowModel  = useOrderStore((state) => state.selectedRows )
    const total = LabCalculator.getTotalAmount(selectedItems);
    const suggestedTotal = new BigNumber(MathUtils.roundToNearestHundred(total.toNumber()));
    

    useEffect(() => {
        useOrderStore.setState({ totalAmountOrder: suggestedTotal.toFormat(0) });
    }, [suggestedTotal]);
    
    
    const deleteSelectedRowSelectionModel = ( itemToDelete: LabItem ) => {
        useOrderStore.setState((state) => ({
            selectedRows: state.selectedRows.filter(selectedRow => Number(selectedRow)!== itemToDelete.id)
        }));
    };

    const deleteSelectedLabItem = (itemToDelete: LabItem) => {
        useOrderStore.setState((state) => ({
            selectedLabItems: state.selectedLabItems.filter(labItem => labItem.id !== itemToDelete.id)
        }));
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="mx-auto">
                <Alert variant="filled" severity="info" sx={{ backgroundColor:'#47A2BC', fontSize: 16, ...(window.innerWidth < 1280 && { fontSize: 15}) }}>
                    Por favor para continuar, realice la busqueda y seleccione los estudios que quiere cotizar. El total está redondeado sin centavos.
                </Alert>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-7 gap-5 min-h-[35rem] 2xl:min-h-[43rem]'>
                {/* Option Labs Table */}
                <div className="px-2 sm:px-6 py-4 xl:py-6 rounded-lg bg-neutral-100 flex flex-col justify-start gap-2 shadow-md lg:col-span-4">
                    <h2 className="text-center text-lg font-bold text-negro-claro uppercase py-2 border-b-4 border-gris-oscuro/30 h-fit">
                        Lista de Estudios de Laboratorio:
                    </h2>

                    <LabTableDesktop rowSelectionModel={selectedRowModel} />
                </div>

                {/* Selected Labs Table */}
                <div className="p-6 rounded-lg bg-neutral-100 flex flex-col justify-start gap-2 shadow-md lg:col-span-3">
                    <h2 className="text-center text-lg font-bold text-negro-claro uppercase py-2 border-b-4 border-gris-oscuro/30 h-fit">
                        Estudios seleccionados:
                    </h2>
                    
                    <div className="flex flex-col justify-between h-full">
                        <div className="px-4">
                            <LabMiniSummaryDesktop 
                                selectedLabItems = {selectedItems}
                                deleteSelectedLabItem={deleteSelectedLabItem}
                                deleteSelectedRowSelectionModel={deleteSelectedRowSelectionModel}/>
                        </div>
                        
                        <TotalQuote description={'Total de los Estudios:'} total={totalAmountOrder}/> 
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
