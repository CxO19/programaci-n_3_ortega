const campoNumero1 = document.getElementById('campo_numero1');
const campoNumero2 = document.getElementById('campo_numero2');
const btnArea = document.getElementById('btn_area');
const resultado = document.getElementById('resultado');

btnArea.addEventListener('click', function() {
    const numero1 = parseFloat(campoNumero1.value);
    const numero2 = parseFloat(campoNumero2.value);
    const area = (numero1 * numero2) / 2;
    resultado.textContent = `Resultado: ${area}`;
});