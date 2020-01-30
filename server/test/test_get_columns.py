"""
author: Luis Manuel Torres Treviño
date: 02/12/2019
description: Este archivo contiene las pruebas unitarias para el metodo get_columns de utils
version: 1.0.0

historial
v.1.0.0 - se creo el metodo test_get_columns
"""
import unittest
from utils.getColumns import get_columns


class TestGetColumns(unittest.TestCase):
    """TestGetColumns
        Clase que se encarga de configurar y ejecutar las pruebas unitarias 
        referentes al metodo get_columns
    """

    def test_get_columns(self):
        host = '10.1.1.67'
        user = 'tca'
        password = 'ITerp01@02'
        port = '1433'
        database_name = 'TCADBDWH'
        table_name = 'CEDIStiemposSAP'

        columns = get_columns(host=host, user=user, password=password,
                              port=port, db=database_name, table=table_name)

        self.assertNotEqual(len(columns), 0)


if __name__ == '__main__':
    unittest.main()
