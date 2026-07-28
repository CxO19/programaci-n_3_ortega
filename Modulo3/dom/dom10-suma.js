const campoNumero1 = document.getElementById('campo_numero1');
const campoNumero2 = document.getElementById('campo_numero2');
const btnSumar = document.getElementById('btn_sumar');
const resultado = document.getElementById('resultado');

btnSumar.addEventListener('click', function() {
    const numero1 = parseFloat(campoNumero1.value);
    const numero2 = parseFloat(campoNumero2.value);
    const suma = numero1 + numero2;
    resultado.textContent = `Resultado: ${suma}`;
});