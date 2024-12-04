'use client'
import React, { useEffect, useState } from 'react';
import { Stepper, Step, StepLabel, Typography, Box } from '@mui/material';
import SelectServiciesStep from '../step/SelectServiciesStep';
import SelectPatientStep from '../step/SelectPatientStep';
import BlueButton from '../buttons/BlueButton';
import { useOrderStore } from '@/src/store';


const steps = ['Seleccionar Estudios', 'Completar Datos Cliente', 'Revisar y Confirmar'];

export default function OrderStepper() {
  const selectedLabItems = useOrderStore( (state) => state.selectedLabItems)
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(selectedLabItems.length === 0); 
  }, [selectedLabItems])

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
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
      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Todos los pasos completados. Orden generada exitosamente.
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <BlueButton onClick={handleReset}>
              Nueva Orden
            </BlueButton>
            <Box sx={{ flex: '1 1 auto' }} />
          </Box>
        </>
      ) : (
        <div className='mt-4'>
          {activeStep === 0 && <SelectServiciesStep/>}

          {activeStep === 1 && <SelectPatientStep/> }

          {activeStep === 2 && <div>Contenido del paso 3</div>}

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              className="isolate relative z-10 w-60 text-center rounded border-2 border-gris-oscuro bg-gris-oscuro/85 px-6 py-3 text-sm font-medium uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gris-oscuro before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 active:brightness-110 disabled:bg-gris-claro disabled:border-gris-claro disabled:before:bg-gris-claro disabled:active:brightness-100"
            >
              Anterior Paso
            </button>
            <Box sx={{ flex: '1 1 auto' }} />
            <button 
              disabled={isDisabled}
              onClick={handleNext} 
              className="isolate relative z-10 w-60 text-center rounded border-2 border-azul-oscuro bg-azul-oscuro/85 px-6 py-3 text-sm font-medium uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-azul-oscuro before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 active:brightness-110 disabled:bg-gris-claro disabled:border-gris-claro disabled:before:bg-gris-claro disabled:active:brightness-100">
              {activeStep === steps.length - 1 ? 'Confirmar Orden' : 'Siguiente Paso'}
            </button>
          </Box>
        </div>
      )}
    </div>
  );
}
