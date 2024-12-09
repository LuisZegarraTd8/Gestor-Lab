import { Client, LabItem } from "@/types";
import { create } from "zustand";
import labItemsData from "@/data/lab-oct-2024.json";
import BigNumber from "bignumber.js";
import { GridRowSelectionModel } from "@mui/x-data-grid";

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

interface OrderStore {
    // States de Estudios
    selectedLabItems: LabItem[];
    totalAmountOrder: string;
    labItems: LabItem[];
    selectedRows: GridRowSelectionModel;

    // States de Clientes
    visibleSearchClientForm: boolean;
    visibleNewClientForm: boolean;
    visibleSearchResult: boolean;
    visibleSelectedClient: boolean;
    
    foundClients: Client[];
    selectedClient: Client;

    // Actions de Estudios
    saveSelectedItems: (list: LabItem[]) => void;
    saveTotalAmount: (value: string) => void;

    // Actions de Clientes
    showSearchClientForm: () => void;
    hideSearchClientForm: () => void;
    showNewClientForm: () => void;
    hideNewClientForm: () => void;
    showSearchResult: () => void;
    hideSearchResult: () => void;
    showSelectedClient: () => void;
    hideSelectedClient: () => void;
}

export const useOrderStore = create<OrderStore>((set) => ({
    // States de Estudios
    selectedLabItems: [],
    totalAmountOrder: '',
    labItems: labItemsJson,
    selectedRows: [],

    // States de Clientes
    visibleSearchClientForm: true,
    visibleNewClientForm: false,
    visibleSearchResult: false,
    visibleSelectedClient: false,
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

    // Actions de Estudios
    saveSelectedItems: (list) =>
        set((state) => ({...state, selectedLabItems: list})),

    saveTotalAmount: (value)  =>
        set((state) => ({...state, totalAmountOrder: value})),


    // Actions de Clientes
    showSearchClientForm: ()  =>
        set((state) => ({ ...state, visibleSearchClientForm: true })),
    hideSearchClientForm: ()  =>
        set((state) => ({ ...state, visibleSearchClientForm: false })),

    showNewClientForm: ()  =>
        set((state) => ({ ...state, visibleNewClientForm: true })),
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

// export interface Post {
//   id: number;
//   title: string;
//   body: string;
// }

// interface CounterState {
//   count: number;
//   title: string;
//   posts: Post[];
//   increment: (value: number) => void;
//   getPosts: () => Promise<void>;
//   multiply: (value: number) => void;
// }
// export const useCounterStore = create<CounterState>((set, get) => ({
//   title: "Some title",
//   count: 10,
//   posts: [],
//   increment: (value: number) =>
//     set((state) => ({ ...state, count: state.count + value })),

//   getPosts: async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//     const posts: Post[] = await response.json();
//     // const posts = await (
//     //   await fetch("https://jsonplaceholder.typicode.com/posts")
//     // ).json();
//     set((state) => ({ ...state, posts }));
//   },

//   multiply: (value: number) => {
//     // const count = get().count
//     const { count } = get();
//     set({ count: count * value });
//   },
// }));