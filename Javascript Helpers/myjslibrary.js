//#region Table of Content
/*
!                  Four-Wins-Online Function_Library-JS-File
?                                          powered by
!                                          Stefan Bartl
!                            (WKDSteVIE / WKDMinerva)
?                                                2021                                                                                                                                                                        
?                  _____________________________________                                                                                                                                                                                                  
!                                        Table of content              

?                                 my generic-javascript library                                  
                                                                                            
                                      - Returns sum 
                                      - Insert Element before reference Node
                                      - Insert Element after reference Node                                                                                                                            
                                      - Get only unique Values from Array                                                                                                                                                                                                                                                                                                          
                                      - Get a random Int number  
                                      - Push values to Local Storage                                                                                                                                     
                                      - Swap 2 Classes by 2 events on 1 Element                                        
                                      - New Window                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                      - Create new DOM Element                                                                                                                                      
                                      - Set attributes for Element                                                                                                                                   
                                      - Set attributes for Elements                                                                                                                                 
                                      - Fireworks                    
                                                       
?                  Javascript - what a wonderful language!
*/
//#endregion

//#region  2) my generic-javascript library


/* ========================
!    returns sum of givenm arguments
========================== */
function sum (a, ...rest){
    // Returns the sum of all given values
    let restSum = 0;
    for (let value of rest)restSum += value;
    return a + restSum 
};


