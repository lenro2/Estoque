const addpainel = document.querySelector(".add");
const addoverlay = document.querySelector(".overlay");
const addp = document.getElementById("addp");

function openadd() {
    addpainel.style.display = "block";
    addoverlay.style.display = "block";
}

function closeadd() {
    addpainel.style.display = "none";
    addoverlay.style.display = "none";
}

addp.addEventListener("submit", add);
function add(event) {
    event.preventDefault();

    const produto = {
        nome: document.getElementById("nomep").value,
        tipo: document.getElementById("tipo").value,
        gram: document.getElementById("gram").value,
        tipogram: document.querySelector('input[name="g-kg"]:checked').value
    };

    let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

    produtos.push(produto);

    localStorage.setItem("produtos", JSON.stringify(produtos));

    event.target.reset();
}

