'use strict';
function init() {
  const idbFactory = window.indexedDB;
  const request = idbFactory.open('TestDatabase', 9);
  request.onerror = (event) => {
    const error = event.target.error;
    console.error(error.message);
  };
  request.onsuccess = (event) => {
    const database = event.target.result;
    const transaction = database.transaction(                 // Öffnen der Transaktion
      'Books',
      'readwrite'                                             // Schreibender Zugriff
    );
    const objectStore = transaction.objectStore('Books');     // Öffnen des Objektspeichers
    const request = objectStore.delete('978-3-8362-7272-8');  // Löschvorgang
    request.onerror = (event) => {                            // Event-Handler für Fehlerfall
      console.error(event.target.error.message);              // Ausgabe der Fehlermeldung
    };
    request.onsuccess = (event) => {                          // Event-Handler für Normalfall
      // Löschvorgang erfolgreich
      console.log('Objekt gelöscht');
    };
  };

}
document.addEventListener('DOMContentLoaded', init);