import React from 'react';
import { StepOne } from './pages/StepOne';
import { StepTwo } from './pages/StepTwo';
import { StepThree } from './pages/StepThree';
import { StepFour } from './pages/StepFour';

const steps = 
    [
      {name: 'Servidores', component: <StepOne/>},
      {name: 'Conectores', component: <StepTwo/>},
      {name: 'BD', component: <StepThree/>},
      {name: 'Resumen', component: <StepFour/>}
    ]

export { steps }