const addpainel = document.querySelector(".add");
const addoverlay = document.querySelector(".overlay");

function adicionar() {
    addpainel.style.display = "block";
    addoverlay.style.display = "block";
}

function closeadd() {
    addpainel.style.display = "none";
    addoverlay.style.display = "none";
}