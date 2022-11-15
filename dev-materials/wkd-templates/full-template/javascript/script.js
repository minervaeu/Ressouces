//#region Table of Content
/*
!                         Project X Main-Javascript-File
?                                      powered by
!                                      Stefan Bartl
!                        (WKDSteVIE / WKDMinerva)
?                                            2022             
?                  ________________________________                                                                                                                                                                                                  
!                                     Table of content              
?                                       -) Language     
?                                       -)  Open Jobs
todo                 Javascript - what a wonderful language!
*/
//#endregion


//#region Language & Translation

// ? Setup Translation 
// get setted language from local storage or browser language and store it there
const language = localStorage.language || navigator.language;
// This is not the best way, regexp would be better to proof of 'de'
language[0] === "d" && language[1] === "e" ? localStorage.language = "de" : "en";


// ! Libraries
// If the page have less text, do library here in script.js
function English() {
}

function German() {
}

// ! or
// if there is much text, do it with translation script via
home_translation("en");
home_translation("de");

//! Set button in index.html
const languageText = document.querySelector(".language-translate");

// ? Initial Translation
localStorage.language === "en" ? English() : German();

// ? Change Language
languageText.addEventListener("click", ()=>{
  // Check for the actual language
  if(localStorage.language === "en"){
    // Invoke opposite language
    German();
    // Store new language in localStorage
    localStorage.language = "de";
  } else {
    English();
    localStorage.language = "en";
  };
})

//#endregion


//#region Open Jobs  
/*
todo    
*/
//#endregion
