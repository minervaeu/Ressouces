//!==== WKD || WEB-Development Notizen ====





//? =============== CSS ==========
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



//? =============== Bootstrap ==========
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



//? =============== React ==========
/*



*/



//? =============== Next.js ==========
/*

watch: npx next dev

sass:
    "sass": "sass -w ./styles/styles.scss:./styles/style.module.css",


Bootstrap-Einbindung
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



//? =============== Node / NPM ==========
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

 */


//? =============== GIT & Github ==========
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



//? =============== jQuery ================
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



//? =============== Typescript  ===========
//#region 
/*
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

todo  ==== Interface ==== 

Example:

? ==> Definieren der Datentypen
    interface Name {
        firstName: string;
    }

? ==> Definieren, wie die Daten aus den Interface verarbeitet werden 
    const nameCreator = (name: Name): string {
        return  `Hello, ${name.firstName}`
    };

? Daten initialisiern
    let myName = {firstName: "Steve"};

? Interface verwenden
    console.log(nameCreator(myName))


todo  ==== Generic ==== 

Example:

? ==> Generic (T is 'open for type interpretation')
    function nameCreator<T>(name: T): T {
        return  name
    };

? Daten initialisiern
    let myName= nameCreator<string>('WKD');
    or
    let myName= nameCreator<numbrt>(2);


todo  ==== Decorators ==== 

function Dummy(){....};

@Dummy              ==> Now the function is available in the class Message
export default class Message{
    name;
    constructor(name){
        this,name = name;
    }
}


*/
//#endregion





