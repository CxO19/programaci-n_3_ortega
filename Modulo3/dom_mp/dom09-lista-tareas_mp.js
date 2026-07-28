const campoTarea = document.getElementById('campo_tarea');
const btnAgregar = document.getElementById('btn_agregar');
const listaTareas = document.getElementById('lista_tareas');

btnAgregar.addEventListener('click', function() {
    const tarea = campoTarea.value.trim();
    if (tarea !== '') {
        const li = document.createElement('li');
        li.textContent = tarea;
        listaTareas.appendChild(li);
        campoTarea.value = '';
    }
});
