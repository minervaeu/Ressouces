// ==== WKD || WEB-Development Notizen ====






//? =============== SASS ================
//#region 
/*

todo  ==== WEB ==== 

https://sass-lang.com/dart-sass

node.js install:
npm install -g sass
(Frontend instal Dart-Sass via Github-repo)

compile with watcher:
sass -w style.scss:style.css
(GUI f.e. Prepros)

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