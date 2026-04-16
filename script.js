function showGame() {
    const games = document.querySelector(".games");
    const tarifs = document.getElementById("tarifs");

    // smooth disappear
    games.style.opacity = "0";
    games.style.transform = "scale(0.95)";

    setTimeout(() => {
        games.style.display = "none";

        tarifs.style.display = "block";
        tarifs.style.opacity = "0";

        setTimeout(() => {
            tarifs.style.opacity = "1";
            tarifs.classList.add("fade");
        }, 50);

    }, 250);
}

function openForm(product) {
    const form = document.getElementById("formBox");
    form.style.display = "block";
    form.classList.add("fade");
    window.selectedProduct = product;
}

function sendMail() {
    const uid = document.getElementById("uid").value;
    const ref = document.getElementById("ref").value;

    const subject = "Commande Gaming-z Gems";

    const body =
        "Produit: " + window.selectedProduct +
        "%0AUID: " + uid +
        "%0ARéférence: " + ref;

    window.location.href =
        "mailto:zunorabj@gmail.com?subject=" + subject + "&body=" + body;
                                        }
