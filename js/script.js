/* Efecto deslizar */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const objetivo = document.querySelector(this.getAttribute('href'));
      const posicion_objetivo = objetivo.offsetTop -40;
      const posicion_inicial = window.pageYOffset;
      const distancia = posicion_objetivo - posicion_inicial;
      const duracion = 1200;
      let inicio = null;
  
      function animationScroll(marca_tiempo) {
        if (!inicio) inicio = marca_tiempo;
        const progreso = marca_tiempo - inicio;
        const transicion = easeInOutCubic(progreso / duracion);
        window.scrollTo(0, posicion_inicial + distancia * transicion);
  
        if (progreso < duracion) {
          requestAnimationFrame(animationScroll);
        }
      }
      function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      }

      requestAnimationFrame(animationScroll);
    });
  });
  

/* Formulario */

const formulario = document.getElementById("miformulario");
const abrir_boton = document.querySelectorAll(".abrir-formulario");
const cerrar_boton = document.getElementById("boton-cerrar");

document.addEventListener("DOMContentLoaded", () => {
    formulario.style.display = "none";
});

abrir_boton.forEach(btn => {
    btn.addEventListener("click", () => {
        formulario.style.display = "flex";
    });
});

cerrar_boton.addEventListener("click", () => {
    formulario.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === formulario) {
        formulario.style.display = "none";
    }
});
