// Obtener referencias a los botones y el menú
const toggleBackgroundButton = document.getElementById('toggleBackgroundButton');
const gameMenu = document.querySelector('.game-menu');

// Manejar el evento de presionar el botón de fondo
toggleBackgroundButton.addEventListener('mousedown', function() {
    gameMenu.style.display = 'none'; // Ocultar el menú cuando se presione el botón
});

toggleBackgroundButton.addEventListener('mouseup', function() {
    gameMenu.style.display = 'flex'; // Mostrar el menú nuevamente cuando se suelte el botón
});
