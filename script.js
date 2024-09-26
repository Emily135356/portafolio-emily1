// Script para mostrar y ocultar secciones
function showSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.classList.add('hidden'); // Oculta todas las secciones
    });
    document.getElementById(sectionId).classList.remove('hidden'); // Muestra la sección seleccionada
}

// Inicialmente mostrar la sección de inicio
document.addEventListener('DOMContentLoaded', () => {
    showSection('inicio');
});
