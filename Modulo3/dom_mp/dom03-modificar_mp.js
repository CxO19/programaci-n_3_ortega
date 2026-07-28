document.addEventListener("DOMContentLoaded", 
    function() {
    const mensaje = document.getElementById("mensaje");
    console.log("Mensaje:", mensaje);

    const link = document.querySelector("link");
    link.textContent = "www.inmoactual.com";
    link.href = "https://www.inmoactual.com";
    link.classList.add("boton");

    console.log("Link:", link);
});
