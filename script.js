/* LOADING */
function showLoading(text, cb){
let l=document.getElementById("loadingScreen");
let t=document.getElementById("loadingText");

t.innerText=text||"Chargement...";
l.style.display="flex";

setTimeout(()=>{
l.style.display="none";
if(cb)cb();
},500);
}

/* GAME */
function showGame(){
showLoading("Ouverture des tarifs...",()=>{
document.getElementById("games").style.display="none";
document.getElementById("tarifs").style.display="block";
});
}

/* OPEN FORM */
function openForm(product){
showLoading("Chargement commande...",()=>{
document.getElementById("formBox").classList.add("show");
document.querySelector(".overlay").style.display="block";
document.getElementById("productInput").value=product;
});
}

/* CLOSE */
function closeForm(){
document.getElementById("formBox").classList.remove("show");
document.querySelector(".overlay").style.display="none";
}

/* THEME */
function toggleTheme(){
document.body.classList.toggle("light");
}

/* ID */
function generateOrderID(){
return "GZG-"+Date.now();
}

/* SEND */
function sendOrder(e){

let form=e.target;

let uid=form.uid.value;
let pseudo=form.pseudo.value;
let ref=form.ref.value;
let product=document.getElementById("productInput").value;

let id=generateOrderID();

document.getElementById("successBox").style.display="flex";

document.getElementById("orderMsg").innerHTML=
"ID:"+id+"<br>UID:"+uid+"<br>Pseudo:"+pseudo+"<br>Produit:"+product;

document.getElementById("formBox").classList.remove("show");
document.querySelector(".overlay").style.display="none";

return true;
}
