import { Client, LabItem } from "@/src/types";
import { create } from "zustand";
import labItemsData from "./data/lab-oct-2024.json";
import BigNumber from "bignumber.js";
import { GridRowSelectionModel } from "@mui/x-data-grid";
import { loadClients } from "./services/clientService";

const labItemsJson = labItemsData.map((item, index) => {
    let price = item.price.replace('$', '').replace('.', '');
    const itemBn = new BigNumber(price);
    return {
        id: index,
        name: item.name,
        code: item.code,
        price: itemBn.toNumber(),
    } as LabItem;
});

interface OrderState {
    // State del Stepper
    activeStep: number;
    
    // States de Estudios
    selectedLabItems: LabItem[];
    totalAmountOrder: string;
    labItems: LabItem[];
    selectedRows: GridRowSelectionModel;
    
    // States de Clientes
    visibleSearchResult: boolean;
    visibleSelectedClient: boolean;
    
    allClients: Client[];
    foundClients: Client[];
    selectedClient: Client;
}

interface OrderActions {
    // Actions del Stepper
    setActiveStep: (newStep: number) => void;
    resetOrder: () => void;
    
    // Actions de Estudios
    saveSelectedItems: (list: LabItem[]) => void;
    saveTotalAmount: (value: string) => void;

    // Actions de Clientes
    showSearchResult: () => void;
    hideSearchResult: () => void;
    showSelectedClient: () => void;
    hideSelectedClient: () => void;
}

const initialState: OrderState = {
    // State del Stepper
    activeStep: 0,
    
  
    // States de Estudios
    selectedLabItems: [],
    totalAmountOrder: '',
    labItems: labItemsJson,
    selectedRows: [],
  
    // States de Clientes
    visibleSearchResult: false,
    visibleSelectedClient: false,

    allClients: loadClients(),
    foundClients: [],
    selectedClient: {
        id: '',
        firstName: '',
        lastName: '',
        personIdType: '',
        personId: '',
        externalId: '',
        booklyId: '',
        email: '',
        phoneNumber: '',
    },
  }

export const useOrderStore = create<OrderState & OrderActions>((set) => ({
    ...initialState,

    // Actions del Stepper
    // setActiveStep: (newStep) => set({ activeStep: newStep }),
    setActiveStep: (newStep) =>
         set ((state) => ({...state, activeStep: newStep })),
    
    resetOrder: () => {
        set(initialState)
    },


    // Actions de Estudios
    saveSelectedItems: (list) =>
        set((state) => ({...state, selectedLabItems: list })),

    saveTotalAmount: (value)  =>
        set((state) => ({...state, totalAmountOrder: value })),


    // Actions de Clientes
    hideNewClientForm: ()  =>
        set((state) => ({ ...state, visibleNewClientForm: false })),

    showSearchResult: ()  =>
        set((state) => ({ ...state, visibleSearchResult: true })),
    hideSearchResult: ()  =>
        set((state) => ({ ...state, visibleSearchResult: false })),

    showSelectedClient: ()  =>
        set((state) => ({ ...state, visibleSelectedClient: true })),
    hideSelectedClient: ()  =>
        set((state) => ({ ...state, visibleSelectedClient: false })),
    
}))
