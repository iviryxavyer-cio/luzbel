import pymssql

def getMssqlTables(host:str="localhost",user:str="admin", password:str="admin" , port:str="1433", db:str="" ):
    conn = None
    response = {
        "status": False,
        "error": "",
        "data": []
    }

    try:
        conn = pymssql.connect(server=host, user=user, password=password, port=port, database=db)
    except pymssql.Error as pymssqlerror:
        errorMsg = ""
        errorCode = pymssqlerror.args[0][0]

        if errorCode == 20009:
            errorMsg = "conexion rechazada revisar direccion y puerto. "
        elif errorCode == 18456:
            errorMsg = "conexion rechazada revisar usuario y contraseña. "
        else:
            errorMsg = f"error de conexion no clasificado : {pymssqlerror.args[0][0]} | "

        response["error"] = errorMsg + str(pymssqlerror.args[0][1])

    if conn:
        cursor = conn.cursor()

        try:
            cursor.execute(
                f"SELECT * FROM {db}.INFORMATION_SCHEMA.TABLES"
            )
            response["status"] = True
        except pymssql.Error as sqlError:
            errorMsg = sqlError.args[1]
            response["error"] = f"{errorMsg}"

        if response["status"]:
            data = cursor.fetchall()
            for row in data:
                response["data"].append(row[2])

        conn.close()


    return response