/* ==========================
!    Insert Element after Reference Node
=========================== */
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    };
    
    /* ============================
        !    Insert Element before Reference Node
                ============================ */
    function insertBefore(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode);
    };
    
    /* =====================
    !     Get unique values from Array
                ====================== */
    function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
    // var unique = array.filter(onlyUnique);
    };
    
    /* ===========================
    !     Get a random Integer exklusive value
                =========================== */
    function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    };
            
    /* ===========================
    !     Get a random Integer within 2 values
                =========================== */
    function getRandomIntNoZero(minvalue, maxvalue) {
        return minvalue + Math.floor(Math.random() * (maxvalue - minvalue + 1));
        };
    
    /* ====================
    !     Push values to local Storage 
                ===================== */
    function Push_to_LocalStorage(IDfromTrigger, IDfromValue, key, event) {
        document
        .getElementById(`${IDfromTrigger}`)
        .addEventListener(`${event}`, () => {
            localStorage.setItem(
            `${key}`,
            document.getElementById(`${IDfromValue}`).value
            );
        });
    };
    
    /* =========================
    !     Swap between 2 Classes by Events 
                ========================= */
    function Swap_Two_Classes_by_Events(
        element_ID,
        event_1,
        event_2,
        first_Class,
        second_Class
    ) {
        document
        .getElementById(`${element_ID}`)
        .addEventListener(`${event_1}`, () => {
            document
            .getElementById(`${element_ID}`)
            .classList.remove(`${second_Class}`);
            document.getElementById(`${element_ID}`).classList.add(`${first_Class}`);
        });
        document
        .getElementById(`${element_ID}`)
        .addEventListener(`${event_2}`, () => {
            document
            .getElementById(`${element_ID}`)
            .classList.remove(`${first_Class}`);
            document.getElementById(`${element_ID}`).classList.add(`${second_Class}`);
        });
    };
    
    /* =============
    !     Creator-Function
                    ============= */
    function Create_DOM_Element(options, arrayOne, arrayTwo) {
    // console.log("Entered Creator function.");
    
    // Define the possible Parameter-List with the associated variables declared
    const _parentID = options.ParentID,
    _element = options.Element,
    _type = options.Type,
    _id = options.ID,
    _class = options.Class,
    _text = options.Text,
    _for = options.For,
    _title = options.Title,
    _alt = options.Alt,
    _src = options.Src,
    _width = options.Width,
    _height = options.Height,
    _aspectRatio = options.AspectRatio,
    _min = options.Min,
    _max = options.Max,
    _value = options.Value,
    _placeholder = options.Placeholder,
    _attribute = options.Attribute;
    _attribute_value = options.AttributeValue;
    _optionsArray = arrayOne,
    _valuesArray = arrayTwo;
    
    const element = document.createElement(_element);
    
    // Properties 
    if (_id !== undefined) element.id = _id;
    if (_class !== undefined) element.classList.add(_class);
    if (_text !== undefined) element.innerText = _text;
    if (_for !== undefined) element.for = _for;
    if (_title !== undefined) element.title = _text;
    if (_alt !== undefined) element.alt = _alt;
    
    // Properties for Image-DOM-Elements
    if (_src !== undefined) element.src = _src;
    if (_width !== undefined) element.width = _width;
    if (_height !== undefined) element.height = _height;
    if (_aspectRatio != undefined) element.aspectRatio = _aspectRatio;
    
    // Properties for Input-DOM-Elements
    if (_type !== undefined) element.type = _type;
    if (_min !== undefined) element.min = _min;
    if (_max !== undefined) element.max = _max;
    if (_value !== undefined) element.min = _value;
    if (_placeholder !== undefined) element.min = _placeholder;
    
    // Attribute
    if(_attribute !== undefined) element.setAttribute(`${_attribute}`, `${_attribute_value}`);
    
    // Dropdown-Menu Generator
    // Proof if both needed Arrays were passed
    if (
    Array.isArray(_optionsArray) === true &&
    Array.isArray(_valuesArray) === true
    ) {
    let elementsPointer = 0;
    // For every value in ther first/option Array, create a dropdown option and set the correct value from the second/values Array for it
    for (let el of _optionsArray) {
        element.options.add(
        new Option(`${el}`, `${_valuesArray}`[elementsPointer])
        );
        elementsPointer++;
    }
    }
    
    // Finally, push the complete dynamically created, finished object to the DOM with appendChild!
    document.getElementById(_parentID).appendChild(element);
    
    /*
    Creator-Functions Informations:
    All types of Elements possible which you can create "the normal way" too!
    !Important: For correct functionality pass at least the ParentID (to defined where the element should appear in the DOM) & 
    the Element argument (tor define which kind of element it is)! 
    
    I recommend the following method for invoking:
    Create_DOM_Element({ParentID: "anyId", Element: "div"});
    
    Possible arguments:
    parentID, Element-Type, Input-Type, ID, Class, Text, For, Title, Alt, Src, Width, Height, AspectRatio, Min, Max, Value, Placeholder, arrayOne, arrayTwo
    
    */
    
    // console.log("New DOM-Element created.");
    };
    
    /* =============================================
    !     Create own Notification / Alert /  Prompt / Confirm - Windows 
                ============================================= */
    function New_Window(options) {
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
    
    // Invoke-Example Confirm: New_Window({ID: "ID_Test_Window", Name: "Test Window", Text: "Test Test Test", Confirm: true, Variable: "Tester"}); Find Confirm Boolean: Windows.Tester
    
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
        // Invoke Example Prompt: New_Window({ID: "ID_Test_Window", Name: "Test Window", Text: "Test Test Test", Prompt: true, Variable: "Tester"}); Find Input value: Windows.Tester
    
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
    
    /* ===============
    !     Save / Load Window 
                    =============== */
    function Save_Load_Window() {
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
    
    /* ===========================
    !     Set multiple Attributes on 1 Element
            =========================== */
    function setAttributes(el, attrs) {
    for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
    }
    // Call: setAttributes(elem, {"src": "http://example.com/something.jpeg", "height": "100%", ...});
    };
    
    /* ================================
    !     Set multiple Attrubutes on multiple Elements
            ================================= */
    function setAttributesArr(arr, attrs) {
    for (let el of arr) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
    }
    // Call: setAttributesArr(arr with (DOM-Objects!), {"src": "http://example.com/something.jpeg", "height": "100%", ...});
    };
    
    /* =====================
    !     Fireworks-Canvas-Animation 
            ====================== */
    function Fireworks(canvasID) {
    // Firework Function not from me, so special thanks goes to Adam, which published it at codepen! Link below!
    // Fireworks from Adam: https://codepen.io/Adam12132/pen/gOGrwMR
    const canvas = document.getElementById(canvasID);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext("2d");
    function Firework(x, y, height, yVol, R, G, B) {
    this.x = x;
    this.y = y;
    this.yVol = yVol;
    this.height = height;
    this.R = R;
    this.G = G;
    this.B = B;
    this.radius = 2;
    this.boom = false;
    var boomHeight = Math.floor(Math.random() * 200) + 50;
    this.draw = function () {
        ctx.fillStyle = "rgba(" + R + "," + G + "," + B + ")";
        ctx.strokeStyle = "rgba(" + R + "," + G + "," + B + ")";
        ctx.beginPath();
        //   ctx.arc(this.x,boomHeight,this.radius,Math.PI * 2,0,false);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, Math.PI * 2, 0, false);
        ctx.fill();
    };
    this.update = function () {
        this.y -= this.yVol;
        if (this.radius < 20) {
        this.radius += 0.35;
        }
        if (this.y < boomHeight) {
        this.boom = true;
    
        for (var i = 0; i < 120; i++) {
            particleArray.push(
            new Particle(
                this.x,
                this.y,
                // (Math.random() * 2) + 0.5//
                Math.random() * 2 + 1,
                this.R,
                this.G,
                this.B,
                1
            )
            );
        }
        }
        this.draw();
    };
    this.update();
    }
    
    window.addEventListener("click", (e) => {
    var x = e.clientX;
    var y = canvas.height;
    var R = Math.floor(Math.random() * 255);
    var G = Math.floor(Math.random() * 255);
    var B = Math.floor(Math.random() * 255);
    var height = Math.floor(Math.random() * 20) + 10;
    fireworkArray.push(new Firework(x, y, height, 5, R, G, B));
    });
    
    function Particle(x, y, radius, R, G, B, A) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.R = R;
    this.G = G;
    this.B = B;
    this.A = A;
    this.timer = 0;
    this.fade = false;
    
    // Change random spread
    this.xVol = Math.random() * 10 - 4;
    this.yVol = Math.random() * 10 - 4;
    
    // console.log(this.xVol,this.yVol)
    this.draw = function () {
        //   ctx.globalCompositeOperation = "lighter"
        ctx.fillStyle = "rgba(" + R + "," + G + "," + B + "," + this.A + ")";
        ctx.save();
        ctx.beginPath();
        // ctx.fillStyle = "white"
        ctx.globalCompositeOperation = "screen";
        ctx.arc(this.x, this.y, this.radius, Math.PI * 2, 0, false);
        ctx.fill();
    
        ctx.restore();
    };
    this.update = function () {
        this.x += this.xVol;
        this.y += this.yVol;
    
        // Comment out to stop gravity.
        if (this.timer < 200) {
        this.yVol += 0.12;
        }
        this.A -= 0.02;
        if (this.A < 0) {
        this.fade = true;
        }
        this.draw();
    };
    this.update();
    }
    
    var fireworkArray = [];
    var particleArray = [];
    for (var i = 0; i < 6; i++) {
    var x = Math.random() * canvas.width;
    var y = canvas.height;
    var R = Math.floor(Math.random() * 255);
    var G = Math.floor(Math.random() * 255);
    var B = Math.floor(Math.random() * 255);
    var height = Math.floor(Math.random() * 20) + 10;
    fireworkArray.push(new Firework(x, y, height, 5, R, G, B));
    }
    
    function animate() {
    requestAnimationFrame(animate);
    // ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < fireworkArray.length; i++) {
        fireworkArray[i].update();
    }
    for (var j = 0; j < particleArray.length; j++) {
        particleArray[j].update();
    }
    if (fireworkArray.length < 4) {
        var x = Math.random() * canvas.width;
        var y = canvas.height;
        var height = Math.floor(Math.random() * 20);
        var yVol = 5;
        var R = Math.floor(Math.random() * 255);
        var G = Math.floor(Math.random() * 255);
        var B = Math.floor(Math.random() * 255);
        fireworkArray.push(new Firework(x, y, height, yVol, R, G, B));
    }
    
    fireworkArray = fireworkArray.filter((obj) => !obj.boom);
    particleArray = particleArray.filter((obj) => !obj.fade);
    }
    animate();
    
    window.addEventListener("resize", (e) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    });
    };
    
    //#region Callback, Promises, Async/Await
    
    /* =======
    !   Callback
                =======*/
    
    // Standard Callback function
    function myCallback(name, callback) {
        // name = "Setting Parameters here overwrites arguments in invoking! (Scope)";
        // After 1 second the callback function gets invoked, which in this examle creates a Object username with either the 1 argument by invoking or the name in this function
        setTimeout(() => {
        callback({ username: name });
        }, 1000);
        // Second argument  have acces to the callback function, so acces to the Object where username: name. With that variables you can work. (.then)
    //const myName = myCallback("Steve", (username) => {
    // console.log(username);
    //});
    };
    
    /* ======
    !     Promise
                ======*/
    // Standard Promise
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve({ var: "My Test" });
        }, 2000);
    
        //myPromise
    //  .then(myTest => {console.log(myTest)} );
    });
    
    // Get values from multiple Promises at the same time
    const myPromise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve({ var: "+ my second Test in Promise.all!" });
        }, 2000);
        //? You have to pass an array!
    //Promise.all([myPromise, myPromise2])
    //  .then(result => {console.log(result)});
    
    });
    
    /* ==========
    !     Async / Await
                ===========*/
    // Get functions which return a promise
    function firstPromise() {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ var: "Code after 3 seconds" });
        }, 3000);
        });
    }
    
    function secondPromise() {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ var: "Code after 4 seconds" });
        }, 4000);
        });
    }
    
    // Async / Await can handle those fuinctions
    async function result() {
        const first = await firstPromise();
        const second = await secondPromise();
        console.log(first, second);
    }
    //result();
    
    /* ===============
    !     Await with Promises
                =============== */
    const testAwait = function AwaitPromise() {
        const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Inside test await");
        }, 2000);
        });
        return promise;
    };
    /*
    testAwait().then((data) => {console.log(data);});
    */
    
    //#endregion
    
    //#region Create CSS-Class and apply it to Element
    /* =============
    !     Craete CSS-Class
                ============= */
    function createClass(name,rules){
        var style = document.createElement("style");
        style.type = "text/css";
        document.getElementsByTagName("head")[0].appendChild(style);
        if(!(style.sheet||{}).insertRule) 
            (style.styleSheet || style.sheet).addRule(name, rules);
        else
            style.sheet.insertRule(name+"{"+rules+"}",0);
    
    //createClass(".whatever","background-color: green;");
    };
    
    /* =============
    !     Apply CSS-Class
                ============= */
    function applyClass(name,element,doRemove){
        if(typeof element.valueOf() == "string"){
            element = document.getElementById(element);
        }
        if(!element) return;
        if(doRemove){
            element.className = element.className.replace(new RegExp("\\b" + name + "\\b","g"));
        }else{      
            element.className = element.className + " " + name;
        }
    };
    //#endregion
    
    //#endregion
                
