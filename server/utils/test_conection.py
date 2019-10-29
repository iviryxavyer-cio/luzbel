import pymssql
from tabulate import tabulate

errores = False
conn = None

try:
    conn = pymssql.connect(server='10.1.1.67', user='tca', password='ITerp01@02', database='TCADBDWH')
except:
    pass

if conn:
    cursor = conn.cursor()

    cursor.execute(
        'SELECT name, database_id, create_date FROM sys.databases;'
    )

    row_db = cursor.fetchone()
    tabla = []
    headers = ["database", "id sql server", "fecha creacion"]

    while row_db:
        row = [row_db[0],row_db[1],row_db[2]]
        tabla.append(row)
        row_db = cursor.fetchone()

    print(tabulate(tabla, headers=headers, tablefmt="fancy_grid"))

    conn.close()
else:
    print("no se pudo")