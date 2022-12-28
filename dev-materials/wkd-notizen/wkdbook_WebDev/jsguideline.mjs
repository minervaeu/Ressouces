//#region  Checklist:

/*                                      

- insomnia.rest hilft beimn api schreiben!

- bundlephobia.com zeigt dir die Package-Ladezeiten

- Ternäre Operatoren nutzen ! --> x >10 ? "Wenn x größer ist als 10" : "Wenn nicht, dann mach dies"

- Verwende "conditionales": const user = user_name || "Player 1"

- Array.from() konvertiert iterierbare Objekte zu arrays!

- arr.map ()

- String to number: let int = "14" --> neueZahl = +int / Number to string: const stringZahl = 5 + ""; in concentation --> double tilde ~~

- Array alle "strings" zu "numbers" --> values = array.map(Number) /  Boolean: array.map(Boolean)

- 2 << 3 = 16 ist gleich wie 2 ** 4 = 16 oder old style Math.pow(2, 3)

- Konvertiere eine float zu Int mit "zahl | 0" => rundet auf wenn negativ und ab wenn positiv. Doppelt tilde ~~ macht das gleiche!
 
-  | 0 rundet ja eine positive float auf eine Int ab, also "1222 / 10 | 0" ist das gleiche wie "1220 / 10 ==> 122.0 | 0 ==> 122"
 
- Object oder Array destructing: const {name, age, ...} = user --> und die variablen haben die Werte von den zugehörigen user-Objekt. Also statt name = this name...
 
- Console.time("") ...... console.timeEnd("") misst die Dauer der Ausführung des Codes dazwischen und gibt ihn in der Konsole aus. Praktisch für zb.: Loops oder Funktionen!

- slice() kann auch negative values haben und damit bekommt man die letzten values eines arrays
 
- "...rest"-Parameter sammelt alle werte ab diesem Parameter in einem gleichnamigen Array. Kann auch anders benannt werden! 

- Variablen zb.: so zuweisen: n = n + n + (options.number || 5) 
      Wichtig: wird hier für options.number 0 eingesetzt, ist es false (aufgrund OR) und es wird immer + 5 gerechnet. Außerdem bekommt man einen Error bei null, undefined bzw. false value wenn options.number gar nicht übergeben wird. Das muss alles mit if statements abgefangen werden"
 
- Keine reduntanten if statements; if (n < 0){....} else if (n >= 0){...}  -> Zweites if ist nicht notwendig!

- So wenig nesting wie möglich: Vermeide else if und returne nach jedem if 

- Variablen in return: return `(${variable})`


*/

//#endregion


//#region Tipps & Tricks

/*
todo    arrays in 3localstorage speichern
    mit stringify & parse

todo    label für loops
    Man kann loops Labels geben um gezielt break und continue auf sie zu verwenden. Damit kann man die for variablen direkt inkrementieren!

todo    debugging
    debugger im code geschrieben stoppt den code bei Ausführung genau dort und man kann Variablen, den Stack usw... ablesen 

todo    console
    console.table für arrays verwenden!
    console.time -> code -> console.timeEnd zeigt die Zeit an die vergangen ist

todo document.querySelector() 
    selektiert auch nach CSS Regeln wie: let test = document.querySelector("a:has(> img)");

todo measure user scrolling state
window.addEventListener("scroll", ()=>{
const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
console.log(scrollTop);
})
*/

//#endregion


//#region  asynchronus javascript

//            ? |==================================|
//            ?  ==== callbacks, promises & async/await ==== 
//            ? |==================================|

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