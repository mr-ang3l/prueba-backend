<div align="center">
    <img src="recursos/mbinnovation.png" alt="logo">
    <h1>Prueba práctica de reclutamiento para el perfil de backend</h1>
</div>

### :bookmark_tabs: Contenido

- [Guía de uso](#toolbox-guía-de-uso)
    * [Prerrequisitos](#clipboard-prerrequisitos)
    * [Instalación con poetry](#wrench-instalación-con-poetry)
- [Backend](#floppy_disk-backend)
- [Casos de uso](#mag_right-casos-de-uso)

## :toolbox: Guía de uso

### :clipboard: Prerrequisitos
Contar con terminal para realizar instalación mediante pip, bash o powershell.


### :wrench: Instalación con poetry
El primer paso es instalar el administrador de paquetes poetry para instalarlo 
puede usarse pip o directamente mediante los siguientes comandos.

```
pip install poetry
```
Linux
```bash
curl -sSL https://install.python-poetry.org | python3 -
```
Windows
```powershell
(Invoke-WebRequest -Uri https://install.python-poetry.org -UseBasicParsing).Content | py -
```

Para comprobar la instalación podemos verificar la versión de poetry instalada mediante
el siguiente comando.
```
poetry --version
```

Poetry instalará las dependencias usando el archivo pyproject.toml, solo se hará uso de un comando
para realizar esto.
```
poetry install
```

Una vez instaladas todas las dependencias lo único que queda hacer es activar el entorno virtual.
```
poetry shell
```


## :floppy_disk: Backend

## :mag_right: Casos de uso 