import React from 'react';
import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';
import { StepThree } from './StepThree';
import { StepFour } from './StepFour';

const steps = 
    [
      {name: 'Servidores', component: <StepOne/>},
      {name: 'Conectores', component: <StepTwo/>},
      {name: 'BD', component: <StepThree/>},
      {name: 'Resumen', component: <StepFour/>}
    ]

export { steps }