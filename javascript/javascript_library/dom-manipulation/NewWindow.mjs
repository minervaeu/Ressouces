/* =============================================
!     Create own Notification / Alert /  Prompt / Confirm - Windows 
            ============================================= */
export default function NewWindow(options) {
    // console.log("Entered New Window function.");
    
    // Set up parameter list
    const _id = options.ID,
        _name = options.Name,
        _text = options.Text,
        _alert = options.Alert,
        _confirm = options.Confirm,
        _prompt = options.Prompt,
        _variable = options.Variable;
    
    // Create all base Elements
    const window = document.createElement("div");
    window.id = _id;
    window.classList.add("Class_Window");
    window.draggable = true;
    
    if (_alert === true) {
        window.innerText = "Alert Window";
    } else if (_confirm === true) {
        window.innerText = "Confirm Window";
    } else if (_prompt === true) {
        window.innerText = "Prompt Window";
    } else {
        window.innerText = "Notification Window";
    }
    
    const inner_window = document.createElement("div");
    inner_window.classList.add("Class_Inner_Window");
    const headline = document.createElement("h3");
    headline.innerText = _name;
    
    const textfield = document.createElement("p");
    textfield.innerText = _text;
    
    const button_div = document.createElement("div");
    button_div.classList.add("Class_Buttons_Div");
    
    // Append
    inner_window.appendChild(headline);
    inner_window.appendChild(textfield);
    inner_window.appendChild(button_div);
    
    // Create Cancel Button to make Confirm-Window
    if (_confirm === true || _prompt === true) {
        const cancel_button = document.createElement("button");
        cancel_button.innerText = "Cancel";
        cancel_button.addEventListener("click", () => {
        window.classList.add("Class_Smooth_Out");
        // After waiting for animation end, remove window
        setTimeout(()=>{
            window.remove();
        }, 100);
        });
        button_div.appendChild(cancel_button);
    };
    
    // Create Confirm Button
        // Create OK Button
        const confirm_button = document.createElement("button");
        confirm_button.id = `${_id}_OK_Button`;
        confirm_button.classList.add("Class_Window_Buttons");
        confirm_button.innerText = "OK";
        confirm_button.addEventListener("click", () => {
        window.classList.add("Class_Smooth_Out");
        // After waiting for animation end, remove window
        setTimeout(()=>{
            window.remove();
        }, 100);
        });
        button_div.appendChild(confirm_button);
    
    // Invoke-Example Confirm: NewWindow({ID: "ID_Test_Window", Name: "Test Window", Text: "Test Test Test", Confirm: true, Variable: "Tester"}); Find Confirm Boolean: Windows.Tester
    
    window.appendChild(inner_window);
    document.body.appendChild(window);
    window.classList.add("Class_Smooth_In");
    
    // Create Input-Text and add it
    if (_prompt === true) {
        const user_input = document.createElement("input");
        user_input.type = "text";
        user_input.id = `${_id}_textinput`;
        user_input.classList.add("Class_Window_User_Input");
        inner_window.insertBefore(user_input, inner_window.children[3]);
    // If prompt and user clicked OK, send user input to....
        confirm_button.addEventListener("click", () => {
            //Example from "Four Wins"-Project:
            Game[`${_id}_userInput`] = document.getElementById(`${_id}_textinput`).value;
        });
    };
        // Invoke Example Prompt: NewWindow({ID: "ID_Test_Window", Name: "Test Window", Text: "Test Test Test", Prompt: true, Variable: "Tester"}); Find Input value: Windows.Tester
    
    /*
    ?                                                Infobox: 
    ! Example:
    document.getElementById("Window_OK_Button").addEventListener("click", ()=>{
    localStorage.clear();
    console.log("Local Storage deleted");
    document.getElementById("Window").classList.add("Class_Smooth_Out");
    // After waiting for animation end, remove window
    setTimeout(()=>{
    document.getElementById("Window").remove();
    }, 2000);
    });
    
    Cancel Button removes windows by itself.
    Smooth in / Smooth Out Class recommended.
    */
    
    //#region CSS for the Windows-Function:
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