//!==== WKD || WEB-Development Notizen ====



//? =============== Typescript  ==========
//#region 
/*

Keynotes:
Types und Interfaces in eigene Datei auslagern.

todo  ==== Installiern & Kompilieren ==== 

node:
sudo npm install -g typescript 
    option: npm install -D tslint@5.12.1

Für express:
sudo ts-node => compile ts code in node
npm i --save-dev @types/body-parser @types/express @types/mongoose @types/jquery @types/bootstrap

todo tsconfig.json
    tsc --init
oder
{
    "compilerOptions": {
      "module": "commonjs",
      "esModuleInterop": true,
      "strict": true,
      "skipLibCheck": true,
      "target": "es6",
      "strict": true; //?  zb muss bei Argumentübergabe null/undefined explizit angegebenen werden wenn man es möchte 
      "moduleResolution": "node",
      "sourceMap": true,
      "allowJs": true,
      "outDir": "./dist"
    },
    "lib": ["es2015"],
    "include": [
        "index.ts",
        "./src/** /*"
    ],
    "exclude": [
        "node_modules"
    ]
  }
module: Gibt die Methode zur Erzeugung des Modulcodes an. Node verwendet commonjs.
target: Gibt das Ausgabe-Sprachniveau an.
moduleResolution: Dies hilft dem Compiler herauszufinden, worauf sich ein Import bezieht. Der Wert node imitiert den Mechanismus zur Auflösung des Node-Moduls.

todo ES6 Modules 
  import * as .....

todo package.json
    "build": "tsc --w",
    "start": "tsc && ts-node ./dist/index.js"

option: npm install -D concurrently nodemon
    "build": "npx tsc",
    "start": "node dist/index.js",
    "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\""


The build command will compile the code in JavaScript inside a dist directory. 
The dev command is used to run the Node.js server in development mode.
Now, go back to the terminal window and run 
npm run dev 
to trigger the development server
If changes, run
npm run build

./node_modules/.bin/tslint --init       Zum erzeugen der lint datei
tslint.json-Datei und Regel no-console hinzufügen
{
  "defaultSeverity": "error",
  "extends": ["tslint:recommended"],
  "jsRules": {},
  "rules": {
    "no-console": false
  },
  "rulesDirectory": []
}
package.json:
    "start": "tsc && node dist/app.js",


tsc oder 
tsc "Dateiname"

Build:
Terminal -> Default Build konfigurieren
strg+shift+b

todo  ==== Types ==== 

Type assertion:
var test: any;
test = 2; // typeof number
test = "ik";c // typeof string
test = []; // typeof array
? ==> z.B.: String-Methoden bei "type: any"-Variablen nur über Type-Assertion:
var nok = (test as string).toLowerCase(); 
var ok = (<string>test).toLowerCase()

enums are consts
    export enum Settings {
        user = "Ich",
        admin = true
    }
    import { Settings } from....
    Settings.user

todo Init & Declaration 
const data: string = "Here is my string";
let simpleArray: number[] = [4, 2, 0];
const schema: ANY = {
    prop1: ....
}

todo  ==== Funktionen ==== 

Parameter typisieren und default:
function add(value1: number, value2: any, valueDefaultisiert: number = 1, ....){};


todo  ==== Klassen ==== 

private / public statt this im lustruktor
class Fahrzeug{
    
    constructor(private/public name: string){
        statt this.name = name;
    }
}

Static => eine Variable oder Methode, die bei allen Subklassen gleich ist

class Fahrzeug{
    
    static Fahrzeug.count: number; ==> count ist bei allen subklassen trotz Erhöhung in ihnen gleich

    constructor(private name: string){
        Fahrzeug.count++; ==> in jeder subklasse wird count erhöht
    }

}


todo  ==== type ==== 

TYPE MUST START WITH CAPITAL LETTER!

type Like = {
  username: string;
  displayName: string;
};
type Share = {
  username: string;
  displayName: string;
};

function getFriendNameFromEvent(event: Like | Share) {
  return event.displayName || event.username;
}



todo  ==== INTERFACES & THERE ADVANCED OBJECT TYPES ====

The biggest difference between interface and type is that interface can only be used to type objects, while type can be used to type objects, 
primitives, and more. As it turns out, type is more versatile and functional than interface.

==> Definieren
interface Name {
    firstName: string;
}

==> Verwenden
const nameCreator = (name: Name): string {
    return  `Hello, ${name.firstName}`
};


? Interfaces and Classes
TypeScript gives us the ability to apply a type to an object/class with the implements keyword, like this:

interface Robot {
  identify: (id: number) => void;
}
 
class OneSeries implements Robot {
  identify(id: number) {
    console.log(`beep! I'm ${id.toFixed(2)}.`);
  }
  answerQuestion() {
    console.log('42!');
  }
}

In the example, there’s an interface named Robot and a class named OneSeries. The implements keyword is then used to apply the type Robot to OneSeries.
Notice that Robot has an .identify() method. Since Robot is applied to OneSeries, OneSeries must include a method named .identify() that matches the Robot interface.
Additionally, OneSeries can have methods and properties of its own, like the .answerQuestion() method.
implements and interface allow us to create types that match a variety of class patterns, which makes interface a good tool for use on object-oriented programs.

? Deep Types
As our programs grow and become more complex, we’ll need to add more methods and properties to our objects to accommodate more features. 
In fact, we may need to add nested methods and properties. Take a look at the following class:

class OneSeries implements Robot {
  about;
 
  constructor(props: { general: { id: number; name: string; } }) {
    this.about = props;
  }
 
  getRobotId() {
    return `ID: ${this.about.general.id}`;
  }
}

In this class, OneSeries expects to have an about property that is an object with a nested object inside it. Inside getRobotId(), 
OneSeries returns this.about.general.id. To type an object nested inside another object, we could write an interface like this:

interface Robot {
  about: {
    general: {
      id: number;
      name: string;
    };
  };
  getRobotId: () => string;
}
Notice that within the Robot interface, the general typed object is nested inside the about typed object. 
TypeScript allows us to infinitely nest objects so that we can describe data correctly.

! You can nest interaces in Objects or Classes!

? Extending Interfaces
In TypeScript, it’s not always enough to be able to compose types together. Sometimes it’s convenient to copy all the type members from one type 
into another type. We can accomplish this with the extends keyword, like in this example:

interface Shape {
  color: string;
}
interface Square extends Shape {
  sideLength: number;
}
const mySquare: Square = { sideLength: 10, color: 'blue' };


? Index Signatures
When typing objects in TypeScript, sometimes it’s not possible to know the property names for an object, 
like when we get back information from an outside data source/API. While we may not know the exact property names at compile-time, 
we may know what the data will look like in general. In that case, it’s useful to write an object type that allows us to include a 
variable name for the property name. This feature is called index signatures.

Imagine we query a map API to get a list of latitudes where a solar eclipse can be viewed. The data might look like:
{
  '40.712776': true;
  '41.203323': true;
  '40.417286': false;
}
We know that all the property names will be strings, and all their values will be booleans, but we don’t know what the property
names will be. To type this object, we can utilize an index signature to type this object. We could write this object’s type like this:

interface SolarEclipse {
  [latitude: string]: boolean;
} 
In the SolarEclipse type, there’s an index signature used for defining a variable property name of each type member. 
The [latitude: string] syntax defines every property name within SolarEclipse as a string type with a value of type boolean. 
In the [latitude: string] syntax, the latitude name is purely for us, the developer, as a human-readable name that will show up in potential error messages later.

? Optional Type Members
interface OptionsType {
  name: string;
  size?: string;
}
We can denote any type member as optional using the ? operator after the property name and before the colon (:), 
like this: size?: string;. Since .size is optional, we added a conditional to check if it exists before trying to use the .size property.

? Summary:
We can use both interface and type keywords to declare types.
interface is great for typing objects, especially within object-oriented programs.
We can apply an interface on a class using the implements keyword.
Object types can be nested infinitely.
We can define multiple types and compose them together to organize our code and make it more flexible.
We can copy the type members of one interface into another using the extends keyword.
We can define variable property names within an object type with an index signature. An index signature uses syntax like: [propertyName: string]: string.
It’s possible to make some type members optional, using the ? operator. The syntax looks like name?: string.



todo  ==== Generic ==== 

Example:

? ==> Generic (T is 'open for type interpretation')
    function nameCreator<T>(name: T): T {
        return  name
    };

? Daten initialisiern
    let myName= nameCreator<string>('WKD');
    or
    let myName= nameCreator<number>(2);

    ? Example:
    ? Generische Datentypen erstellen
    type Family<T> = {
    parents: [T, T], mate: T, children: T[]
    };
    type Human = {name: string, job: string};
    type Dog = {name: string, tailWagSpeed: number};

    ? Generisch Datentypen benutzen
    let theFamily: Family<number> = {
    parents: [3, 4], mate: 9, children: [5, 30, 121]
    };

    let someFamily: Family<boolean> = {
    parents: [true, true], mate: false, 
    children: [false, false, true, true]
    };

    let aFamily: Family<Human> = {
    parents: [
        {name: 'Mom', job: 'software engineer'},
        {name: 'Dad', job: 'coding engineer'}
    ],
    mate: {name: 'Matesky', job: 'engineering coder'},
    children: [{name: 'Babesky', job: 'none'}]
    };

    let anotherFamily: Family<Dog> = {
    parents: [
        {name: 'Momo', tailWagSpeed: 3},
        {name: 'Dado', tailWagSpeed: 100}
    ],
    mate: {name: 'Cheems', tailWagSpeed: 7},
    children: [
        {name: 'Puppin', tailWagSpeed: 0.001},
        {name: 'Puppenaut', tailWagSpeed: 0.0001},
        {name: 'Puppenator', tailWagSpeed: 0.01}
    ]
    };

todo  ==== Generic Functions==== 

function getFilledArray<T>(value: T, n: number): T[] {
  return Array(n).fill(value);
}
The above code tells TypeScript to make sure that value and the returned array have the same type T. 
When the function is invoked, we will provide T‘s value. For example, we can invoke the function using 
getFilledArray<string>('cheese', 3), which sets T equal to string. This still evaluates to ['cheese', 'cheese', 'cheese'], 
but the function is now correctly typed and less prone to errors. The function getFilledArray<string> is precisely the same 
as if we had written (value: string, n: number): string[] in its type annotation.

In general, writing generic functions with function functionName<T> allows us to use T within the type annotation as a type placeholder. Later, when the function is invoked, T is replaced with the provided type.

? Example

function getFilledArray<T>(value: T, n: number): T[] {
  return Array(n).fill(value);
}

let stringArray: string[];
let numberArray: number[];
let personArray: {name: string, age: number}[];
let coordinateArray: [number, number][];

stringArray = getFilledArray<string>('hi', 6); 
numberArray = getFilledArray<number>(9, 6); 
personArray = getFilledArray<{name: string, age: number}>(
  {name: 'J. Dean', age: 24}, 6
);
coordinateArray = getFilledArray<[number, number]>([3,4], 6); 


todo  ==== Decorators ==== 

function Dummy(){....};

@Dummy              ==> Now the function is available in the class Message
export default class Message{
    name;
    constructor(name){
        this,name = name;
    }
}

todo  ==== Function Types ==== 

One of the neat things about TypeScript is that we can precisely control the kinds of functions assignable to a variable. 
We do this using function types, which specify the argument types and return type of a function. Here’s an example of a 
function type that is only compatible with functions that take in two string arguments and return a number.

type StringsToNumberFunction = (arg0: string, arg1: string) => number;

This syntax is just like arrow notation for functions, except instead of the 
return value we put the return type. In this case, the return type is number.
 Because this is just a type, we did not write the function body at all. 
 A variable of type StringsToNumberFunction can be assigned any compatible function:


todo  ==== Union Types ==== 

? Defining Unions
Unions allow us to define multiple allowed type members by separating each type member with a vertical line character |. 
Examples:
let ID: string | number;

function getMarginLeft(margin: string | number) {
  return { 'marginLeft': margin };
}

let userData: string | User = createUser();

? Unions and Arrays
To create a union that supports multiple types for an array’s values, wrap the union in parentheses (string | number), then use array notation []
const timesList: (string | number)[] = [dateNumber, dateString];

? Common Key Value Pairs
When we put type members in a union, TypeScript will only allow us to use the common methods and properties that all members of the union share. Take this code:

const batteryStatus: boolean | number = false;
batteryStatus.toString(); // No TypeScript error
batteryStatus.toFixed(2); // TypeScript error
Since batteryStatus can be a boolean or a number, TypeScript will only allow us to call methods that both number and boolean share. They both share .toString(), so we’re good there. But, since only number has a .toFixed() method, 

? Unions with Literal Types
We can use literal types with TypeScript unions. Literal type unions are useful when we want to create distinct states within a program.
For instance, if we were writing the code that controlled stoplights, we might write a program like this:

type Color = 'green' | 'yellow' | 'red';
function changeLight(color: Color) {
}
With the code above, we could ensure that wherever changeLight() is called, that it gets passed only allowed stoplight colors.
If we tried to call changeLight('purple'), TypeScript would complain, since that is not a valid stoplight color.
This technique allows us to write functions that are specific about the states they can handle, which helps us write code that’s less prone to errors.


todo  ==== TYPE NARROWING ==== 

? Using in with Type Guards
As we write more types, we’re bound to create custom types to better describe our data’s properties and methods. While using typeof can get us pretty far, 
sometimes we want to see if a specific method exists on a type instead of a type like 'string'. That’s where the in operator comes into play. The in operator 
checks if a property exists on an object itself or anywhere within its prototype chain. Take a look at this example:

type Tennis = {
  serve: () => void;
}
type Soccer = {
  kick: () => void;
}

function play(sport: Tennis | Soccer) {
  if ('serve' in sport) {
    return sport.serve();
  }
 
  if ('kick' in sport) {
    return sport.kick();
  }
}

In the example above, we check if the 'serve' property exists on sport with the in operator. The 'serve' property must exist inside the conditional, 
so TypeScript can narrow sport‘s type inside the conditional to be of type Tennis. This type narrowing is possible because TypeScript recognizes in as a type guard.

? Summary:
TypeScript can understand how our code will execute at runtime so that it can infer more specific types while we write code. This is called type narrowing.
An expression that checks if a variable is a specific type is called a type guard. Type guard’s allow TypeScript to recognize when it can type narrow.
The typeof operator is useful when writing type guards. It can check if a variable is a 'string', 'number', 'boolean', or 'symbol'.
The in operator is useful for checking if a specific property exists on an object. in is especially helpful when we have data represented as objects.
TypeScript can type narrow after a type guard with an else block. TypeScript understands that that else block of an if statement must be the inverse condition of the if statement’s conditional.
ypeScript can go even further and type narrow after a type guard if the type guard has a return or another terminal statement within its block, no else required.



*/
//#endregion



