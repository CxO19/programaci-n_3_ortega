document.addEventListener("DOMContentLoaded", 
    function() {
    const titulo = document.getElementById("titulo");
    console.log("Titulo:", titulo);

    const notas = document.getElementsByClassName("nota");
    console.log("Notas:", notas);

    const item = document.getElementsByTagName("li");
    console.log("Items:", item);

    const primerItem = document.querySelector(".item");
    console.log("Primer Item:", primerItem);

    const todoslosItems = document.querySelectorAll(".item");
    console.log("Todos los Items:", todoslosItems);

    Array.from(todoslosItems).forEach(element => {
        console.log("Item:", element);
    });
});