function mostrarAlerta() {
    alert("Hola desde el boton!");
}

function agregarProducto() {
    const lista = document.getElementById("lista-productos1");
    const nuevoProducto = document.createElement("li");
    nuevoProducto.textContent = "Nuevo producto";
    lista.appendChild(nuevoProducto);
}

document.getElementById('btn3').addEventListener('click', () => {
    const lista2 = document.getElementById("lista-productos2");
    const nuevoProducto = document.createElement("li");
    nuevoProducto.textContent = "Nuevo producto desde Evento Listener";
    lista2.appendChild(nuevoProducto);
});