//? =============== CSS ==================
/*
                       radius   mittelpunkt
    clip-path: circle(20px 20px at 50% 50%);

    background-blend-mode => Farbe, filter, merere bilder
    mix-blemd-mode => image vermischt sich mit parent element

*/



//? =============== SASS =================
/*

todo  ==== WEB ==== 

https://sass-lang.com/dart-sass

node.js install:
npm install -g sass
(Frontend instal Dart-Sass via Github-repo)

compile with watcher:
sass -w style.scss:style.css

todo node-sass compile Sass dir into CSS-Dir
    "sass-w": "node-sass -w styles/sass -o styles",


todo compile all files to 1 and watch
    "sass-w": "sass -w src/sass/styles.scss:src/stylesheet/styles.css", 
                    here are all. scss files || this is the compiled css
    IMPORTANT in the styles.scss you must import all other scss files! like =>
    @import 'index';
    @import 'app';
    @import 'test'


    (GUI f.e. Prepros)

    node-sass
        "sass": "node-sass public/stylesheets/style.scss public/stylesheets/style.css",
        "sass-w": "node-sass -w -r public/stylesheets/style.scss public/stylesheets/style.css",

todo  ==== ALLGEMEIN ====

Debugging Ausgabe:
@debug

Variablen:
$name: wert;

Interpolation: #{$name}
Für Selektoren: .#{name}Class/ID/usw...

Ampersand & zum verbinden:
divName {
    ....

    &:hover, &:focus, &..... {
        ....
    }
}

Variablen können boolsche Werte anwenden.

Arithmetik möglich: 
+ - * und calc{ / ) }d. math.div() mit @use "sass:math";

Mit @if @else Verzweigungen möglich.

todo  ==== FUNKTIONEN ====

@function name(paramter){
    @if()
    @else
    return
}

Call:
zb.: color: name();

todo  ==== LISTEN & EACH ====

Beispiel ereugt klassen icon-#(size) mit variablen px:
$sizes: 40, 50, 60;
each $size in $sizes {
    .icon-#{size}{
        font-size: #{size}px;
        .........: #{size}px;
        ......
    }
}
Auf einzelnes Element zugreifen:
@use "sass:list";
@debug list.nth($sizes, 1); // 40

todo  ==== FOR ====

@for ZÄHLER from BEGINN trough BISWOHIN

todo  ==== MAP ====
@use "sass:map"

Beispiel:
$breakpoints: (
    small: 40,
    medium: 50,
    large; 60
)
Ausgabe über:
@debug map.get($breakpoints, medium); // 50

Map mit Mixin: 
@mixin mq($breakpoints, $key){
    $size: map.get($breakpoints, $key);
    @media ......
}
.container{
    @include mq(medium){
        margin: 1rem
    }
}

Verschachtelte Maps:

Erzeugen von Color-KLassen 
$color: (
    red: (
        dark: #0000,
        normal: #3333,
        ....
    ),
    blue: (
        ....
    ),.....
)

@each $color-key, $color-value in $colors {
    @each $tone-key, $tone-value in $color-value {
        .bg-#{$color-key}-#{$tone-key}{
            background-color: #{$tone-value};
        }
    }
}

Same, als custom properties und mit red statt red-normal:
:root{
    @each $color-key, $color-value in $colors {
        @each $tone-key, $tone-value in $color-value {
            @if ($tone-key === normal){
                --#{color-key}: #{$tone-value}
            } @else {
            --#{$color-key}-#{$tone-key};
            }
        }
    }
}

todo  ==== NESTINGS ====

Klassen-Nesting (z.B.: nach BEM (Block-Element-Modifier)): 
.buttons {
    .....;
    &--state {
        &-ready {

        }
        &-danger {

        }
    }
}
==> ergibt Klassennamen; .buttons--state-danger & .buttons--state-danger


todo  ==== MIXINS ====

Hier ein Mixin mit einem Parameter
@mixin name($farbe: green){
    border: solid 2px $farbe
}
@include name();
od.
@include(blue)


Element bekommt eigenen Media Querie:

@mixin name($size){
    @media (min-width: $size){
        @content;  ==> Bedeutet, es soll das dort stehen was bei der Nutzung des Mixins angegeben wird!
    }
}
BEISPIEL:
.container {
    @include name(400px){
        padding: 1rem;
    }
}
ERZEUGT:
@media (min-width: 400px){
    .container {
        padding: 1rem;
    }
}


todo  ==== EXTEND ====
.meineKlasse {
    color: red;
    
    &--UndDeine {
        @extend .error;
        border-wodth: 4rem;
    }
}
==> .meineKlasse--UndDeine

todo  ==== INTERRESANTE MODULE ====

color mix, adjust(color, verändern)
math pi, compatible, unit, is-unitless
string to-lower-case
list nth(list, []), append(push)
map get, has-key, keys, values
selector is-superselector, append(aneinanderhängen), nest(versachteln), replace, simple-selectors(mehrselektoren entzweigen)

todo  ==== SHEETS AUFTEILEN ====

Einbindende datei: "_sheetname"; (_ macht ein partial daraus)
@import "sheetname" (as zweitname (Namensraum));
Besser:
@use "sheetname"
=> wie bei einem node modul dann sheetname.property oder zweitname.property

Forward:
In Ordner basics eine index.scss datei anlegen und dort @forward "datei1"; @forward "datei2";
==> @use "./basics"; alle auf einmal einbinden.

todo  ==== SASS node.js command-line ====

Usage: sass <input.scss> [output.css]
       sass <input.scss>:<output.css> <input/>:<output/> <dir/>

━━━ Input and Output ━━━━━━━━━━━━━━━━━━━
    --[no-]stdin               Read the stylesheet from stdin.
    --[no-]indented            Use the indented syntax for input from stdin.
-I, --load-path=<PATH>         A path to use when resolving imports.
                               May be passed multiple times.
-s, --style=<NAME>             Output style.
                               [expanded (default), compressed]
    --[no-]charset             Emit a @charset or BOM for CSS with non-ASCII characters.
                               (defaults to on)
    --[no-]error-css           When an error occurs, emit a stylesheet describing it.
                               Defaults to true when compiling to a file.
    --update                   Only compile out-of-date stylesheets.

━━━ Source Maps ━━━━━━━━━━━━━━━━━━━━━━━━
    --[no-]source-map          Whether to generate source maps.
                               (defaults to on)
    --source-map-urls          How to link from source maps to source files.
                               [relative (default), absolute]
    --[no-]embed-sources       Embed source file contents in source maps.
    --[no-]embed-source-map    Embed source map contents in CSS.

━━━ Other ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-w, --watch                    Watch stylesheets and recompile when they change.
    --[no-]poll                Manually check for changes rather than using a native watcher.
                               Only valid with --watch.
    --[no-]stop-on-error       Don't compile more files once an error is encountered.
-i, --interactive              Run an interactive SassScript shell.
-c, --[no-]color               Whether to use terminal colors for messages.
    --[no-]unicode             Whether to use Unicode characters for messages.
-q, --[no-]quiet               Don't print warnings.
    --[no-]quiet-deps          Don't print compiler warnings from dependencies.
                               Stylesheets imported through load paths count as dependencies.
    --[no-]verbose             Print all deprecation warnings even when they're repetitive.
    --[no-]trace               Print full Dart stack traces for exceptions.
-h, --help                     Print this usage information.
    --version                  Print the version of Dart Sass.


*/



