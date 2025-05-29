const modal = document.getElementById("mi-proyecto");
const modalTitulo = document.getElementById("modal-titulo");
const modalDescripcion = document.getElementById("modal-descripcion");
const modalVideo = document.getElementById("modal-video");
const cerrarModal = document.querySelector(".cerrar-proyecto");

document.querySelectorAll(".abrir-proyecto").forEach(imagen => {
    imagen.addEventListener("click", () => {
        const videoURL = imagen.getAttribute("data-video");
        const titulo = imagen.getAttribute("data-titulo");
        const descripcion = imagen.getAttribute("data-descripcion");

        modalTitulo.textContent = titulo;
        modalDescripcion.textContent = descripcion;
        modalVideo.src = videoURL;

        modal.style.display = "flex";
    });
});

cerrarModal.addEventListener("click", () => {
    modal.style.display = "none";
    modalVideo.src = ""; // detiene el video
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        modalVideo.src = "";
    }
});
