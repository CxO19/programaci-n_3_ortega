const propiedades = [];   // arreglo principal
const CALIFICACION_MINIMA_RECOMENDADA = 6;

// ── Agregar propiedad al arreglo ────────────────────────────────────────
function agregarPropiedad() {
    const nombre = document.getElementById('inNombre').value.trim();
    const nota = parseFloat(document.getElementById('inNota').value);

    const divError = document.getElementById('error');
    divError.style.display = 'none';

    if (nombre === '') {
        divError.textContent = 'Por favor ingresa el nombre de la propiedad.';
        divError.style.display = 'block';
        return;
    }

    if (isNaN(nota) || nota < 0 || nota > 10) {
        divError.textContent = 'La calificación debe ser un número entre 0 y 10.';
        divError.style.display = 'block';
        return;
    }

    propiedades.push({ nombre, nota });

    // Limpiar campos y re-renderizar tabla
    document.getElementById('inNombre').value = '';
    document.getElementById('inNota').value = '';
    document.getElementById('inNombre').focus();

    renderizarTabla();

    // Ocultar estadísticas previas al agregar un nuevo registro
    document.getElementById('estadisticas').style.display = 'none';
}

// ── Renderizar la tabla de propiedades ──────────────────────────────────
function renderizarTabla() {
    const tbody = document.getElementById('tablaBody');
    tbody.innerHTML = '';

    propiedades.forEach((propiedad, index) => {
        const recomendada = propiedad.nota >= CALIFICACION_MINIMA_RECOMENDADA;
        const fila = document.createElement('tr');
        fila.innerHTML = `
           <td>${index + 1}</td>
           <td>${propiedad.nombre}</td>
           <td>${propiedad.nota.toFixed(2)}</td>
           <td class="${recomendada ? 'estado-aprobado' : 'estado-reprobado'}">
               ${recomendada ? 'Recomendada' : 'No recomendada'}
           </td>
           <td>
               <button class="btn-eliminar" onclick="eliminarPropiedad(${index})" title="Eliminar">✕</button>
           </td>
       `;
        tbody.appendChild(fila);
    });

    document.getElementById('listaAlumnos').style.display =
        propiedades.length > 0 ? 'block' : 'none';
}

// ── Eliminar propiedad del arreglo ──────────────────────────────────────
function eliminarPropiedad(index) {
    propiedades.splice(index, 1);
    renderizarTabla();
    document.getElementById('estadisticas').style.display = 'none';
}

// ── Calcular estadísticas del arreglo ───────────────────────────────────
function calcularEstadisticas() {
    const divError = document.getElementById('error');
    divError.style.display = 'none';

    if (propiedades.length === 0) {
        divError.textContent = 'Agrega al menos una propiedad antes de calcular.';
        divError.style.display = 'block';
        return;
    }

    const notas = propiedades.map(a => a.nota);
    const promedio = notas.reduce((acc, n) => acc + n, 0) / notas.length;
    const mayor = Math.max(...notas);
    const menor = Math.min(...notas);
    const recomendadas = propiedades.filter(a => a.nota >= CALIFICACION_MINIMA_RECOMENDADA).length;

    document.getElementById('sPromedio').textContent = promedio.toFixed(2);
    document.getElementById('sMayor').textContent = mayor.toFixed(2);
    document.getElementById('sMenor').textContent = menor.toFixed(2);
    document.getElementById('sAprobados').textContent = `${recomendadas} / ${propiedades.length}`;

    document.getElementById('estadisticas').style.display = 'block';
}

// ── Limpiar todo ─────────────────────────────────────────────────────────
function limpiar() {
    propiedades.length = 0;
    renderizarTabla();
    document.getElementById('estadisticas').style.display = 'none';
    document.getElementById('error').style.display = 'none';
    document.getElementById('inNombre').value = '';
    document.getElementById('inNota').value = '';
    document.getElementById('inNombre').focus();
}

// Enter en los campos de ingreso agrega la propiedad
window.onload = () => {
    ['inNombre', 'inNota'].forEach(id => {
        document.getElementById(id).addEventListener('keydown', e => {
            if (e.key === 'Enter') agregarPropiedad();
        });
    });
};
