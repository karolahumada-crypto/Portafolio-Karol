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
            <button onclick="editarReview(${index})">Editar</button>
            <button onclick="eliminarReview(${index})">Eliminar</button>
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
    if(reviews.length===0){
        promedioText.innerText="Promedio: ⭐ 0";
        return;
    }

    let total = reviews.reduce((a,b)=>a+b.rating,0);
    let prom = (total/reviews.length).toFixed(1);

    promedioText.innerText="Promedio: ⭐ "+prom;
}

/* CONTACTO */
const contactForm = document.getElementById("contactForm");
const mensaje = document.getElementById("mensajeEnviado");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    mensaje.style.display = "block";
    contactForm.reset();
});
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
    if(reviews.length===0){
        promedioText.innerText="Promedio: ⭐ 0";
        return;
    }

    let total = reviews.reduce((a,b)=>a+b.rating,0);
    let prom = (total/reviews.length).toFixed(1);

    promedioText.innerText="Promedio: ⭐ "+prom;
}

/* CONTACTO */
const contactForm = document.getElementById("contactForm");
const mensaje = document.getElementById("mensajeEnviado");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    mensaje.style.display = "block";
    contactForm.reset();
});
