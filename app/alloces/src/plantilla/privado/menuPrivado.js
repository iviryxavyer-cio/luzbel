/**
 * @author Luis Manuel Torres Treviño
 * @date 23/11/2019
 * @fileoverview Este archivo contiene el objeto con el cual se creará el menu lateral
 * @version 1.0.0
 * 
 * Historial
 * v.1.0.0 Se crea el menu de catalogos con usuarios, servidores, conectores y conexiones.
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
        icon: undefined,
        openIcon: undefined,
        closeIcon: undefined,
        collapse: false,
        collapseItems: undefined
    }
]