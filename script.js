function showGame() {
    const tarifs = document.getElementById("tarifs");
    tarifs.style.display = "block";
    tarifs.classList.add("fade");
}

function openForm(product) {
    const form = document.getElementById("formBox");
    form.style.display = "block";
    form.classList.add("fade");
    window.selectedProduct = product;
}

function sendMail() {
    let uid = document.getElementById("uid").value;
    let ref = document.getElementById("ref").value;

    let subject = "Commande Gaming-z Gems";
    let body = "Produit: " + window.selectedProduct +
               "%0AUID: " + uid +
               "%0ARéférence: " + ref;

    window.location.href =
        "mailto:tonemail@gmail.com?subject=" + subject + "&body=" + body;
}
