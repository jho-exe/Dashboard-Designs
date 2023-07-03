// Obtener el formulario de agregar mesa
const addMesaForm = document.getElementById('add-mesa-form');

// Obtener el contenedor de las mesas
const mesasContainer = document.getElementById('mesas-container');

// Arreglo para almacenar las mesas
const mesas = [];

// Función para agregar una nueva mesa
function agregarMesa(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const numero = document.getElementById('mesa-numero').value;
    const capacidad = document.getElementById('mesa-capacidad').value;

    // Crear un nuevo objeto de mesa
    const mesa = {
        numero: numero,
        capacidad: capacidad
    };

    // Agregar la mesa al arreglo
    mesas.push(mesa);

    // Actualizar el contenido del contenedor de mesas
    mostrarMesas();
    
    // Limpiar los campos del formulario
    addMesaForm.reset();
}

// Función para mostrar las mesas en el contenedor
function mostrarMesas() {
    // Limpiar el contenido actual del contenedor
    mesasContainer.innerHTML = '';

    // Crear la tabla de mesas
    const table = document.createElement('table');
    table.id = 'mesas-table';

    // Crear la fila de encabezado
    const headerRow = document.createElement('tr');
    const headers = ['Número de Mesa', 'Capacidad'];
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Recorrer el arreglo de mesas y crear las filas de la tabla
    mesas.forEach(mesa => {
        const row = document.createElement('tr');
        const numeroCell = document.createElement('td');
        const capacidadCell = document.createElement('td');

        numeroCell.textContent = mesa.numero;
        capacidadCell.textContent = mesa.capacidad;

        row.appendChild(numeroCell);
        row.appendChild(capacidadCell);

        table.appendChild(row);
    });

    // Agregar la tabla al contenedor
    mesasContainer.appendChild(table);
}

// Escuchar el evento de envío del formulario
addMesaForm.addEventListener('submit', agregarMesa);
