//#region //?   Table of Content
/*
!                         Portfolio Main-Javascript-File
?                                      powered by
!                                      Stefan Bartl
!                        (WKDSteVIE / WKDMinerva)
?                                            2021             
?                  ________________________________                                                                                                                                                                                                  
!                                     Table of content              
?                                       1) Language     
?                                       2) Audio
?                                       3)  Open Jobs
todo                 Javascript - what a wonderful language!
*/
//#endregion

//#region //?   Language 

// get setted language from local storage or browser language 
const language = localStorage.language || navigator.language;

// set correct language
general_translation(language);
home_translation(language);

//#endregion

//#region //?   Audio

// get music file, load &  loop it
const audio = new Audio("folder_audio/inkompetech_com/Late Night Radio.mp3");
audio.load();
audio.loop = true;

// ! Event-Listener for toggling Audio-Button 
audio_div.addEventListener("click",  () => {
localStorage.Sound !== "on" 
    ? localStorage.Sound = "on" 
    : localStorage.Sound = "off"; 
    audio_settings();
})
// ! Audio settings for toggling, between playing & pausing audio and store in localStorage
function audio_settings (){
//console.log(`Èntered Audio-Settings Function in script.js.`);

// load correct sound toggle image 
localStorage.Sound !== "on" 
    ? musicnote.src = "folder_graphics/folder_images/music_notes_dance/music_notes_dance_grey_bg.png"
    : musicnote.src = "folder_graphics/folder_images/music_notes_dance/music_notes_dance_orange_bg.png";
    
 // toggle sound text language
if  (language === "de"){    // Deutsch
localStorage.Sound !== "on" 
    ? audio_text.innerText = "aus" 
    : audio_text.innerText = "an";
} else {                              //English
    localStorage.Sound !== "on" 
    ? audio_text.innerText = "off" 
    : audio_text.innerText = "on";
}

// toggle sound text colour
localStorage.Sound !== "on"
    ? audio_div.setAttribute("data-sound", "off")
    : audio_div.setAttribute("data-sound", "on");

// Play or Pause Sound
    localStorage.Sound === "on" ?  audio.play() : audio.pause();
    
//console.log(`Audio toggle completed, Sound setted to ${localStorage.Sound || 'off'}.`);
};

// todo Invoke Audio
audio_settings();


//#endregion

//#region //?   Open Jobs  
/*
todo    3-D Page concept ? 
*/
//#endregion
