import pymssql
from tabulate import tabulate


def testMssqlServerConection(host="localhost",user="admin", password="admin" , port="1433"):
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
        "status":False,
        "error":"",
        "data":[]
    }

    try:
        conn = pymssql.connect(server=host, user=user, password=password, port=port)
    except pymssql.Error as pymssqlerror:
        errorMsg = ""
        errorCode = pymssqlerror.args[0][0]
        # print(f"error code : {errorCode}")

        if errorCode == 20009:
            errorMsg = "conexion rechazada revisar direccion y puerto. "
        elif errorCode == 18456:
            errorMsg = "conexion rechazada revisar usuario y contraseña. "
        else:
            errorMsg = f"error de conexion no clasificado : {pymssqlerror.args[0][0]} | "

        response["error"] = errorMsg + str(pymssqlerror.args[0][1])

    if conn:
        response["status"] = True
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
            response["data"].append(row_db[0])
            #row_db = cursor.fetchone()

        #print(tabulate(tabla, headers=headers, tablefmt="fancy_grid"))

    return response

if __name__ == "__main__":
    print(testMssqlServerConection(host="10.1.1.67", user='tca', password='ITerp01@02'))