const url = window.location.href;
const regex = /\d+$/;
const matches = url.match(regex);
const number = matches ? matches[0] : null;
console.log(number);

fetch(`http://localhost:8000/api/usuarios/${number}`)
    .then(response => response.json())
    .then(usuario => {
        let nombre = document.createElement('h3');
        nombre.textContent = `Nombre: ${usuario.nombre}`;

        let apellidoPaterno = document.createElement('h3');
        apellidoPaterno.textContent = `Apellido Paterno: ${usuario.apellido_paterno}`;

        let apellidoMaterno = document.createElement('h3');
        apellidoMaterno.textContent = `Apellido Materno: ${usuario.apellido_materno}`;

        let edad = document.createElement('h3');
        edad.textContent = `Edad: ${usuario.edad}`;

        let email = document.createElement('h3');
        email.textContent = `Email: ${usuario.email}`;

        let telefono = document.createElement('h3');
        telefono.textContent = `Teléfono: ${usuario.telefono}`;

        // Agregar los elementos <h2> al elemento <div>
        let divUsuario = document.getElementById('usuario')
        divUsuario.appendChild(nombre);
        divUsuario.appendChild(apellidoPaterno);
        divUsuario.appendChild(apellidoMaterno);
        divUsuario.appendChild(edad);
        divUsuario.appendChild(email);
        divUsuario.appendChild(telefono);
})
.catch(error => {
    console.error(`Error al obtener la información del usuario ${number}: ${error}`);
});

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function mostrarFormularioActualizacion(id) {
    let formulario = document.createElement('form');
    formulario.id = 'formulario-actualizacion';
    formulario.innerHTML = `
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre"><br>

        <label for="apellido_paterno">Apellido Paterno:</label>
        <input type="text" id="apellido_paterno" name="apellido_paterno"><br>

        <label for="apellido_materno">Apellido Materno:</label>
        <input type="text" id="apellido_materno" name="apellido_materno"><br>

        <label for="edad">Edad:</label>
        <input type="number" id="edad" name="edad"><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br>

        <label for="telefono">Teléfono:</label>
        <input type="tel" id="telefono" name="telefono"><br>

        <button type="submit">Actualizar</button>
    `;

    let divFormulario = document.getElementById('formulario');

    fetch(`http://localhost:8000/api/usuarios/${id}`)
        .then(response => response.json())
        .then(data => {
        formulario.querySelector('#nombre').setAttribute('value', data.nombre);
        formulario.querySelector('#apellido_paterno').setAttribute('value', data.apellido_paterno);
        formulario.querySelector('#apellido_materno').setAttribute('value', data.apellido_materno);
        formulario.querySelector('#edad').setAttribute('value', data.edad);
        formulario.querySelector('#email').setAttribute('value', data.email);
        formulario.querySelector('#telefono').setAttribute('value', data.telefono);
        })
        .catch(error => console.error(error));

    divFormulario.innerHTML = '';
    divFormulario.appendChild(formulario);

    formulario.addEventListener('submit', event => {
        event.preventDefault();

        let datos = {
        nombre: capitalize(formulario.nombre.value),
        apellido_paterno: capitalize(formulario.apellido_paterno.value),
        apellido_materno: capitalize(formulario.apellido_materno.value),
        edad: formulario.edad.value,
        email: formulario.email.value,
        telefono: formulario.telefono.value,
        };

        const method = Object.values(datos).every(val => val) ? 'PUT' : 'PATCH';

        fetch(`http://localhost:8000/api/usuarios/${id}`, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
        },
        
        body: JSON.stringify(datos),
        })
        .then(response => {
            if (response.ok) {
            console.log('Usuario actualizado correctamente');
            location.reload();
            } else {
            console.error('Error al actualizar el usuario');
            }
        })
        .catch(error => console.error(error));
    });
}

mostrarFormularioActualizacion(number)

let botonEliminarUsuario = document.getElementById('eliminar-usuario');
    botonEliminarUsuario.addEventListener('click', () => {
        fetch(`http://localhost:8000/api/usuarios/${number}`, { method: 'DELETE' })
            .then(response => {
                if (response.ok) {
                    console.log('Usuario eliminado correctamente');
                    window.location.href = 'http://localhost:8000/usuarios/'; // redirigir a usuarios.html
                } else {
                    console.error('Error al eliminar el usuario');
                }
                })
                .catch(error => console.error(error));
});