//#region  My Javascript-Coding-Guideline
/*
================================================================================================================================================================================================================================================================================ 

?                                          Better Coding Checklist:

-) Chrome Extension Visbug hilft beim Page designen!

-) insomnia.rest hilft beimn api schreiben!

-) bundlephobia.com zeigt dir die Package-Ladezeiten

-) Ternäre Operatoren nutzen ! --> x >10 ? "Wenn x größer ist als 10" : "Wenn nicht, dann mach dies"

-) Verwende "conditionales": const user = user_name || "Player 1"

-) Array.from() konvertiert iterierbare Objekte zu arrays!

-) arr.map ()

-) String to number: let int = "14" --> neueZahl = +int / Number to string: const stringZahl = 5 + ""; in concentation --> double tilde ~~

-) Array alle "strings" zu "numbers" --> values = array.map(Number) /  Boolean: array.map(Boolean)

-) 2 << 3 = 16 ist gleich wie 2 ** 4 = 16 oder old style Math.pow(2, 3)

-) Konvertiere eine float zu Int mit "zahl | 0" => rundet auf wenn negativ und ab wenn positiv. Doppelt tilde ~~ macht das gleiche!
 
-) | 0 rundet ja eine positive float auf eine Int ab, also "1222 / 10 | 0" ist das gleiche wie "1220 / 10 ==> 122.0 | 0 ==> 122"
 
-) Object oder Array destructing: const {name, age, ...} = user --> und die variablen haben die Werte von den zugehörigen user-Objekt. Also statt name = this name...
 
-) Console.time("") ...... console.timeEnd("") misst die Dauer der Ausführung des Codes dazwischen und gibt ihn in der Konsole aus. Praktisch für zb.: Loops oder Funktionen!

-) slice() kann auch negative values haben und damit bekommt man die letzten values eines arrays
 
-) "...rest"-Parameter sammelt alle werte ab diesem Parameter in einem gleichnamigen Array. Kann auch anders benannt werden! 

-) Variablen zb.: so zuweisen: n = n + n + (options.number || 5) 
      Wichtig: wird hier für options.number 0 eingesetzt, ist es false (aufgrund OR) und es wird immer + 5 gerechnet. Außerdem bekommt man einen Error bei null, undefined bzw. false value wenn options.number gar nicht übergeben wird. Das muss alles mit if statements abgefangen werden"
 
-) Keine reduntatn if statements; if (n < 0){....} else if (n >= 0){...}  -> Zweites if ist nicht notwendig!

-) So wenig nesting wie möglich: Vermeide else if und returne nach jedem if 

-) Variablen in return: return `(${variable})`

? Selektoren 

document.querySelector() selektiert auch nach CSS Regeln wie:
 let test = document.querySelector("a:has(> img)");

==============================================================================================================================================================================================================================================================================================*/

//#endregion