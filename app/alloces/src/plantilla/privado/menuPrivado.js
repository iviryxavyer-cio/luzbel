/**
 * @author Luis Manuel Torres Treviño
 * @date 23/11/2019
 * @fileoverview Este archivo contiene el objeto con el cual se creará el menu lateral
 * @version 1.0.0
 * 
 * Historial
 * v.1.0.0 Se crea el menu de catalogos con usuarios, servidores, conectores y conexiones.
 * se agrega la seccion ambari aunque con un link que no lleva a ningun lado, JLM 18/02/2020
 */

import React from 'react';
import IconLibraryBooks from '@material-ui/icons/LibraryBooks';
import IconExpandLess from '@material-ui/icons/ExpandLess';
import IconExpandMore from '@material-ui/icons/ExpandMore';

export const menuPrivado = [
    {
        name: 'Catalogos',
        icon: <IconLibraryBooks className="colorIcon" />,
        openIcon: <IconExpandLess className="secondaryIcon" />,
        closeIcon: <IconExpandMore className="secondaryIcon" />,
        collapse: true,
        collapseItems: [
            {
                name: 'Usuarios',
                link: '/usuarios',
            },
            {
                name: 'Servidores',
                link: '/servidores'
            },
            { name: 'Conectores', link: '/conectores' },
            { name: 'Conexiones', link: '/conexiones' },
        ]
    },
    {
        name: 'Sqoop',
        icon: <IconLibraryBooks className="colorIcon" />,
        openIcon: <IconExpandLess className="secondaryIcon" />,
        closeIcon: <IconExpandMore className="secondaryIcon" />,
        collapse: true,
        collapseItems: [
            {
                name: 'Monitor de procesos',
                link: '/MonitorProcesos'
            },
        ]
    },
    {
        name: 'Ambari',
        icon: <IconLibraryBooks className="colorIcon" />,
        openIcon: <IconExpandLess className="secondaryIcon" />,
        closeIcon: <IconExpandMore className="secondaryIcon" />,
        collapse: true,
        collapseItems: [
            {
                name: 'Ambari',
                link: '/Ambari-Link'//cuando se hizo esta opcion del menu aun no se tenia definido donde va estar ambari 18 de febrero del 2020
            },
        ]
    },
    {
        name: 'MapReduce2',
        icon: <IconLibraryBooks className="colorIcon" />,
        openIcon: <IconExpandLess className="secondaryIcon" />,
        closeIcon: <IconExpandMore className="secondaryIcon" />,
        collapse: true,
        collapseItems: [
            {
                name: 'Administrador MapReduce',
                link: '/linkMap'//no existe seccion a esta fecha 19 de febrero del 2020
            },
        ]
    }

]