'use client'
import BlueButton from "@/components/buttons/BlueButton";
import { docTypes } from "@/data";
import { MenuItem, TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { SearchDocFormSchema } from "@/schema";
import { SearchDocFormData } from "@/types";
import { useOrderStore } from "@/src/store";


export default function SearchDocForm() {

    const { showSearchResult } = useOrderStore()

    const { register, control, handleSubmit, formState: { errors} } = useForm<SearchDocFormData>({
        resolver: zodResolver(SearchDocFormSchema)
    });
    
    const onSubmit: SubmitHandler<SearchDocFormData> = (data) => {
        console.log("Buscando al cliente...",data);
        
        showSearchResult();
    };
    

    return (
        <form onSubmit={handleSubmit(onSubmit)} 
            className="max-w-2xl w-full grid grid-cols-1 sm:grid-cols-12 items-start gap-x-4">
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

            {/* Boton de Búsqueda */}
            <div className="col-span-full sm:col-span-4 pt-5">
                <BlueButton type="submit" fullWidth >Buscar Cliente</BlueButton>
            </div>
        </form>

    )
}