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
    closeadd();
    renderizarP();
}

function renderizarP() {
    const listap = document.getElementById("listap");
    const listamp = document.getElementById("listamp");
    const p = JSON.parse(localStorage.getItem("produtos")) || [];

    listap.innerHTML = "";
    listamp.innerHTML = "";
    
    p.forEach((produto, index) => {
        const articlep = document.createElement("article");
        articlep.classList.add("produto");

        articlep.innerHTML = `
        <h3>${produto.nome}</h3>
        <p>${produto.gram} ${produto.tipogram}</p>
        <p class="leveDestaque">${produto.tipo}</p>
        `;
        if (produto.tipo === "produto") {
            listap.appendChild(articlep);
        } else {
            listamp.appendChild(articlep);
        }
    });
};

// Renderizar na primeira carga
document.addEventListener("DOMContentLoaded", renderizarP);
