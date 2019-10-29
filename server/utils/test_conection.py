import pymssql
from tabulate import tabulate


def testMssqlServerConection(host="localhost",user="admin", password="admin" ):
    """
    :param host: direccion del servidor
    :param user: usuario que se usara para la conexion
    :param password: password que se usara para la conexion
    :return: json

    la funcion debe regresar un diccionario con:
    - booleano que indique si se conecto o no
    - error como string que describe el error
    - listado de bds en caso de exito
    """
    conn = None
    response = {
        "status":0,
        "errores":"",
        "data":[]
    }

    try:
        conn = pymssql.connect(server=host, user=user, password=password)
    except pymssql.Error as pymssqlerror:
        response["errores"] = f"no se pudo conectar con el servidor : {pymssqlerror}"

    if conn:
        response["status"] = 1
        cursor = conn.cursor()

        cursor.execute(
            'SELECT name FROM sys.databases;'
        )

        #tabla = []
        #headers = ["database"]
        data = cursor.fetchall()
        conn.close()

        for row_db in data:
            #row_tabla = [row_db[0]]
            #tabla.append(row_tabla)
            response["data"].append({"database":row_db[0]})
            #row_db = cursor.fetchone()

        #print(tabulate(tabla, headers=headers, tablefmt="fancy_grid"))

    return response

if __name__ == "__main__":
    print(testMssqlServerConection(host="10.1.1.67", user='tca', password='ITerp01@02'))