##
# @author JesusAlberto Briseño Camacho <jabc55@live.com>
#  @date 27/11/2019
#  @fileoverview Modelo de los procesos de Sqoop
#  @version 1.0.0
##
 
from utils.procesos import psql_db
from peewee import *
from datetime import datetime
from .usuario import usuario

class Precesos(Model):
    class Meta:
        database = psql_db
    
    id_procesoSqoop = AutoField()
    idProceso = IntegerField()
    statusProceso = CharField(max_length=7)
    idExterno = CharField(max_length=250)
    progreso = FloatField()
    fechaCreacion = DateTimeField(default=datetime.utcnow)
    ultimaFechaModificacion = DateTimeField(default=datetime.utcnow)

    def __str__(self):
        return f"id: {self.id_procesoSqoop} idProceso: {self.idProceso} statusProceso: {self.statusProceso} idExterno: {self.idExterno} progreso: {self.progreso} fechaCreacion: {self.fechaCreacion} ultimaFechaModificacion: {self.ultimaFechaModificacion}"

    if __name__ == "__main__":
        for p in Procesos.select():
            print(f"proceso {p.idProceso} | {p.statusProceso} | {p.idExterno} | {p.progreso} | {p.fechaCreacion} | {p.ultimaFechaModificacion}")