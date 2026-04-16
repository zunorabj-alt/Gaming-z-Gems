function showGame() {
    let t = document.getElementById("tarifs");
    t.style.display = "block";
    t.classList.add("fade");
}

function openForm(product) {
    let f = document.getElementById("formBox");
    f.style.display = "block";
    f.classList.add("fade");
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