//? =============== Bootstrap ============
/*

todo Responsive:
Wrapping Container Element: container-fluid

todo 12 Column Grid System
<div class="row">
    class="col-xs-4"></div> //todo xs/s/m/l/xl/... 
    class="col-xs-4"></div> //todo "4" because of 3 items in a 12 column system, "6" with 2 items, ....
    class="col-xs-4"></div>
</div>

todo Text:
Align: text-center
Color: text-primary

todo Images:
image could be exactly the width of our phone's screen: img-responsive

todo Buttons:
btn
btn-default/primary/info/danger..
btn-block => witdth 100%
fontawesome-btn: <i class="like?fas fa-thumbs-up    info?fas fa-info-circle  trash?fas fa-trash     paperPlane?fa fa-paper-plane"></i>   

todo Form:
All textual <input>, <textarea>, and <select> elements with the class .form-control have a width of 100%.


*/



//? =============== React ================
/*

todo GET Bootstrap-Icons

npm install bootstrap-icons
And add to index.js =>
import "bootstrap-icons/font/bootstrap-icons.css";


todo Combine React and Node.js/Express
https://rapidapi.com/blog/create-react-app-express/#:~:text=But%20if%20you%20just%20remember,that%20contain%20your%20React%20app.

import './App.css';
import React from 'react';


function App() {
  

  const [word, setWord] = React.useState('software');
  const [associations, setAssociations] = React.useState(null);
  console.log(associations)
  const getAssociations = () => {
    fetch('/users/associations/' + word)
      .then(result => result.json())
      .then(body => {setAssociations(body); console.log(body)});
  };


  return (
    <div className="App">

      <h1>Word resender</h1>
      <input value={word} onChange={e => setWord(e.target.value)} />
      <button onClick={getAssociations}>Find Associations</button>


      {associations && (
        Object.keys(associations).length === 0
          ? <p>No results</p>
          : <div>
            {associations}
          </div>
        
      )}


    </div>
  );
}

export default App;

cLient package.json:
"proxy": "http://localhost:3001",

*/



