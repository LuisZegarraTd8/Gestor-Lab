'use client'
import React, { useEffect, useState } from 'react';
import { Stepper, Step, StepLabel, Box, Alert } from '@mui/material';
import SelectServiciesStep from '../step/SelectServiciesStep';
import SelectPatientStep from '../step/SelectPatientStep';
import BlueButton from '../buttons/BlueButton';
import { useOrderStore } from '@/src/store';
import GreyButton from '../buttons/GreyButton';
import OrderPreviewStep from '../step/OrderPreviewStep';


const steps = ['Seleccionar Estudios', 'Seleccionar Cliente', 'Revisar y Confirmar'];
const STEP_1 = 0;
const STEP_2 = 1;
const STEP_3 = 2;
const STEP_FINAL = steps.length;

export default function OrderStepper() {
  const selectedLabItems = useOrderStore( (state) => state.selectedLabItems)
  const selectedClient = useOrderStore( (state) => state.selectedClient)
  const [isDisabled, setIsDisabled] = useState(true);
  const activeStep = useOrderStore((state) => state.activeStep);
  const setActiveStep = useOrderStore((state) => state.setActiveStep);
  const resetOrder = useOrderStore((state) => state.resetOrder);

  // Para desactivar el boton siguiente.
  useEffect(() => {
    if (activeStep === STEP_2) { 
      setIsDisabled(!(selectedClient.id !== "")); // Desactiva si no hay cliente, habilita si hay cliente.
    } else if (activeStep === STEP_1) {
      setIsDisabled(selectedLabItems.length === 0) // deshabilita si no hay estudios seleccionados.
    }
    else {
      setIsDisabled(false); // Habilita en otros pasos.
    }
  }, [activeStep, selectedClient, selectedLabItems]);


  const handleNext = () => {
    setActiveStep(activeStep + 1); 
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1); 
  };


  return (
    <div>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => ( 
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === STEP_FINAL ? (
        <div className='flex flex-col items-center mt-4'>
          <Alert variant="filled" severity="info" sx={{ backgroundColor:'#34b45e' }}>
            Todos los pasos fueron completados. Orden generada exitosamente.
          </Alert>
            
          <div className="p-6 rounded-lg bg-neutral-100 w-full shadow-md flex flex-col justify-start items-center lg:min-h-[32rem] 2xl:min-h-[43rem] gap-2 md:gap-4 my-4">
            <h2 className="text-center text-xl font-bold text-negro-claro uppercase py-2 border-b-4 border-gris-oscuro/30 h-fit w-11/12">Orden Generada</h2>

            <BlueButton onClick={resetOrder} sx={{ minWidth: 280}}>
              Generar Nueva Orden
            </BlueButton>
          </div>
        </div>
      ) : (
        <div className='mt-4'>
          {activeStep === STEP_1 && <SelectServiciesStep/>}

          {activeStep === STEP_2 && <SelectPatientStep/> }

          {activeStep === STEP_3 && <OrderPreviewStep/>}

          <div className='flex flex-col sm:flex-row gap-1 py-4'>
            <GreyButton onClick={handleBack} disabled={activeStep === STEP_1} sx={{ minWidth: 280}}>
              Anterior Paso
            </GreyButton>

            <Box sx={{ flex: '1 1 auto' }} />

            <BlueButton onClick={handleNext} disabled={isDisabled} sx={{ minWidth: 280}}>
              {activeStep === STEP_3 ? 'Confirmar Orden' : 'Siguiente Paso'}
            </BlueButton>
          </div>
        </div>
      )}
    </div>
  );
}
