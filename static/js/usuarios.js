const filtroEdadBtn = document.getElementById('filtro-edad');
const filtroApellidoBtn = document.getElementById('filtro-apellido');
const usuariosLista = document.getElementById('usuarios-lista');
const limpiarFiltrosBtn = document.getElementById('limpiar-filtros');

filtroEdadBtn.addEventListener('click', async () => {
    try {
                // Hacer la petición a la API con el parámetro "query=edad"
        const response = await fetch('http://localhost:8000/api/usuarios?query=edad');
        const data = await response.json();

                // Actualizar el contenido del elemento <ul> con los resultados filtrados
        usuariosLista.innerHTML = '';
        data.forEach(usuario => {
        usuariosLista.innerHTML += `<li><a href="http://localhost:8000/usuarios/${usuario.id}">${capitalizarPalabras(usuario.nombre)} ${usuario.apellido_paterno} / Edad: ${usuario.edad}</a></li>`;
        });
    } catch (error) {
        console.error(error);
    }
});

filtroApellidoBtn.addEventListener('click', async () => {
    try {
                // Hacer la petición a la API con el parámetro "query=apellido_paterno"
        const response = await fetch('http://localhost:8000/api/usuarios?query=apellido_paterno');
        const data = await response.json();

                // Actualizar el contenido del elemento <ul> con los resultados filtrados
        usuariosLista.innerHTML = '';
        data.forEach(usuario => {
        usuariosLista.innerHTML += `<li><a href="http://localhost:8000/usuarios/${usuario.id}">${capitalizarPalabras(usuario.nombre)} ${usuario.apellido_paterno} / Edad: ${usuario.edad}</a></li>`;
        });
    } catch (error) {
        console.error(error);
    }
});

limpiarFiltrosBtn.addEventListener('click', async () => {
    
    try {
                // Hacer la petición a la API sin parámetros
        const response = await fetch('http://localhost:8000/api/usuarios');
        const data = await response.json();

                // Actualizar el contenido del elemento <ul> con todos los resultados
        usuariosLista.innerHTML = '';
        data.forEach(usuario => {
        usuariosLista.innerHTML += `<li><a href="http://localhost:8000/usuarios/${usuario.id}">${capitalizarPalabras(usuario.nombre)} ${usuario.apellido_paterno} / Edad: ${usuario.edad}</a></li>`;
        });
    } catch (error) {
        console.error(error);
    }
});

        // Función para capitalizar la primera letra de cada palabra
function capitalizarPalabras(str) {
    return str.toLowerCase().replace(/(?:^|\s)\S/g, function(a) {
    return a.toUpperCase();
    });
}
  
        // Función para mostrar los usuarios en la página
 async function mostrarUsuarios() {
    try {
    const response = await fetch('http://localhost:8000/api/usuarios');
    const data = await response.json();
    const listaUsuarios = document.getElementById('usuarios-lista');
    listaUsuarios.innerHTML = '';
    data.forEach((usuario) => {
        const li = document.createElement('li');
        const a = document.createElement("a");
        a.href = `http://localhost:8000/usuarios/${usuario.id}`;
        a.appendChild(document.createTextNode(`${capitalizarPalabras(usuario.nombre)} ${usuario.apellido_paterno} / Edad: ${usuario.edad}`));
        li.appendChild(a);
        listaUsuarios.appendChild(li);
    });
    } catch (error) {
    console.error(error);
    }
}
  
        // Función para enviar el formulario y agregar un nuevo usuario
async function agregarUsuario(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const apellidoPaterno = document.getElementById('apellido_paterno').value;
    const apellidoMaterno = document.getElementById('apellido_materno').value;
    const edad = document.getElementById('edad').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    try {
    const response = await fetch('http://localhost:8000/api/usuarios', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        nombre: capitalizarPalabras(nombre),
        apellido_paterno: capitalizarPalabras(apellidoPaterno),
        apellido_materno: capitalizarPalabras(apellidoMaterno),
        edad: edad,
        email: email,
        telefono: telefono
        })
    });
    const data = await response.json();
    console.log(data);
    mostrarUsuarios();
    } catch (error) {
    console.error(error);
    }
}
    
        // Llamada a la función para mostrar los usuarios al cargar la página
mostrarUsuarios();
    
        // Agregar evento para enviar el formulario
document.getElementById('formulario').addEventListener('submit', agregarUsuario);
