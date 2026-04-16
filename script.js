function showGame() {
    document.querySelector(".games").style.display = "none";

    const t = document.getElementById("tarifs");
    t.style.display = "block";
}

function goBack() {
    document.querySelector(".games").style.display = "flex";
    document.getElementById("tarifs").style.display = "none";
    closeForm();
}

function openForm(product) {
    document.getElementById("formBox").style.display = "block";
    document.getElementById("overlay").style.display = "block";

    window.selectedProduct = product;
    document.getElementById("productInput").value = product;
}

function closeForm() {
    document.getElementById("formBox").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}