//? =============== Next.js ==============
/*

watch: npx next dev

sass:
    "sass": "sass -w ./styles/styles.scss:./styles/style.module.css",


todo Bootstrap-Einbindung
_app.tsx:
import Head from "next/head";
import Script from "next/script"
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"/>
    </Head>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></Script>
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp

todo Bootstrap-Icons 
_app.js:
import 'bootstrap-icons/font/bootstrap-icons.css'


todo Mongo DB

===>> Immer im API fetchen!

? const MongoClient = require('mongodb').MongoClient;
ODER 
? import User from '../../models/user';
? import mongoose from 'mongoose';

export default function MongoDB (req, res) {
  
todo Mongo Client
  MongoClient.connect(process.env.NEXT_PUBLIC_MONGODB_URI || 'mongodb+srv://wkdsteve:020290Ab@freiraum.xvduccp.mongodb.net/FREIraum?retryWrites=true&w=majority', async (err, client) => {
    if (err) { throw new Error(err) }
    console.log('Connection succesfull')
    
    var db = client.db("FREIraum");

        await db.collection('Alpha')
          .findOne({username: 'WKDTEST'}, (err, data) => {
            if(err)console.log(err);  
            console.log(data);
            }
          );

    console.log('Callback end, closing client now...')
    client.close();
    });


todo MONGOOSE

  try {
    mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI || 'mongodb+srv://wkdsteve:020290Ab@freiraum.xvduccp.mongodb.net/FREIraum?retryWrites=true&w=majority'
    , () =>{
      console.log("connected")
      const db = mongoose.connection;
      User.find({username: 'WKDTEST'})
          .exec((err, data) => {
              if(err)return console.log(err);
              console.log(data);
              res.json({1: data.password})
        });
    });
  } catch (error) {
    console.log("could not connect");
    console.log(error);
  };

}



//? =============== React ==========
/*

Babel konfigurieren
    npm i @babel/core \
          @babel/cli \
          @babel/preset-react --save-dev
Datei anlegen: .babelrc
{
    "presets": ["@babel/preset-react"]
  }

./node_modules/.bin/babel [input dir] --out-dir [output dir]

 */



