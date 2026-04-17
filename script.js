// ===== GENERATE ID UNIQUE =====
function generateOrderID(){
return "GZG-" + Date.now() + "-" + Math.floor(Math.random()*1000);
}

// ===== OPEN FORM =====
function openForm(product){
document.getElementById("formBox").style.display="block";
document.querySelector(".overlay").style.display="block";
document.getElementById("productInput").value = product;
}

// ===== CLOSE FORM =====
function closeForm(){
document.getElementById("formBox").style.display="none";
document.querySelector(".overlay").style.display="none";
}

// ===== SHOW TARIFS =====
function showGame(){
document.querySelector(".games").style.display="none";
document.getElementById("tarifs").style.display="block";
}

// ===== RETOUR =====
function goBack(){
document.querySelector(".games").style.display="flex";
document.getElementById("tarifs").style.display="none";
}

// ===== DARK / LIGHT MODE =====
function toggleTheme(){
document.body.classList.toggle("light");
}

// ===== ENVOI COMMANDE =====
function sendOrder(e){
e.preventDefault();

let form = e.target;
let orderID = generateOrderID();

// AJOUT ID AO FORM
let input = document.createElement("input");
input.type="hidden";
input.name="order_id";
input.value=orderID;
form.appendChild(input);

// ASEHO REÇU
document.getElementById("successBox").style.display="flex";
document.getElementById("orderMsg").innerHTML =
"Commande reçue 🎮🔥<br><br>ID: <b>"+orderID+"</b>";

// ALEFA EMAIL
fetch(form.action,{
method:"POST",
body:new FormData(form),
headers:{ 'Accept':'application/json' }
});

// FERMER FORM
document.getElementById("formBox").style.display="none";
document.querySelector(".overlay").style.display="none";

return false;
  }
