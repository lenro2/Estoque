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
        tipogram: document.querySelector('input[name="g-kg"]:checked').value,
        quantidade: 1
    };

    console.log("Produto adicionado:", produto); // Debug
    
    let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
    produtos.push(produto);
    localStorage.setItem("produtos", JSON.stringify(produtos));

    console.log("Produtos salvos:", produtos); // Debug

    event.target.reset();
    closeadd();
    renderizarP();
}

function renderizarP() {
    const listap = document.getElementById("listap");
    const listamp = document.getElementById("listamp");
    const p = JSON.parse(localStorage.getItem("produtos")) || [];

    console.log("Renderizando produtos:", p); // Debug

    listap.innerHTML = "";
    listamp.innerHTML = "";
    
    p.forEach((produto, index) => {
        const articlep = document.createElement("article");
        articlep.classList.add("produto");

        articlep.innerHTML = `
            <h3>${produto.nome}</h3>
            <p>${produto.gram} ${produto.tipogram}</p>
        `;

        const divQuantidade = document.createElement("div");
        divQuantidade.classList.add("divQuantidade");

        const menosButton = document.createElement("button");
        menosButton.textContent = "-";
        menosButton.addEventListener("click", () => {
            if (produto.quantidade > 0) {
                produto.quantidade = produto.quantidade - 1;
                localStorage.setItem("produtos", JSON.stringify(p));
                renderizarP();
            };
        });
        divQuantidade.appendChild(menosButton);

        const quantidadeDisplay = document.createElement("span");
        quantidadeDisplay.textContent = `${produto.quantidade || 0}`;
        divQuantidade.appendChild(quantidadeDisplay);

        const maisButton = document.createElement("button");
        maisButton.textContent = "+";
        maisButton.addEventListener("click", () => {
            produto.quantidade = (produto.quantidade || 0) + 1;
            localStorage.setItem("produtos", JSON.stringify(p));
            renderizarP();
        });
        divQuantidade.appendChild(maisButton);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "x";
        deleteButton.classList.add("botaoEmBaixo");
        deleteButton.addEventListener("click", () => {
            p.splice(index, 1);
            localStorage.setItem("produtos", JSON.stringify(p));
            renderizarP();
        });

        // Colocando tudo dentro da dive articlep.
        articlep.appendChild(divQuantidade);
        articlep.appendChild(deleteButton);

        if (produto.tipo === "produto") {
            listap.appendChild(articlep);
        } else {
            listamp.appendChild(articlep);
        }
    });
}

// Renderizar na primeira carga
document.addEventListener("DOMContentLoaded", renderizarP);
