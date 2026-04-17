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

// ===== GENERATE ID =====
function generateOrderID(){
return "GZG-" + Date.now() + "-" + Math.floor(Math.random()*1000);
}

// ===== ENVOI COMMANDE =====
function sendOrder(e){

// ❗ tsy atao preventDefault → Formspree no mandefa mail normal

let form = e.target;

// mamorona ID
let orderID = generateOrderID();

// apetraka ao form
let input = document.createElement("input");
input.type = "hidden";
input.name = "order_id";
input.value = orderID;
form.appendChild(input);

// aseho reçu (instant)
document.getElementById("successBox").style.display = "flex";
document.getElementById("orderMsg").innerHTML =
"Commande reçue 🎮🔥<br><br>ID: <b>"+orderID+"</b>";

// manidy popup
document.getElementById("formBox").style.display="none";
document.querySelector(".overlay").style.display="none";

// 👉 avela handeha normal ny form (return true)
return true;
}
