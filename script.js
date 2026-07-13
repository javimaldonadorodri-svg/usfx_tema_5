// ===== Sistema de pestañas =====
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        // Quitar active de todos
        tabButtons.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        // Activar el seleccionado
        this.classList.add('active');
        const target = document.getElementById(this.dataset.tab);
        if (target) target.classList.add('active');
    });
});

// ===== Sistema de soluciones =====
const solutionButtons = document.querySelectorAll('.solution-btn');

solutionButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        const targetId = this.dataset.solution;
        const answerDiv = document.getElementById(targetId);

        if (answerDiv) {
            // Alternar la clase "show"
            answerDiv.classList.toggle('show');

            // Cambiar el texto del botón
            if (answerDiv.classList.contains('show')) {
                this.textContent = 'Ocultar solución';
            } else {
                this.textContent = 'Mostrar solución';
            }
        }
    });
});

console.log('📐 Página didactizada de MCD y mcm cargada correctamente.');