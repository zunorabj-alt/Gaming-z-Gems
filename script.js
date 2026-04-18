let cart=[];
let qty=1;

/* ADD */
function addToCart(e,product){
e.stopPropagation();
cart.push({product,qty:1});
updateCart();
openForm(product);
}

/* CART */
function updateCart(){
document.getElementById("cartCount").innerText=cart.length;
}

function openCart(){
document.getElementById("cartBox").style.display="block";
renderCart();
}

function closeCart(){
document.getElementById("cartBox").style.display="none";
}

function renderCart(){
let box=document.getElementById("cartItems");
box.innerHTML="";
cart.forEach(i=>{
box.innerHTML+="<p>"+i.product+" x"+i.qty+"</p>";
});
}

/* SEARCH */
function searchItems(){
let v=document.getElementById("searchBar").value.toLowerCase();
document.querySelectorAll(".card").forEach(c=>{
c.style.display=c.innerText.toLowerCase().includes(v)?"block":"none";
});
}

/* FORM */
function openForm(product){
document.getElementById("formBox").style.display="block";
document.getElementById("selectedProduct").innerText=product;
document.getElementById("productInput").value=product;
}

function changeQty(v){
qty+=v;
if(qty<1)qty=1;
document.getElementById("qty").innerText=qty;
}

/* NAV */
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

/* RECEIPT */
function downloadReceipt(){
let text="Commande:\n";
cart.forEach(i=>text+=i.product+"\n");

let b=new Blob([text],{type:"text/plain"});
let a=document.createElement("a");
a.href=URL.createObjectURL(b);
a.download="recu.txt";
a.click();
}

/* ORDER */
function sendOrder(e){
e.preventDefault();
document.getElementById("successBox").style.display="flex";
document.getElementById("orderMsg").innerText="Commande envoyée";
return false;
}

/* HELP */
function openHelp(){
alert("Aide bientôt disponible");
  }