//? =============== Node / NPM ===========
/*

todo Neuen Server starten:
    npx server --reload
    liefert die index.html des aktuellen Ordners auf localhost:8080 aus

todo concurrently
npm install -D concurrently nodemon
package.json:
    "build": "npx tsc",
    "start": "node dist/index.js",
    "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\""

todo use .env in package.json
https://stackoverflow.com/questions/34650527/how-to-use-environment-variables-in-package-json

In case you use .env file, let's use grep or eval to get a value environment variable from the .env file.

Updated start2 as @Paul suggested:

"scripts": {
    "start": "NODE_ENV=$(grep NODE_ENV .env | cut -d '=' -f2) some_script",
    "start2": "eval $(grep '^NODE_ENV' .env) && some_script"
}

 */



//? =============== GIT & Github =========
//#region 
/*

todo  ==== START, COMMIT, REVERT ==== 

git init
git diff DATEINAME => Was ist verändert in der Datei
git add .
git status
git commit -m "" => -am um add einzusparen
git log => --oneline
    --pretty=oneline

git revert COMMITID => 
    neue commit message (zb.: revert MESSAGEVONVORHER) 
    => shift+: um VI Edit-Mode Escape
    => wq (write & quit)
    
    <<<<<<<< BEDEUTET IN DATEI EINGETRAGEN
    ======== BEDEUTET KONFLIKT (nicht commit fähig, zb.: per hand löschen)
    git revert abort zum abbrechen, continue zum weitermachen

git revert HEAD~1

git reset --hard HEAD~2 löscht letzten 2 commits endgültig
git reset --soft HEAD~1 löscht den ltzten commit, staged ihn aber wieder

git checkout ./DATEINAME setzt die datei wieder auf den Ursprungszustand zurück.

GITHUB INCLUDE
git push 
git pull => Änderungen von guithub holen
CONTINUS DEPLOYEMENT?

…or create a new repository on the command line
echo "# y" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/StefanBartl/y.git
git push -u origin main
…or push an existing repository from the command line
git remote add origin https://github.com/StefanBartl/y.git
git branch -M main
git push -u origin main
todo  ==== BRANCHES ==== 
 

Neuer branch:
git checkout -b BRANCHNAME => wenn Branch angelegt ohne -b
Zusammenführen:
git merge BRANCHNAME
Bei Konflikten:
Per Hand lösen und dann nochmal mergen, committen
Branch löschen:
git branche -D BRANCHNAME, bei Konflikt nochmal für force oder merge



*/
//#endregion



