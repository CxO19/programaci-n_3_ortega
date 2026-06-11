function agregarProducto() {
    const nombreInput = document
        .getElementById('nombre').value.trim();
    const apellidoInput = document
        .getElementById('apellido').value.trim();
    const sueldoInput = document
        .getElementById('Sueldo').value.trim();

    if (!nombreInput || !apellidoInput
        || !sueldoInput) {
        alert('Por favor, complete todos los campos');
        return;
    }

    const SueldoAg = {
        nombre: nombreInput,
        descripcion: descripcionInput,
        sueldo: parseFloat(sueldoInput)
    };

    productos.push(SueldoAg);
    renderProductos();
}