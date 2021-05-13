from django.db import models

class Registro(models.Model):
    nombre = models.CharField(max_length=60)
    nick = models.CharField(max_length=15)
    passwd = models.CharField(max_length=256)
    correo = models.CharField(max_length=40)
    llave_privada = models.CharField(max_length=512)
    llave_publica = models.CharField(max_length=512)
    timestamp = models.DateTimeField(null=False, blank=False)
