/**
 * @author Luis Manuel Torres Treviño
 * @date 30/11/2019
 * @fileoverview Este archivo contiene el componente del primer paso del wizzard ttl
 * @version 1.0.0
 * 
 * historial
 * v.1.0.0 - Creacion del 
 */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {conexionesActions} from '../../../actions/conexiones.actions';
import '../../../css/wizzardttl.scss';
import { TextField } from '@material-ui/core';

export function StepOne(props){
    const dispatch = useDispatch()
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);

    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    dispatch(conexionesActions.getAllConexiones())
    let connections = useSelector(state => state.connections)

    return (
        <>
            <FormControl className="formControl-ttl">
                <InputLabel id="conexion">Conexion</InputLabel>
                <Select
                    labelId="conexion"
                    id="select-conexion"
                    value={props.data.conexion}
                    onChange={props.onChange} 
                >
                    {connections.map((element, index) => {
                        return (
                            <MenuItem value={element.idConexion}>{element.Cadena}</MenuItem>
                        )
                    })
                    }
                </Select>
            </FormControl>
            <FormControl className="textField-ttl">
                <TextField id="nombre" name="nombre" label="Nombre" onChange={props.onChange} />
            </FormControl>
        </>
    )
}