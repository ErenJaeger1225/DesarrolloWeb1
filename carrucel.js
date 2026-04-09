// Selecciona el contenedor que contiene todas las imágenes (el que se va a mover)
const carouselContainer = document.querySelector('.carousel-container');

// Selecciona todas las diapositivas (las imágenes) y las guarda en un NodeList
const slides = document.querySelectorAll('.slide');

// Selecciona el botón de "anterior"
const prevBtn = document.querySelector('.prev-btn');

// Selecciona el botón de "siguiente"
const nextBtn = document.querySelector('.next-btn');

// Variable que guarda en qué imagen estamos actualmente (empieza en la primera)
let currentIndex = 0;


// Función que mueve el carrusel a la posición correcta
function updateCarousel() {
    // Calcula cuánto debe moverse hacia la izquierda (en porcentaje)
    const offset = -currentIndex * 100;
    
    // Aplica el movimiento usando transform
    carouselContainer.style.transform = `translateX(${offset}%)`;
}


// ==================== EVENTO BOTÓN SIGUIENTE ====================

// Cuando se haga clic en el botón "Siguiente"...
nextBtn.addEventListener('click', () => {
    
    // Avanza al siguiente índice. El % slides.length hace que vuelva al inicio cuando llegue al final (ciclo infinito)
    currentIndex = (currentIndex + 1) % slides.length;
    
    // Actualiza la posición visual del carrusel
    updateCarousel();
});


// ==================== EVENTO BOTÓN ANTERIOR ====================

// Cuando se haga clic en el botón "Anterior"...
prevBtn.addEventListener('click', () => {
    
    // Retrocede al índice anterior. La fórmula evita números negativos y hace el ciclo infinito
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    
    // Actualiza la posición visual del carrusel
    updateCarousel();
});