//? =============== jQuery ===============
//#region 
/*
todo  ==== CDN (mit Fallback) ====

<!--! IN PRODUCTION BUILD CHANGE TO SLIM jQuery minified CDN -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<!-- jQuery slim minified CDN -->
    <!-- <script src="https://code.jquery.com/jquery-3.6.0.slim.min.js" integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous"></script> -->
<!-- jQuery CDN Fallback -->
    <script>window.jQuery || document.write("<script src='./jQuery/jquery-3.6.0.js'><\/script>") ||  document.write("<script src='./jQuery/jquery-3.6.0.min.js'><\/script>")</script>

todo  ==== ONLOAD ====

$('document').ready(function(){});
or
window.onload="myFunction()";
or
<body onload="myFunction()">

todo  ==== CSS-Selektoren ====

verwendbar zb.: wie 
$('Auswahl)
    .(input='text').css('color', 'red');
od. .(p > input).css('color', 'red');
od. .find('h2').css('color', 'red');
od. .filter('.klasse').css('color', 'red');
od. .filter(function(index){ //index bezieht sich auf alle bisher ausgewälten Elemente, die bekommen einen index
zb.:     return index === 1 || $(this).attr('id') === 'three';
});

außerdem chaining auch mit neuauswahl möglich:
    .end()
    .find('....')
    .css('.....):

oder als Variablen initialisierbar: let beispiel = $('.beispiel').find.......
'input[name^=Jahr]' ergibt alle input die mit Jahr beginnen


todo  ==== DOM ====
  
    .next() .nextAll()
    .parent() parents() .children()
    .closest()

    Checkbox auslesen: $(el).prop()
    Formulare auslesen mit val()
    zb select: 
        let $farbe = $select el
        $farbe.on('change', ()=>{$farbe.val})
    Attritbute: attr('..') ; setzen attr('..','..')
    data Attritbute: 
        $(el).data('...', '....')

todo  ==== Spezialzeichen $ / jQuery ====

    mit Variablen, JS Objekte, Funktionen, html string,  usw. verwendbar
    zb.: let perso = {vorname: a, nachname: n}
        $(perso).prop('vorname');


todo  ==== Methoden ====

zb.:
    addClass(), remoceClass(), toggleClass()
    hasClass()
    hide(), show()
    fadeIn(geschwindigkeit), fadeOut(), fadeToggle()
    slideUp(), slideDown(), toggleSlide()
    
Größe und Position:
    width(), height(), innerWidth, outerWidth() -> zum berechnen, da Einheit nicht dabei
    position(), offset() => auch zum setzen, offset ist die position im verhältniss zu root
    viewport => $(window).width()

    klasse ('js') lässt sich nur zu body hinzufügen, wenn javascript aktiviert ist!

todo  ==== EVENTS ==== 

  Event hanlder mit .off('...')  entfernen
  mit click() oder trigger('click') auslösen

  Event-Delegation (abfangen):
  Abzufangendes ereignis auf eltern element legen und dann:
  Syntax:
    Elternelement.`on`.abzufangendes Ereignis.Selektor der Kindelemente.auszuführende Funktion
  $(parent).on('click', 'el wo es auslösen soll', functio(){})

  ...
  $(el).on('click', (event)=>{e.preventDefault; e.stopPropagation (wenn event nicht weitergegeben werden soll)}

    Daten übergeben: 
    $(el).on('click', {daten: 3} (event)=>{
        e.data.daten;
    }

todo  ==== Ajax ====

load() zum Datenaustaustausch
let posting = $.post(url, daten)
posting.done((data)=>{daten....})

todo  ==== Spannende Libraries ====

sortable
snap
isotope
skrollr
stellar für parallax scrollen (unterschiedlich schnell)
alrtify
circullus für kreismenüs
datepicker
knob für kreisrunde formulareingaben
https://www.dropzone.dev/js/
https://jqueryvalidation.org/
countable  wörter zählen
typeahead zum autocompleten
jq user intrface tooltip
countdown
Landkate mit leaflet
navigator.geolocation.getCurrentPosition() für gps


*/
//#endregion



