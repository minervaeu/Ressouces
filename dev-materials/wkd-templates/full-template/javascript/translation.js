/* =============================
?   === navbar language toggle button ===
    ============================= */
document.querySelector(".navlist-language").addEventListener("click", () => {
// if  'deutsch' or 'english' in the navbar is clicked, set localstorage either to "de" or to "en"
document.querySelector(".navlist-language").innerText === "english"
    ? (localStorage.language = "en")
    : (localStorage.language = "de");
// than invoke translation of page
general_translation(localStorage.language);
//console.log(`Language setted to ${localStorage.language}.`);
});

/* =========================== 
?   === general components library ===
    =========================== */
function general_translation(language) {
  //? navbar
  if(document.querySelector(".navlist")){
        //?  navbar deutsch
        if (language === "de") {
          navlist_start.innerText = "start";
          navlist_start.title = "Zurück zum Start!";
          navlist_start.alt = "Zurück zum Start.";
          navlist_projects.innerText = "projekte";
          navlist_projects.title = "Zu den Projekten!";
          navlist_projects.alt = "Zu den Projekten.";
          navlist_contact.innerText = "kontakt";
          navlist_contact.title = "Zu den Kontaktöglichkeiten!";
          navlist_contact.alt = "Zu den Kontaktöglichkeiten.";
          navlist_about.innerText = "über";
          navlist_about.title = "Über diese Seite und meine Person!";
          navlist_about.alt = "Über diese Seite und meine Person.";
          navlist_language.innerText = "english";
          navlist_language.title = "Switch to English!";
          navlist_language.alt = "Switch to English.";
          //console.log(`Navbar translated to Deutsch`);
        };
        //? navbar english
        if (language !== "de") {
          navlist_start.innerText = "home";
          navlist_start.title = "Back to home!";
          navlist_start.alt = "Back to home.";
          navlist_projects.innerText = "projects";
          navlist_projects.title = "Go to projects!";
          navlist_projects.alt = "Go to projects.";
          navlist_contact.innerText = "contact";
          navlist_contact.title = "Go to contact!";
          navlist_contact.alt = "To contact.";
          navlist_about.innerText = "about";
          navlist_about.title = "About this site ans me as person!";
          navlist_about.alt = "About this site and me as person.";
          navlist_language.innerText = "deutsch";
          navlist_language.title = "Zu Deutsch wechseln!";
          navlist_language.alt = "Zu Deutsch wechseln.";
          //console.log(`Navbar translated to English`);
        };
  };
};
  