'use client'
import React, { useState } from 'react';
import {
    FormControl, RadioGroup, FormControlLabel,
    Radio, TextField, Button,
    MenuItem, 
} from '@mui/material';
import BlueButton from "@/components/buttons/BlueButton";
import { docTypes } from '@/src/data';
import GreyButton from '../buttons/GreyButton';



export default function SearchClientForm() {
    const [searchType, setSearchType] = useState('id');
    const [searchValues, setSearchValues] = useState({
        id: '',
        personIdType: '',
        personId: '',
        firstName: '',
        lastName: '',
    });

    const handleClearForm = () => {
        setSearchValues({
            id: '',
            personIdType: '',
            personId: '',
            firstName: '',
            lastName: '',
        });
    };

    const handleSearchTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchType(event.target.value);
    };

    const handleSearchValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setSearchValues({
          ...searchValues,
          [name]: value,
        });
      };

    const handleSearchForID = () => {
        // Aquí puedes agregar la lógica para realizar la búsqueda
        console.log('Buscando por ID:', searchValues.id);

    };
    const handleSearchForDoc = () => {
        // Aquí puedes agregar la lógica para realizar la búsqueda
        console.log('Buscando por Documento:', searchValues.personIdType, searchValues.personId);
    };

    const handleSearchForFisrtName = () => {
        // Aquí puedes agregar la lógica para realizar la búsqueda
        console.log('Buscando por Nombre:', searchValues.firstName);
    };

    const handleSearchForLastName = () => {
        // Aquí puedes agregar la lógica para realizar la búsqueda
        console.log('Buscando por Apellido', searchValues.lastName);
    };

    return (
        <div className="p-8 bg-gray-100 w-11/12 lg:w-[60rem] h-fit rounded-lg">
            <div className='flex flex-col gap-3 divide-y-[3px] divide-gris-oscuro/30 w-full'>
                <h1 className="text-center text-xl font-bold text-negro-medio uppercase">
                    Búsqueda de Cliente mediante
                </h1>
                
                <div className='pt-4 px-1 sm:px-5 w-full'>
                    <FormControl fullWidth>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={searchType}
                            onChange={handleSearchTypeChange}
                        >
                            <div className='grid grid-cols-1 sm:grid-cols-9 items-center gap-x-4 sm:gap-y-4 mb-4'>
                                {/* Búsqueda por ID */}
                                <div className='pt-2 sm:col-span-2'>
                                    <FormControlLabel value="id" control={<Radio />} label="ID del Cliente" />
                                </div>
                                <div className='sm:col-span-5'>
                                    <TextField
                                        disabled={searchType !== 'id'}
                                        label="ID del Cliente"
                                        fullWidth
                                        margin="normal"
                                        name='id'
                                        value={searchValues.id}
                                        onChange={handleSearchValueChange}
                                    />
                                </div>
                                <div className='pt-2 sm:col-span-2 mb-6 sm:mb-0'>
                                    <BlueButton disabled={searchType !== 'id'} onClick={handleSearchForID} fullWidth>
                                        Buscar
                                    </BlueButton>
                                </div>
                               
                                {/* Búsqueda por Documento */}
                                <div className='pt-2 sm:col-span-2'>
                                    <FormControlLabel value="document" control={<Radio />} label="Documento del Cliente" />
                                </div>
                                <div className='sm:col-span-2'>
                                    <TextField
                                        disabled={searchType !== 'document'}
                                        label="Tipo de Documento"
                                        fullWidth
                                        margin="normal"
                                        name="personIdType"
                                        defaultValue={docTypes.length > 0 ? docTypes[0].value : ''}
                                        onChange={handleSearchValueChange}
                                        select
                                    >
                                        {docTypes.map((type) => (
                                            <MenuItem key={type.name} value={type.value}>{type.abbr}</MenuItem>
                                        ))}
                                        <MenuItem key='No Especificar' value=' '>No Especificar</MenuItem>
                                    </TextField>
                                </div>
                                <div className='sm:col-span-3'>
                                    <TextField
                                        disabled={searchType !== 'document'}
                                        label="Número de Documento"
                                        fullWidth
                                        margin="normal"
                                        name='personId'
                                        value={searchValues.personId}
                                        onChange={handleSearchValueChange}
                                    />
                                </div>
                                <div className='pt-2 sm:col-span-2 mb-6 sm:mb-0'>
                                    <BlueButton disabled={searchType !== 'document'} onClick={handleSearchForDoc} fullWidth>
                                        Buscar
                                    </BlueButton>
                                </div>

                                {/* Búsqueda por Nombre */}
                                <div className='pt-2 sm:col-span-2'>
                                    <FormControlLabel value="firstName" control={<Radio />} label="Nombre del Cliente" />
                                </div>
                                <div className='sm:col-span-5'>
                                    <TextField
                                        disabled={searchType !== 'firstName'}
                                        label="Nombre del Cliente"
                                        fullWidth
                                        margin="normal"
                                        name='firstName'
                                        value={searchValues.firstName}
                                        onChange={handleSearchValueChange}
                                    />
                                </div>
                                <div className='pt-2 sm:col-span-2 mb-6 sm:mb-0'>
                                    <BlueButton disabled={searchType !== 'firstName'} onClick={handleSearchForFisrtName} fullWidth>
                                        Buscar
                                    </BlueButton>
                                </div>
                                
                                {/* Búsqueda por Apellido */}
                                <div className='pt-2 sm:col-span-2'>
                                    <FormControlLabel value="lastName" control={<Radio />} label="Apellido del Cliente" />
                                </div>
                                <div className='sm:col-span-5'>
                                    <TextField
                                        disabled={searchType !== 'lastName'}
                                        label="Apellido del Cliente"
                                        fullWidth
                                        margin="normal"
                                        name='lastName'
                                        value={searchValues.lastName}
                                        onChange={handleSearchValueChange}
                                    />
                                </div>
                                <div className='pt-2 sm:col-span-2 mb-6 sm:mb-0'>
                                    <BlueButton disabled={searchType !== 'lastName'} onClick={handleSearchForLastName} fullWidth>
                                        Buscar
                                    </BlueButton>
                                </div>
                            </div>
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className='flex flex-col md:flex-row gap-3 p-4 pb-0'>
                    <GreyButton onClick={handleClearForm} fullWidth>Borrar</GreyButton>
                    <BlueButton onClick={handleClearForm} fullWidth>Ver todos los pacientes</BlueButton>
                </div>
            </div>
        </div>
    );
}