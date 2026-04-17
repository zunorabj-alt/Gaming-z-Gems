/* =========================
   OPEN FORM
========================= */
function openForm(product){
document.getElementById("formBox").style.display="block";
document.querySelector(".overlay").style.display="block";
document.getElementById("productInput").value = product;
}

/* =========================
   CLOSE FORM
========================= */
function closeForm(){
document.getElementById("formBox").style.display="none";
document.querySelector(".overlay").style.display="none";
}

/* =========================
   SHOW TARIFS
========================= */
function showGame(){
let games = document.querySelector(".games");
let tarifs = document.getElementById("tarifs");

if(games && tarifs){
games.style.display="none";
tarifs.style.display="block";
}
}

/* =========================
   RETOUR
========================= */
function goBack(){
let games = document.querySelector(".games");
let tarifs = document.getElementById("tarifs");

if(games && tarifs){
games.style.display="flex";
tarifs.style.display="none";
}
}

/* =========================
   THEME TOGGLE
========================= */
function toggleTheme(){
document.body.classList.toggle("light");
}

/* =========================
   ORDER ID GENERATOR
========================= */
function generateOrderID(){
return "GZG-" + Date.now() + "-" + Math.floor(Math.random()*1000);
}

/* =========================
   SEND ORDER (FORMSPREE SAFE)
========================= */
function sendOrder(e){

// ❗ IMPORTANT: tsy asiana preventDefault
// Formspree no mandefa mail normal

let form = e.target;

// GET VALUES
let uid = form.querySelector('input[name="uid"]').value;
let ref = form.querySelector('input[name="ref"]').value;
let pseudo = form.querySelector('input[name="pseudo"]').value;
let product = document.getElementById("productInput").value;

// GENERATE ID
let orderID = generateOrderID();

/* REMOVE OLD AUTO FIELDS */
form.querySelectorAll(".auto-field").forEach(el => el.remove());

/* ADD HIDDEN FIELDS FOR EMAIL */
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

/* =========================
   POPUP RECEIPT
========================= */
document.getElementById("successBox").style.display = "flex";
document.getElementById("orderMsg").innerHTML =
"COMMANDE REÇUE 🎮🔥<br><br>" +
"ID: <b>" + orderID + "</b><br>" +
"UID: " + uid + "<br>" +
"Pseudo: " + pseudo + "<br>" +
"Référence: " + ref + "<br>" +
"Produit: " + product;

/* CLOSE FORM VISUAL */
document.getElementById("formBox").style.display = "none";
document.querySelector(".overlay").style.display = "none";

/* LET FORM SUBMIT NORMALLY */
return true;
}
