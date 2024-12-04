'use client'
import BlueButton from "@/components/buttons/BlueButton";
import { docTypes } from "@/data";
import { MenuItem, TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { SearchDocFormSchema } from "@/schema";
import { SearchDocFormData } from "@/types";
import { useOrderStore } from "@/src/store";
import GreyButton from "../buttons/GreyButton";

export default function SearchDocForm() {

    const { showOptionClient, showSearchResult, showSelectedClient, hideSearchClientForm } = useOrderStore()

    const { register, control, handleSubmit, formState: { errors} } = useForm<SearchDocFormData>({
        resolver: zodResolver(SearchDocFormSchema)
    });
    
    const onSubmit: SubmitHandler<SearchDocFormData> = (data) => {
        console.log("Buscando al cliente...",data);
        showSearchResult();
    };

    function goToOptionClient () {
        hideSearchClientForm();
        showOptionClient();
    }
    
    return (
        <div className="p-8 bg-gray-100 w-11/12 sm:w-fit h-fit rounded-lg flex flex-col gap-3 divide-y-[3px] divide-gris-oscuro/30">
            <h1 className="text-center text-xl font-bold text-negro-claro uppercase">
                Formulario para Buscar Cliente
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} 
                className="max-w-2xl w-full sm:min-w-[34rem] grid grid-cols-1 sm:grid-cols-8 gap-x-3 py-6 content-between min-h-20 pt-4 px-1 sm:px-5">
                {/* Tipo y Número de Documento */}
                <div className="sm:col-span-3">
                    <Controller
                        name="personIdType"
                        control={control}
                        defaultValue={docTypes.length > 0 ? docTypes[0].value : ''}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                select
                                label="Tipo de Documento"
                                fullWidth
                                margin="normal"
                            >
                                {docTypes.map((type) => (
                                    <MenuItem key={type.name} value={type.value}>{type.abbr}</MenuItem>
                                ))}
                                <MenuItem key='No Especificar' value=' '>No Especificar</MenuItem>
                            </TextField>
                        )}
                    />
                </div>

                <div className="sm:col-span-5">
                    <TextField
                        {...register('personId')}
                        label="Número de Documento"
                        fullWidth
                        margin="normal"
                        error={!!errors.personId}
                        helperText={errors.personId?.message}
                    />
                </div>

                {/* Boton de Registro */}
                <div className="sm:col-span-full mt-3">
                    <BlueButton type="submit" fullWidth >Buscar Cliente</BlueButton>
                </div>
            </form>
            
            <div className="pt-4 flex justify-center w-full">
                <GreyButton onClick={goToOptionClient} >Volver a las opciones de cliente</GreyButton>
            </div>
        </div>
    )
}