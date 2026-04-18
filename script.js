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
e.preventDefault();

let form = e.target;

let uid = form.querySelector('input[name="uid"]').value;
let ref = form.querySelector('input[name="ref"]').value;
let pseudo = form.querySelector('input[name="pseudo"]').value;
let product = document.getElementById("productInput").value;

/* add qty */
product = product + " x" + qty;

let orderID = generateOrderID();

/* REMOVE OLD HIDDEN FIELDS */
form.querySelectorAll(".auto-field").forEach(el => el.remove());

function addField(name,value){
let input = document.createElement("input");
input.type = "hidden";
input.name = name;
input.value = value;
input.classList.add("auto-field");
form.appendChild(input);
}

addField("order_id", orderID);
addField("uid_copy", uid);
addField("ref_copy", ref);
addField("pseudo_copy", pseudo);
addField("product_copy", product);

/* SUCCESS POPUP */
document.getElementById("successBox").style.display = "flex";

document.getElementById("orderMsg").innerHTML =
"🎮 COMMANDE REÇUE<br><br>" +
"ID: <b>" + orderID + "</b><br>" +
"UID: " + uid + "<br>" +
"Pseudo: " + pseudo + "<br>" +
"Référence: " + ref + "<br>" +
"Produit: " + product;

/* CLOSE FORM */
document.getElementById("formBox").classList.remove("show");
document.querySelector(".overlay").style.display = "none";

/* reset qty */
qty = 1;
document.getElementById("qtyValue").innerText = qty;

return true;
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
