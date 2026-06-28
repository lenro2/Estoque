function adicionar() {
    const itens = document.getElementById("Itens");
    const article = document.createElement("article")
    const h2 = document.createElement("h2");
    h2.textContent = "Novo produto"
    h2.id = "NV"
    itens.appendChild(article);
}