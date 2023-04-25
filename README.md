<div align="center">
    <img src="recursos/mbinnovation.png" alt="logo">
    <h1>Prueba práctica de reclutamiento para el perfil de backend</h1>
</div>

### :bookmark_tabs: Contenido

- [Guía de uso](#toolbox-guía-de-uso)
    * [Prerrequisitos](#clipboard-prerrequisitos)
    * [Clonar repositorio](#computer-clonar-repositorio)
    * [Instalando poetry](#wrench-instalando-poetry)
    * [Uso del proyecto](#mag_right-uso-del-proyecto)

# :toolbox: Guía de uso

### :clipboard: Prerrequisitos
Contar con terminal para realizar instalación.

Contar con [python](https://www.python.org/) instalado, preferentemente versión 3.8+, de igual manera
contar con pip para la instalación.

Verificar instalación de python
```
(Windows) python --version
(Linux) python3 --version
```

Contar con [git](https://git-scm.com/download/win) instalado.

Verificar instalación de git
```
git --version
```
<br>

### :computer: Clonar repositorio
Para clonar el repositorio se tendrá que ejecutar el siguiente comando en donde se quiera descargar el proyecto.
```
git clone https://github.com/Chris-naibaf/prueba-backend.git
```

Una vez descargado hay que entrar a la carpeta prueba-backend creada al clonar el repo, de la siguiente manera.
```
cd prueba-backend
```


### :wrench: Instalando poetry
El primer paso es instalar el administrador de paquetes poetry para instalarlo 
puede usarse pip con alguno de los siguientes comandos dependiendo del sistema operativo.

```
(General) pip install poetry
(Windows) python -m pip install poetry
(Linux) python3 -m pip install poetry
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

### :mag_right: Uso del proyecto
Una vez esté activado el entorno virtual (poetry shell) y se haya cambiado al directorio del proyecto 
se ejecutarán los siguientes comandos.

Crea el esquema necesario por la base de datos para poder realizar las acciones CRUD
```
python manage.py migrate
```

Corre el servidor de desarrollo
```
python manage.py runserver
```

Para entrar a la ruta donde se está ejecutando el proyecto se puede hacer control + click en la ruta que aparece
al ejecutar el comando runserver o poner la siguiente url directamente en el navegador http://127.0.0.1:8000/