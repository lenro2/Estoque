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

function renderizarP() {
    const listap = document.getElementById("listap");
    const p = JSON.parse(localStorage.getItems("produtos")) || [];

    listap.innerHTML = "";

    p.forEach((produto, index) => {
        const articlep = document.createElement("article");
        articlep.classList.add("produto");

        articlep.innerHTML = `
        <h3>${nome}</h3>
        <p>${gram} ${tipogram}</p>
        <p class="leveDestaque">${tipo}</p>
        `;
        listap.appenChild(articlep);
    });
};
