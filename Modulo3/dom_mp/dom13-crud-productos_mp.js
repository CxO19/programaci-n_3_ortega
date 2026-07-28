const agentes = [
    {
        "nombre": "Ana",
        "apellido": "Gómez",
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

function renderAgentes() {
    const cuerpoTabla = document.getElementById('cuerpoTabla');
    cuerpoTabla.innerHTML = '';

    agentes.forEach(agente => {
        const agenteElement = document.createElement('tr');
        agenteElement.innerHTML = `
            <td>${agente.nombre}</td>
            <td>${agente.apellido}</td>
            <td>$${agente.sueldo.toFixed(2)}</td>
        `;
        cuerpoTabla.appendChild(agenteElement);
    });

    actualizarEstadisticas();
}

function agregarAgente() {
    const nombreInput = document.getElementById('nombre').value.trim();
    const apellidoInput = document.getElementById('apellido').value.trim();
    const sueldoInput = document.getElementById('sueldo').value.trim();

    if (!nombreInput || !apellidoInput || !sueldoInput) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    const nuevoAgente = {
        nombre: nombreInput,
        apellido: apellidoInput,
        sueldo: parseFloat(sueldoInput)
    };

    agentes.push(nuevoAgente);
    renderAgentes();
    limpiarFormulario();
}

function limpiarFormulario() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('sueldo').value = '';
}

function actualizarEstadisticas() {
    const totalAgentes = agentes.length;
    
    const comisionPromedio = totalAgentes > 0 ? 
        (agentes.reduce((sum, ag) => sum + ag.sueldo, 0) / totalAgentes).toFixed(2) : "0.00";
        
    document.getElementById('totalProductos').textContent = totalAgentes;
    document.getElementById('precioPromedio').textContent = `$${comisionPromedio}`;
}

window.onload = function() {
    renderAgentes();

    const agregarBtn = document.getElementById('btn_agregar');
    agregarBtn.addEventListener('click', agregarAgente);
};