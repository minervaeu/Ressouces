//? ==== WKD || Typescript Notizen ====

//#region 
/*
todo  ==== Installiern & Kompilieren ==== 

node:
npm install typescript -g oder --save-dev
npm install -D typescript@3.3.3

? npm install -D tslint@5.12.1
? npm install --save @types/jquery
? Für express:
npm install -S express@4.16.4
npm install -D @types/express@4.16.1

oder ohne lint
npm i -D typescript @types/express @types/node

tsconfig.json
{
    "compilerOptions": {
      "module": "commonjs",
      "esModuleInterop": true,
      "strict": true,
      "skipLibCheck": true,
      "target": "es6",
      "moduleResolution": "node",
      "sourceMap": true,
      "outDir": "dist/ts/default is root"
    },
    "lib": ["es2015"],
    "exclude": [
        "node_modules"
    ]
  }
module: Gibt die Methode zur Erzeugung des Modulcodes an. Node verwendet commonjs.
target: Gibt das Ausgabe-Sprachniveau an.
moduleResolution: Dies hilft dem Compiler herauszufinden, worauf sich ein Import bezieht. Der Wert node imitiert den Mechanismus zur Auflösung des Node-Moduls.
outDir: Dies ist der Speicherort für die Ausgabe von .js-Dateien nach der Transpilation. 
? ODER
tsc --init

npm install -D concurrently nodemon
package.json:
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

tsconfig.json template
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "ES5",
        "sourceMap": true
    },
    "exclude": [
        "node_modules"
    ]
}

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

*/
//#endregion