//? =============== MongoDB  =============
//#region Mongo DB Client

const MongoClient = require('mongodb').MongoClient;

async function DBClient (callback) {

  MongoClient.connect(process.env['MONGO_URI'], async (err, client) => {
    if (err) { throw new Error(err) }
    console.log('Connection succesfull, awaiting callback...')
    await callback(client);
    console.log('Callback end, closing client now...')
    client.close();
    });

};

module.exports = DBClient;


//#endregion



//? =============== Mongoose  =============
//#region

// ?    =================================================
//#region Queries

// Find Querie
Model.find({property: 'value'}, (err, data) => {
    if(err)console.log(err);
    if(data.length === 0)console.log('No match!');
    // Code here...
});   


// FindOne Querie
Model.findOne({property: 'value'}, (err, data) => {
    if(err)console.log(err);
    if(data === null)console.log('No Match!');
    // Code here...
});   

// iterate trough map
for (const key of Model.property.keys()) {
    // Prints "github", "twitter", "instagram"
    console.log(key);
  }
  for (const val of Model.property.values()) {
    // Prints "vkarpov15", "@code_barbarian", "vkarpov15"
    console.log(val);
  }

//#endregion



// ?    =================================================
//#region Connection

const mongoose = require('mongoose');

//Set up default mongoose connection
mongoose.connect(process.env.MONGODB, {useNewUrlParser: true, useUnifiedTopology: true});
//Get the connection
const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.on('open', () => { console.log(console, 'MongoDB connection open')});

