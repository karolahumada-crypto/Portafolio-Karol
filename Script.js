// ===== BOTON SUBIR + ANIMACIONES =====
const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", () => {

    // BOTON FLECHA
    if(btnTop){
        if(window.scrollY > 200){
            btnTop.classList.add("show");
        }else{
            btnTop.classList.remove("show");
        }
    }

    // ANIMACIONES SCROLL
    document.querySelectorAll(".fade-in").forEach(el => {
        let pos = el.getBoundingClientRect().top;

        if(pos < window.innerHeight - 100){
            el.classList.add("visible");
        }
    });
});

// CLICK SUBIR
if(btnTop){
btnTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
}


// ===== ACTIVAR ANIMACIONES AL CARGAR (🔥 IMPORTANTE) =====
window.addEventListener("load", () => {
    document.querySelectorAll(".fade-in").forEach(el => {
        el.classList.add("visible");
    });
});


// ===== RESEÑAS =====
let reviews = [];

const form = document.getElementById("reviewForm");
const container = document.getElementById("reviewsContainer");
const promedioText = document.getElementById("promedio");

if(form){
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const mensaje = document.getElementById("mensaje").value;
    const rating = parseInt(document.getElementById("rating").value);

    reviews.push({ nombre, mensaje, rating });

    mostrarReviews();
    calcularPromedio();

    form.reset();
});
}

function mostrarReviews() {
    if(!container) return;

    container.innerHTML = "";

    reviews.forEach((r, index) => {
        const div = document.createElement("div");
        div.classList.add("card", "p-3", "mt-2");

        div.innerHTML = `
            <h5>${r.nombre} - ${"⭐".repeat(r.rating)}</h5>
            <p>${r.mensaje}</p>
            <button class="btn btn-warning btn-sm me-2" onclick="editarReview(${index})">Editar</button>
            <button class="btn btn-danger btn-sm" onclick="eliminarReview(${index})">Eliminar</button>
        `;

        container.appendChild(div);
    });
}

function eliminarReview(i){
    reviews.splice(i,1);
    mostrarReviews();
    calcularPromedio();
}

function editarReview(i){
    let nuevo = prompt("Editar comentario:", reviews[i].mensaje);
    if(nuevo){
        reviews[i].mensaje = nuevo;
        mostrarReviews();
    }
}

function calcularPromedio(){
    if(!promedioText) return;

    if(reviews.length===0){
        promedioText.innerText="Promedio: ⭐ 0";
        return;
    }

    let total = reviews.reduce((a,b)=>a+b.rating,0);
    let prom = (total/reviews.length).toFixed(1);

    promedioText.innerText="Promedio: ⭐ "+prom;
}


// ===== CONTACTO =====
const contactForm = document.getElementById("contactForm");
const mensaje = document.getElementById("mensajeEnviado");

if(contactForm){
contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    mensaje.style.display = "block";
    contactForm.reset();
});
}


// ===== CERTIFICADOS (OPCIONAL SI USAS MODAL) =====
function verCertificado(ruta){
    const modal = document.getElementById("modalCertificado");
    const img = document.getElementById("imgCertificado");

    if(modal && img){
        img.src = ruta;
        modal.style.display = "block";
    }
}

function cerrarModal(){
    const modal = document.getElementById("modalCertificado");
    if(modal){
        modal.style.display = "none";
    }
}
