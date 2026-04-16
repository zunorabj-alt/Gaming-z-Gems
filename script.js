function showGame(){
document.querySelector(".games").style.display="none";
document.getElementById("tarifs").style.display="block";
}

function goBack(){
document.querySelector(".games").style.display="flex";
document.getElementById("tarifs").style.display="none";
closeForm();
}

function openForm(product){
document.getElementById("formBox").style.display="block";
document.getElementById("overlay").style.display="block";
document.getElementById("productInput").value=product;
}

function closeForm(){
document.getElementById("formBox").style.display="none";
document.getElementById("overlay").style.display="none";
}

function sendOrder(event){
event.preventDefault();

document.getElementById("successBox").style.display="flex";

setTimeout(()=>{
event.target.submit();
},1200);

return false;
}

/* 🌙 THEME TOGGLE */
function toggleTheme(){
document.body.classList.toggle("light");

let btn=document.querySelector(".theme-toggle");

if(document.body.classList.contains("light")){
btn.innerHTML="☀️";
}else{
btn.innerHTML="🌙";
}
}
