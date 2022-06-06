/* ===============
!     Save / Load Window 
                =============== */
export default function SaveLoadWindow() {
    console.log("Entered Save-Load Window function.");
    
    // Create all base Elements
    const window = document.createElement("div");
    window.id = "ID_Save_Load_Window";
    window.classList.add("Class_Window");
    window.setAttribute("data-state", "hide")
    
    const inner_window = document.createElement("div");
    inner_window.classList.add("Class_Inner_Window");
    const headline = document.createElement("h3");
    
    const textfield = document.createElement("p");
    
    // Create Buttons
    const save_load_button_div = document.createElement("div");
    save_load_button_div.classList.add("Class_Save_Load_Buttons_Div");
    
    const save_button = document.createElement("button");
    save_button.id = `Save_Button`;
    save_button.classList.add("Class_Window_Buttons");
    
    const load_button = document.createElement("button");
    load_button.id = `Load_Button`;
    load_button.classList.add("Class_Window_Buttons");
    
    const cancel_button = document.createElement("button");
    cancel_button.addEventListener("click", () => {
    window.classList.add("Class_Smooth_Out");
    // After waiting for animation end, remove window
    setTimeout(()=>{
    window.remove();
    }, 2000);
    });
    
    
    // Append content it
    inner_window.appendChild(headline);
    inner_window.appendChild(textfield);
    inner_window.appendChild(save_load_button_div);
    save_load_button_div.appendChild(save_button);
    save_load_button_div.appendChild(load_button);
    save_load_button_div.appendChild(cancel_button);
    
    // Append Layout
    window.appendChild(inner_window);
    document.body.appendChild(window);
    window.classList.add("Class_Smooth_In");
    
    //#region Translation
    
    if(Game.Language === "de"){
    window.innerText = "Speichern/Laden";
    headline.innerText = "";
    textfield.innerText = "Hier kannst du deine Spiele speichern/laden:";
    save_button.innerText = "Speichern";
    save_button.title = "Hier klicken um zu speichern!";
    save_button.alt = "Button um zu speichern.";
    load_button.innerText = "Laden";
    load_button.title = "Hier klicken um zu laden!";
    load_button.alt = "Button um zu laden."
    cancel_button.innerText = "Zurück";
    cancel_button.title = "Hier gehts zurück!";
    cancel_button.alt = "Button um zum Game Bildschirm zu kommen";
    
    } else if (Game.Language === "en"){
    window.innerText = "Save/Load Window";
    headline.innerText = "";
    textfield.innerText = "Here you can save or load your games:";
    save_button.innerText = "Save";
    save_button.title = "Click to save!";
    save_button.alt = "Button to save.";
    load_button.innerText = "Load";
    load_button.title = "Click to load!";
    load_button.alt = "Button to load."
    cancel_button.innerText = "Cancel";
    cancel_button.title = "Click to back!";
    cancel_button.alt = "Button to go back";
    };
    //#endregion
    
    /*  deutsch / english translation in settings menu
    
    saveload_h.innerText = "Speichern/Laden";
    saveload_h.title = "Speichere oder lade dein Spiel!";
    saveload_h.alt = "Hier kannst du dein Spiel speichern oder laden.";
    save_button.innerText = "Speichern";
    save_button.title = "Hier Spielstand speichern!";
    save_button.alt = "Button zum Spielstand speichern.";
    load_button.innerText = "Laden";
    load_button.title = "Hier Spielstand laden!";
    load_button.alt = "Button zum Spielstand laden."
    
    
    saveload_h.innerText = "Save/Load";
    saveload_h.title = "Save or load game!";
    saveload_h.alt = "Here you can save or load your game.";
    save_button.innerText = "Save";
    save_button.title = "Save game here!";
    save_button.alt = "Button for save game.";
    load_button.innerText = "Load";
    load_button.title = "Load game here!"";
    load_button.alt = "Button for load game.";
    
    */
    
    //#region css-template:
    /*
    
    .Class_Window{
    min-height: 30vh;
    max-height: 75vh;
    width: 50%;
    z-index: 10;
    position: absolute;
    top: 10%;
    left: 25%;
    display: grid;
    grid: 1rem auto 1rem / 1fr;
    justify-items:center;
    text-align: center;
    background-color: grey;
    border: solid 1px black;
    font-size:xx-small;
    color: white;
    text-align: center;
    }
    
    .Class_Inner_Window{
    width:  calc(100% - 2rem);
    display: grid;
    grid:  2rem auto 4rem / 1fr;
    max-block-size: 65vh;
    justify-items: center;
    align-items: center;
    background-color: white;
    color: black;
    border: solid 1px black;
    font-size: small;
    }
    
    .Class_Inner_Window p {
    align-self: center;
    margin-top: 2rem;
    height: 100%;
    overflow: scroll;  
    
    }
    
    .Class_Inner_Window input{
    height: 2rem;
    width: 60%;
    background-color: darkgray;
    text-align: center;
    border: solid 1px black;
    }
    
    .Class_Buttons_Div {
    display: flex;
    gap: 1rem;
    height: 2rem;
    }
    
    .Class_Inner_Window button{
    width: 5rem;
    height: 2rem;
    border: solid 1px black;
    }
    */
    //#endregion
    
    // console.log("New Window created.");
};