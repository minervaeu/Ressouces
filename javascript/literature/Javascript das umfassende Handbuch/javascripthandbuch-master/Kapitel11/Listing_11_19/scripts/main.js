'use strict';
function draw() {
  const canvas = document.getElementById('canvas');
  if (canvas.getContext){
    const context = canvas.getContext('2d');
    context.save();                  // Speichern des initialen Zustands
    context.fillStyle = '#FF0000';   // Füllfarbe rot
    context.scale(7,7);              // Skalierung
    context.fillRect(0,0,40,40);     // Zeichnen des roten Rechtecks
    context.restore();               // Zurücksetzen auf initialen Zustand
    context.save();                  // Speichern des initialen Zustands
    context.fillStyle = '#00FF00';   // Füllfarbe grün
    context.scale(6,6);              // Skalierung
    context.fillRect(0,0,40,40);     // Zeichnen des grünen Rechtecks
    context.restore();               // Zurücksetzen auf initialen Zustand
    context.save();                  // Speichern des initialen Zustands
    context.fillStyle = '#0000FF';   // Füllfarbe blau
    context.scale(5,5);              // Skalierung
    context.fillRect(0,0,40,40);     // Zeichnen des blauen Rechtecks
  }
}
document.addEventListener('DOMContentLoaded', draw);