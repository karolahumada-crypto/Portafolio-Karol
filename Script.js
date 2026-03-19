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
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// RESEÑAS
let reviews = [];

const form = document.getElementById("reviewForm");
const container = document.getElementById("reviewsContainer");
const promedioText = document.getElementById("promedio");

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

function mostrarReviews() {
    container.innerHTML = "";

    reviews.forEach((r, index) => {
        const div = document.createElement("div");
        div.classList.add("card", "p-3", "mt-2");

        div.innerHTML = `
            <h5>${r.nombre} - ${"⭐".repeat(r.rating)}</h5>
            <p>${r.mensaje}</p>
        `;

        container.appendChild(div);
    });
}

function calcularPromedio(){
    if(reviews.length===0){
        promedioText.innerText="Promedio: ⭐ 0";
        return;
    }

    let total = reviews.reduce((a,b)=>a+b.rating,0);
    let prom = (total/reviews.length).toFixed(1);

    promedioText.innerText="Promedio: ⭐ "+prom;
}

// CONTACTO
const contactForm = document.getElementById("contactForm");
const mensaje = document.getElementById("mensajeEnviado");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    mensaje.style.display = "block";
    contactForm.reset();
});
