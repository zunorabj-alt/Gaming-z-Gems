function showGame() {
    document.querySelector(".games").style.display = "none";

    const t = document.getElementById("tarifs");
    t.style.display = "block";
    t.classList.add("fade");
}

function openForm(product) {
    document.getElementById("formBox").style.display = "block";
    window.selectedProduct = product;

    document.getElementById("productInput").value = product;
}
