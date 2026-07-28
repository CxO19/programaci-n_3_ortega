const empleados = [
    {
        "nombre": "Dome",
        "apellido": "Carre",
        "sueldo": 100.99
    },
    {
        "nombre": "Karla",
        "apellido": "Mosquera",
        "sueldo": 190.99
    },
    {
        "nombre": "Mateo",
        "apellido": "Ortega",
        "sueldo": 500.49
    }
];

function renderEmpleados() {
    const cuerpoTabla = document.getElementById('cuerpoTabla');
    cuerpoTabla.innerHTML = '';

    empleados.forEach(empleado => {
        const empleadoElement = document.createElement('tr');
        empleadoElement.innerHTML = `
            <td>${empleado.nombre}</td>
            <td>${empleado.apellido}</td>
            <td>$${empleado.sueldo.toFixed(2)}</td>
        `;
        cuerpoTabla.appendChild(empleadoElement);
    });

    actualizarEstadisticas();
}

function agregarEmpleado() {
    const nombreInput = document.getElementById('nombre').value.trim();
    const apellidoInput = document.getElementById('apellido').value.trim();
    const sueldoInput = document.getElementById('sueldo').value.trim();

    if (!nombreInput || !apellidoInput || !sueldoInput) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    const nuevoEmpleado = {
        nombre: nombreInput,
        apellido: apellidoInput,
        sueldo: parseFloat(sueldoInput)
    };

    empleados.push(nuevoEmpleado);
    renderEmpleados();
    limpiarFormulario();
}

function limpiarFormulario() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('sueldo').value = '';
}

function actualizarEstadisticas() {
    const totalEmpleados = empleados.length;
    
    const sueldoPromedio = totalEmpleados > 0 ? 
        (empleados.reduce((sum, emp) => sum + emp.sueldo, 0) / totalEmpleados).toFixed(2) : "0.00";
        
    document.getElementById('totalProductos').textContent = totalEmpleados;
    document.getElementById('precioPromedio').textContent = `$${sueldoPromedio}`;
}

window.onload = function() {
    renderEmpleados();

    const agregarBtn = document.getElementById('btn_agregar');
    agregarBtn.addEventListener('click', agregarEmpleado);
};