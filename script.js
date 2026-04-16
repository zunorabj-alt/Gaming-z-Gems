function showGame() {
    document.querySelector(".games").style.display = "none";
    document.getElementById("tarifs").style.display = "block";
}

function goBack() {
    document.querySelector(".games").style.display = "flex";
    document.getElementById("tarifs").style.display = "none";
    closeForm();
}

function openForm(product) {
    document.getElementById("formBox").style.display = "block";
    window.selectedProduct = product;
    document.getElementById("productInput").value = product;
}

function closeForm() {
    document.getElementById("formBox").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

/* SUBMIT ANIMATION + SEND */
function sendOrder(event) {
    event.preventDefault();

    document.getElementById("successBox").style.display = "flex";

    setTimeout(() => {
        event.target.submit();
    }, 1500);

    return false;
}
