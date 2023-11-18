'use strict';

// Variablen zuordnen
const button = document.querySelector('button');
const body = document.querySelector('body');
const hexCode = document.querySelector('.container__hexcode');

// alle möchlichen Ziffern und Buchstaben für den Hex-Code festlegen
const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

// Funktion zum Erzeugen des Hex-Codes
function flipcolor() {
    let hex = '#';

    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * hexValues.length);
        hex += hexValues[index];
    }

    body.style.backgroundColor = hex;
    hexCode.textContent = hex;
}

// Eventlistener hinzufügen
button.addEventListener('click', flipcolor);