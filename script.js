const addpainel = document.querySelector(".add");
const addoverlay = document.querySelector(".overlay");

function openadd() {
    addpainel.style.display = "block";
    addoverlay.style.display = "block";
}

function closeadd() {
    addpainel.style.display = "none";
    addoverlay.style.display = "none";
}

const tipop = document.getElementById("tipo");
const gram = document.getElementById("gramagem");
tipop.addEventListener("change", (e) => {
    if (e.target.value === "produto") {
        gram.style.display = "block";
    } else {
        gram.style.display = "none";
    }
});