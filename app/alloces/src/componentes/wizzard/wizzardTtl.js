/**
 * @author Luis Manuel Torres Treviño
 * @date 29/11/2019
 * @fileoverview Esta archivo contendra el wizzard ttl y toda su configuración
 * @version 1.0.0
 * 
 * historial
 * v.1.0.0 - 
 */

import React, { useState } from 'react';

//import { Button } from '@material-ui/core';

import { StepOne } from '../../pages/sqoop/monitor/StepOne';


const state = {
    idConexion: 0,
    nombre: '',
    camposLista: [],
    campos: '',
    query: '',
}

export function WizzardTtl(props) {
    const [datos, setState] = useState(state);

    const updateState = e => setState({...datos, [e.target.name]: e.target.value});

    return (
        <>
            <StepOne onChange={updateState} data={datos} />
        </>
    )
}