// When the mongodb server goes down, the driver emits a 'close' event
db.on('close', () => { console.log('-> lost connection'); });
// The driver tries to automatically reconnect by default, so when the
// server starts the driver will reconnect and emit a 'reconnect' event.
db.on('reconnect', () => { console.log('-> reconnected'); });

// ! if separate it in another module
module.exports = db;
// and then...
const db = require('./mongooseConnection');






//? ==========================
const mongoose = require('mongoose');

//Set up default mongoose connection
mongoose.connect(process.env.MONGODB, {useNewUrlParser: true, useUnifiedTopology: true});
//Get the connection
const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;



//#endregion



// ? =====================================================
//#region Schemes

// path: ./models/...nameOfModel....js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GuitarAmpModel = new Schema({
  category: [{type: Schema.Types.ObjectId, ref: 'GuitarAmpSchema'}],
  cost: {type: Number, min: 0,},
  status: {type: String, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance'},
  due_back: {type: Date, default: Date.now},
  special_infos: {type: String, minLength: 3}
});

GuitarAmpModel
.virtual('url')
.get(function () {
  return '/models/guitarAmpInstance/' + this._id;
});

module.exports = mongoose.model('GuitarAmpInstance', GuitarAmpModel );

//#endregion



// ? =====================================================
//#region Node/Express Controller

// path: ./controllers/...nameofcontroller.....js

const GuitarAmp = require('../models/guitarAmpSchema');

// Display list of all GuitarAmps.
exports.guitarAmpInstance_index = function(req, res) {
    GuitarAmp.find({manufactore: 'Peavey'})
        .exec((err, Amps) => {
            if(err)return console.log(err);
            res.render('amps', {list: Amps});
        });
};

// Display detail page for a specific GuitarAmp.
exports.guitarAmpInstance_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: GuitarAmp detail: ' + req.params.id);
};

//#endregion



// ? =====================================================
//#region Route Catalog

// path: ./routes/catalog.js

//! Mount catalog as middleware in app.js:
// const catalog = require('./routes/catalog');
// app.use('/catalog', catalog);

const express = require('express');
const router = express.Router();

// Require controller modules.
const guitarAmp_controller = require('../controllers/guitarAmpController');
const guitarAmpInstance_controller = require('../controllers/guitarAmpInstanceController');

// router.get('/guitarAmp', guitarAmp_controller.index);
// router.get('/guitarAmp/create', guitarAmp_controller.guitarAmp_create_get);

// router.get('/guitarAmpInstance', guitarAmpInstance_controller.index);
// router.get('/guitarAmpInstance/create', guitarAmpInstance_controller.guitarAmpInstance_create_get);

module.exports = router;

//#endregion

//#endregion
