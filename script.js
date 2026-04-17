function openForm(product){
document.getElementById("formBox").style.display="block";
document.querySelector(".overlay").style.display="block";
document.getElementById("productInput").value = product;
}

function closeForm(){
document.getElementById("formBox").style.display="none";
document.querySelector(".overlay").style.display="none";
}

function showGame(){
document.querySelector(".games").style.display="none";
document.getElementById("tarifs").style.display="block";
}

function goBack(){
document.querySelector(".games").style.display="flex";
document.getElementById("tarifs").style.display="none";
}

function toggleTheme(){
document.body.classList.toggle("light");
}

function generateOrderID(){
return "GZG-" + Date.now() + "-" + Math.floor(Math.random()*1000);
}

function sendOrder(e){

let form = e.target;
let orderID = generateOrderID();

let input = document.createElement("input");
input.type="hidden";
input.name="order_id";
input.value=orderID;
form.appendChild(input);

document.getElementById("successBox").style.display="flex";
document.getElementById("orderMsg").innerHTML =
"Commande reçue 🎮🔥<br><br>ID: <b>"+orderID+"</b>";

document.getElementById("formBox").style.display="none";
document.querySelector(".overlay").style.display="none";

return true;
}
