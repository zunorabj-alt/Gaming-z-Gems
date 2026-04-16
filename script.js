function showGame() {
    document.querySelector(".games").style.display = "none";

    const t = document.getElementById("tarifs");
    t.style.display = "block";
    t.classList.add("fade");

    // aseho retour
    document.querySelector(".back").style.display = "block";
}

function goBack() {
    // miverina icons
    document.querySelector(".games").style.display = "flex";

    // afenina tarifs
    document.getElementById("tarifs").style.display = "none";

    // afenina form
    document.getElementById("formBox").style.display = "none";

    // afenina retour
    document.querySelector(".back").style.display = "none";
}

function openForm(product) {
    const form = document.getElementById("formBox");
    form.style.display = "block";
    form.classList.add("fade");
    window.selectedProduct = product;
}
