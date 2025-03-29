const bioText = "Développeur web & passionné de cybersécurité. .";
let index = 0;

function typeEffect() {
    if (index < bioText.length) {
        document.querySelector('.bio').textContent += bioText.charAt(index);
        index++;
        setTimeout(typeEffect, 50); // Vitesse de frappe (50ms par lettre)
    }
}

window.onload = typeEffect; // Démarre l'animation au chargement de la page