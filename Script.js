function mostrarSeccion(id) {
  const secciones = document.querySelectorAll('.seccion');

  secciones.forEach(sec => {
    sec.classList.remove('activo');
  });

  document.getElementById(id).classList.add('activo');
}

window.onload = () => {
  mostrarSeccion('inicio');
};
