
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


// ===== ACTIVAR ANIMACIONES AL CARGAR =====
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

        // CLASES + ESTILO PRO
        div.className = "card p-3 mt-3 text-white";
        div.style.background = "rgba(0,0,0,0.7)";
        div.style.border = "1px solid rgba(168,85,247,0.3)";
        div.style.borderRadius = "10px";
        div.style.boxShadow = "0 0 15px rgba(168,85,247,0.3)";

        div.innerHTML = `
            <h5 style="color:#67e8f9">${r.nombre} - ${"⭐".repeat(r.rating)}</h5>
            <p>${r.mensaje}</p>
            <button class="btn btn-sm me-2 editar-btn">Editar</button>
            <button class="btn btn-sm eliminar-btn">Eliminar</button>
        `;

        // BOTONES CON ESTILO PRO
        const editarBtn = div.querySelector(".editar-btn");
        const eliminarBtn = div.querySelector(".eliminar-btn");

        editarBtn.style.background = "linear-gradient(135deg,#22d3ee,#a855f7)";
        editarBtn.style.border = "none";
        editarBtn.style.color = "white";

        eliminarBtn.style.background = "linear-gradient(135deg,#ef4444,#dc2626)";
        eliminarBtn.style.border = "none";
        eliminarBtn.style.color = "white";

        editarBtn.onclick = () => editarReview(index);
        eliminarBtn.onclick = () => eliminarReview(index);

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
const mensajeEnviado = document.getElementById("mensajeEnviado");

if(contactForm){
contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    mensajeEnviado.style.display = "block";
    mensajeEnviado.style.color = "#22c55e";
    mensajeEnviado.style.textShadow = "0 0 10px rgba(34,197,94,0.7)";

    contactForm.reset();
});
}


// ===== CERTIFICADOS =====
function verCertificado(ruta){
    const modal = document.getElementById("modalCertificado");
    const img = document.getElementById("imgCertificado");

    if(modal && img){
        img.src = ruta;
        modal.style.display = "flex";
        modal.style.background = "rgba(0,0,0,0.8)";
    }
}

function cerrarModal(){
    const modal = document.getElementById("modalCertificado");
    if(modal){
        modal.style.display = "none";
    }
}

// TODO TU JS ORIGINAL AQUÍ (NO CAMBIA)


// ===== SPA =====
function mostrarSeccion(id) {
    const secciones = document.querySelectorAll('.seccion');

    secciones.forEach(sec => {
        sec.classList.remove('activo');
    });

    const activa = document.getElementById(id);
    if(activa){
        activa.classList.add('activo');
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

window.addEventListener("load", () => {
    mostrarSeccion("inicio");
});
