// game.js
let enemyHealth = 100;
let enemySmallDirection = 1; // 1 para derecha, -1 para izquierda
const enemySmallSpeed = 2; // Ajusta la velocidad según sea necesario

document.getElementById('attack-btn').addEventListener('click', () => {
    const damage = Math.floor(Math.random() * 10) + 1; // Daño aleatorio entre 1 y 10
    enemyHealth -= damage;

    if (enemyHealth <= 0) {
        alert('¡Has derrotado al enemigo!');
        resetBattle();
    } else {
        document.getElementById('enemy-health').innerText = `Enemy Health: ${enemyHealth}`;
    }
});

function resetBattle() {
    enemyHealth = 100;
    document.getElementById('enemy-health').innerText = `Enemy Health: ${enemyHealth}`;
}

function moveEnemySmall() {
    const enemySmall = document.getElementById('enemy-small');
    const enemySmallPosition = parseInt(getComputedStyle(enemySmall).left);
    
    // Cambiar la dirección cuando alcanza los bordes
    if (enemySmallPosition <= 0 || enemySmallPosition >= 180) {
        enemySmallDirection *= -1;
    }

    // Mover el cuadrado rojo
    enemySmall.style.left = (enemySmallPosition + enemySmallSpeed * enemySmallDirection) + 'px';

    // Llamada recursiva para animación continua
    requestAnimationFrame(moveEnemySmall);
}

// Iniciar la animación cuando se carga la página
moveEnemySmall();
