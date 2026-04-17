/* OPEN POPUP */
function openForm(product){
let popup = document.getElementById("formBox");
let overlay = document.querySelector(".overlay");

popup.classList.add("show");
overlay.style.display="block";

document.getElementById("productInput").value = product;
}

/* CLOSE POPUP */
function closeForm(){
let popup = document.getElementById("formBox");
let overlay = document.querySelector(".overlay");

popup.classList.remove("show");

setTimeout(()=>{
overlay.style.display="none";
},200);
}

/* SHOW TARIFS */
function showGame(){
document.querySelector(".games").style.display="none";
document.getElementById("tarifs").style.display="block";
}

/* RETOUR */
function goBack(){
document.querySelector(".games").style.display="flex";
document.getElementById("tarifs").style.display="none";
}

/* THEME */
function toggleTheme(){
document.body.classList.toggle("light");
}

/* ID */
function generateOrderID(){
return "GZG-" + Date.now() + "-" + Math.floor(Math.random()*1000);
}

/* SEND ORDER */
function sendOrder(e){

let form = e.target;

let uid = form.querySelector('input[name="uid"]').value;
let ref = form.querySelector('input[name="ref"]').value;
let pseudo = form.querySelector('input[name="pseudo"]').value;
let product = document.getElementById("productInput").value;

let orderID = generateOrderID();

/* REMOVE OLD */
form.querySelectorAll(".auto-field").forEach(el => el.remove());

function addField(name,value){
let input=document.createElement("input");
input.type="hidden";
input.name=name;
input.value=value;
input.classList.add("auto-field");
form.appendChild(input);
}

addField("order_id",orderID);
addField("uid_copy",uid);
addField("ref_copy",ref);
addField("pseudo_copy",pseudo);
addField("product_copy",product);

/* POPUP */
document.getElementById("successBox").style.display="flex";
document.getElementById("orderMsg").innerHTML =
"COMMANDE REÇUE 🎮🔥<br><br>ID: <b>"+orderID+"</b><br>"+
"UID: "+uid+"<br>"+
"Pseudo: "+pseudo+"<br>"+
"Référence: "+ref+"<br>"+
"Produit: "+product;

/* CLOSE FORM */
document.getElementById("formBox").classList.remove("show");
document.querySelector(".overlay").style.display="none";

return true;
}
