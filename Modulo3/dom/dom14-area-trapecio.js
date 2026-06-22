const baseMayor = document.getElementById('BaseMayor');
const baseMenor = document.getElementById('BaseMenor');
const altura = document.getElementById('altura');
const btnCalcular = document.getElementById('btn__calcular_area');
const resultado = document.getElementById('resultado');
const error = document.getElementById('error')

btnCalcular.addEventListener('click', () => {
    const baseMayorNumerico = parseFloat(baseMayor.value);
    const baseMenorNumerico = parseFloat(baseMenor.value);
    const alturaNumerico = parseFloat(altura.value);
    if(isNaN(baseMayorNumerico)
        || isNaN(baseMenorNumerico)
        || isNaN(alturaNumerico)
    ){
        error.textContent= "Por favor ingresa valores numericos"
        return;
    }
    if(baseMayorNumerico <= 0
        || baseMenorNumerico <= 0
        || alturaNumerico <= 0)
    {
        error.textContent= "Por favor ingrese numeros positivos"
        return
    }
    const area = (baseMayorNumerico + baseMenorNumerico) / 2 * alturaNumerico;
    resultado.textContent = `Resultado: ${area}`;
});