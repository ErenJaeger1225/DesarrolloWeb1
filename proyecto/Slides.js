
// Esperamos a que la página cargue completamente
document.addEventListener("DOMContentLoaded", () => {
    
    const wrappers = document.querySelectorAll('.carousel-wrapper');

    wrappers.forEach((wrapper, index) => {
        console.log(`Carrusel ${index + 1} encontrado`); // Para debug

        const slidesContainer = wrapper.querySelector('.slides');
        const slides = wrapper.querySelectorAll('.slide');
        const prevBtn = wrapper.querySelector('.izquierda');
        const nextBtn = wrapper.querySelector('.derecha');

        if (!slidesContainer || slides.length === 0) {
            console.error("Error: No se encontraron slides en el carrusel", index + 1);
            return;
        }

        let currentIndex = 0;

        function updateSlide() {
            const offset = currentIndex * 100;
            slidesContainer.style.transform = `translateX(-${offset}%)`;
        }

        // Botón Siguiente
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlide();
        });

        // Botón Anterior
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlide();
        });

        // Opcional: Auto slide cada 5 segundos
        // setInterval(() => {
        //     currentIndex = (currentIndex + 1) % slides.length;
        //     updateSlide();
        // }, 5000);
    });
});