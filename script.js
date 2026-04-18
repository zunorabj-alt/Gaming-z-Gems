/* =========================
        GLOBALS
========================= */
let cart = [];
let qty = 1;

/* =========================
        OPEN POPUP
========================= */
function openForm(product){

let popup = document.getElementById("formBox");
let overlay = document.querySelector(".overlay");

popup.classList.add("show");
overlay.style.display = "block";

document.getElementById("productInput").value = product;

/* reset qty chaque ouverture */
qty = 1;
document.getElementById("qtyValue").innerText = qty;
}

/* =========================
        CLOSE POPUP
========================= */
function closeForm(){
let popup = document.getElementById("formBox");
let overlay = document.querySelector(".overlay");

popup.classList.remove("show");

setTimeout(()=>{
overlay.style.display = "none";
},200);
}

/* =========================
        TARIFS VIEW
========================= */
function showGame(){
document.querySelector(".games").style.display = "none";
document.getElementById("tarifs").style.display = "block";
}

/* RETOUR */
function goBack(){
document.querySelector(".games").style.display = "flex";
document.getElementById("tarifs").style.display = "none";
}

/* =========================
        THEME
========================= */
function toggleTheme(){
document.body.classList.toggle("light");
}

/* =========================
        ORDER ID
========================= */
function generateOrderID(){
return "GZG-" + Date.now() + "-" + Math.floor(Math.random()*1000);
}

/* =========================
        CART SYSTEM
========================= */
function addToCart(product){
cart.push(product);
document.getElementById("cartCount").innerText = cart.length;
}

/* open cart */
function openCart(){
alert("🛒 PANIER:\n\n" + cart.join("\n"));
}

/* =========================
        QTY SYSTEM
========================= */
function changeQty(value){
qty += value;
if(qty < 1) qty = 1;
document.getElementById("qtyValue").innerText = qty;
}

/* =========================
        SEARCH
========================= */
function searchItems(){
let input = document.getElementById("searchInput").value.toLowerCase();
let cards = document.querySelectorAll(".card");

cards.forEach(card=>{
let text = card.innerText.toLowerCase();
card.style.display = text.includes(input) ? "block" : "none";
});
}

/* =========================
        SEND ORDER
========================= */
function sendOrder(e){
e.preventDefault(); // mbola ilaina

let form = e.target;

let uid = form.querySelector('input[name="uid"]').value;
let ref = form.querySelector('input[name="ref"]').value;
let pseudo = form.querySelector('input[name="pseudo"]').value;
let email = form.querySelector('input[name="email"]').value;
let product = document.getElementById("productInput").value;

let orderID = "GZG-" + Date.now();

/* ADD ORDER ID TO FORMSPREE */
let idInput = document.createElement("input");
idInput.type = "hidden";
idInput.name = "order_id";
idInput.value = orderID;
form.appendChild(idInput);

/* SHOW SUCCESS */
document.getElementById("successBox").style.display="flex";
document.getElementById("orderMsg").innerHTML =
"✔ COMMANDE ENVOYÉE<br><br>ID: <b>"+orderID+"</b><br>Produit: "+product;

/* IMPORTANT: submit manually to Formspree */
setTimeout(()=>{
form.submit();
},500);

return false;
}

/* =========================
        SAVE RECEIPT
========================= */
function saveReceipt(){
let text = document.getElementById("orderMsg").innerText;

let blob = new Blob([text], {type:"text/plain"});
let link = document.createElement("a");

link.href = URL.createObjectURL(blob);
link.download = "recu-commande.txt";
link.click();
}

/* =========================
        HELP BUTTON
========================= */
function openHelp(){
alert("📌 AIDE:\n\n1. Choisissez un produit\n2. Cliquez 'au panier' ou ouvrez formulaire\n3. Validez commande\n4. Téléchargez reçu si besoin");
              }
