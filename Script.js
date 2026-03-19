// BOTON SUBIR
const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", () => {
    if(window.scrollY > 200){
        btnTop.classList.add("show");
    }else{
        btnTop.classList.remove("show");
    }
});

btnTop.addEventListener("click", () => {
    window.scrollTo({top:0, behavior:"smooth"});
});

// RESEÑAS
let reviews=[];

document.getElementById("reviewForm").addEventListener("submit",e=>{
e.preventDefault();

let nombre=document.getElementById("nombre").value;
let mensaje=document.getElementById("mensaje").value;

reviews.push({nombre,mensaje});

let div=document.createElement("div");
div.innerHTML=`<p>${nombre}: ${mensaje}</p>`;

document.getElementById("reviewsContainer").appendChild(div);
});

// CONTACTO
document.getElementById("contactForm").addEventListener("submit",e=>{
e.preventDefault();
document.getElementById("mensajeEnviado").style.display="block";
});
