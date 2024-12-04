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
        <div className="flex flex-col gap-5">
            <div className="mx-auto">
                <Alert variant="filled" severity="info" sx={{ backgroundColor:'#47A2BC'}}>
                    Por favor para continuar, realice la busqueda y seleccione los estudios que quiere cotizar. El total está redondeado sin centavos.
                </Alert>
            </div>

            <div className='flex flex-col lg:flex-row justify-center lg:min-h-[32rem] gap-6 w-full'>
                <div className="p-4 rounded-lg bg-stone-100 w-fit lg:w-[45.5rem] shadow-md mx-auto flex justify-center">
                    <LabTableDesktop
                        rowSelectionModel={selectedRowModel}
                    />
                </div>

                <div className="p-4 rounded-lg bg-stone-100 w-[41rem] lg:w-auto mx-auto lg:min-w-[33rem] flex flex-col justify-between shadow-md">
                    <LabMiniSummaryDesktop 
                        selectedLabItems = {selectedItems}
                        deleteSelectedLabItem={deleteSelectedLabItem}
                        deleteSelectedRowSelectionModel={deleteSelectedRowSelectionModel}/>
                    
                    <TotalQuote description={'Total de los Estudios:'} total={totalAmountOrder}/>
                </div>
            </div>
        </div>
    )
}
