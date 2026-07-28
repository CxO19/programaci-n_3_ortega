function mostrarAlerta() {
    alert("Hola desde InmoActual!");
}

function agregarProducto() {
    const lista = document.getElementById("lista-productos1");
    const nuevoProducto = document.createElement("li");
    nuevoProducto.textContent = "Nueva propiedad publicada";
    lista.appendChild(nuevoProducto);
}

document.getElementById('btn3').addEventListener('click', () => {
    const lista2 = document.getElementById("lista-productos2");
    const nuevoProducto = document.createElement("li");
    nuevoProducto.textContent = "Nueva propiedad desde Evento Listener";
    lista2.appendChild(nuevoProducto);
});

document.getElementById('campo')
    .addEventListener('input', () => {
        console.log("Valor del campo: ",
            document.getElementById('campo').value);
    });

document.getElementById('campo_actualizar_parrafo')
    .addEventListener('input', () => {
    const valorCampo = document
        .getElementById('campo_actualizar_parrafo').value;
    document.getElementById('parrafo')
        .textContent = 
            'Propiedad ingresada: ${valorCampo}';
});
