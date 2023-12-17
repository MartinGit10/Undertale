// game.js
let enemyHealth = 100;

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
