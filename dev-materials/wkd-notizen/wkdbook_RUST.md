# wkdbook: Rust


## Ein Projekt erstellen

- Projektverzeichnis mit Cargo erstellen: `cargo new projektname`
- Dies erstellt einen `src`-Ordner mit der main.rs Datei (inkl. Hello World Template) und einen `target`-Ordner mit einem Git-Repository und der zugehörigen `.gitignore`-Datei sowie einer `Cargo.toml`-Datei, welche die Cargo-Konfigurationsdatei darstellt. Eine `Cargo.lock`-Datei wird auch erstellt, diese sollte jedoch vom Developer i.d.R. nicht Bearbeitet werden. Darin werden die Versionsnummern der Abhängigkeiten deines ersten erfolgreichen Builds gespeichert. Damit erspart sich Cargo das erneute checken von Versionsnummern und als Developer erhält man auch in Zukunft sicher einen Build mit funktionierenden Versionen der Abhängigkeiten. Erst wenn man in der der inder `Cargo.toml` manuell Versionsnummern ändert, aktualisiert sich auch die `Cargo.lock`
- Mit dem Befehl `cargo build` kann man das Projekt builden und eine ausführbare Binary-Datei erstellen
- Der Befehl `cargo run` fasst das builden sowie executen der Binary in einem Befehl zusammen
- `cargo check` überprüft schnell deinen Code, um sicherzustellen, dass er kompiliert, erzeugt aber keine ausführbare Datei



***

## Cargo / Crates, Bibliotheken, Module, Funktionen & Makros

### Cargo / Crates
- [Cargo](https://doc.rust-lang.org/cargo/) ist das Bau-System (build system) und der Paketmanager von Rust. Die meisten Rust-Entwickler verwenden dieses Werkzeug, um ihre Rust-Projekte zu verwalten, weil Cargo viele Aufgaben für dich erledigt, z.B. Bauen deines Codes, Herunterladen der Bibliotheken, von denen dein Code abhängt, und das Bauen dieser Bibliotheken. (Wir nennen Bibliotheken, die dein Code benötigt, Abhängigkeiten (dependencies))
- Ein Crate (dt.: Kiste) ist eine Sammlung von Rust-Quellcode-Dateien und werden von Rust-Developer typischerweise mit Cargo auf [crates.io](crates.io) hochgeladen
- Ein Projekt kann entweder als "binary crate" oder ["library crate"](https://doc.rust-lang.org/rust-by-example/crates/lib.html) angelegt werden. Ersteres können ausgeführt werden, zweiteres können ausschließlich in anderen Projekten eingebunden, aber eben nicht selbstständig ausgeführt werden
- Möchte man eine "library crate" einbinden muss man dies in der `Cargo.toml` unter `[dependencies]` deklarien, zb.: `rand = "0.8.3"`
- Mit `cargo update` überschreibt Cargo die Versionsnummer ind `Cargo.toml` & `Cargo.lock` mit den aktuellsten Versionen der Abhängigkeiten
- In der Datei Cargo.toml ist alles, was nach einer Überschrift folgt, Teil dieses Abschnitts, der so lange andauert, bis ein anderer Abschnitt beginnt. Im Abschnitt `[dependencies]` teilst du Cargo mit, von welchen externen Kisten dein Projekt abhängt und welche Versionen dieser Kisten du benötigst
- Wenn wir eine externe Abhängigkeit einfügen, holt Cargo die neuesten Versionen von allem was die Abhängigkeit benötigt. Möglicherweiße lädt Cargo daher auch andere Pakete/Bibliotheken, von dem die hinzugefügte Abhängigkeit selbst abhängt
- Eine weitere nette Funktionalität von Cargo ist, dass das Ausführen des Kommandos `cargo doc --open` die von all deinen Abhängigkeiten bereitgestellte Dokumentation lokal zusammenstellt und in deinem Browser öffnet


### Bibliotheken
- Standardmäßig hat Rust einige Elemente in der Standardbibliothek definiert, die es in den Gültigkeitsbereich jedes Programms bringt. Diese Menge wird Präludium genannt, und du kannst deren Inhalt in der [Dokumentation der Standardbibliothek](https://doc.rust-lang.org/std/prelude/index.html) sehen
- Wenn ein Typ, den du verwenden willst, nicht im Präludium enthalten ist, musst du diesen Typ explizit mit einer use-Anweisung in den Gültigkeitsbereich bringen. Das Verwenden der Bibliothek std::io bietet dir eine Reihe von nützlichen Funktionalitäten, einschließlich der Möglichkeit, Benutzereingaben entgegenzunehmen
- Biblitotheken und Module werden mit `use ...` eingebunden
- `io::stdin()` ruft die Funktion `stdin` aus dem Modul `io` auf 
- Bibliotheken wie zb.: `io` müssen nicht am Anfang des Programms importiert werden, sondern man könnte die Funktion trotzdem verwenden, indem man den Funktionsaufruf als [`std::io::stdin`](https://doc.rust-lang.org/std/io/struct.Stdin.html) schreibt. Die Funktion `stdin` gibt eine Instanz von `std::io::Stdin` zurück, was ein Typ ist, der eine Standardeingaberessource (handle to the standard input) für dein Terminal darstellt


### Wichtige Crates

- [rand](https://crates.io/crates/rand) um zufällige Zahlen zu generieren


### Wichtige Module

- `std:io` => Ein-/Ausgabefunktionalität 
- `std::cmp::Ordering` => Vergleichen und Ordnen von Werten


### Wichtige Funktionen, Methoden & Makros 

- [`println!`](https://doc.rust-lang.org/std/macro.println.html) gibt eine Zeichenkette auf dem Bildschirm aus, zb.: `println!("Rate die Zahl!");`
- Mehrere Werte in `println` ausgeben: `println!("x = {} und y = {}", x, y);`
  
- [`read_line`](https://doc.rust-lang.org/std/io/struct.Stdin.html#method.read_line) ermöglicht es eine Benutzereingabe zu verarbeiten, zb.: `io::stdin().read_line(&mut guess)`. Das Zeichenketten-Argument muss veränderlich (`mut` bzw. `&mut`, um die Referenz `&` veränderlich zu machen) sein, damit die Methode den Inhalt der Zeichenkette ändern kann

- [`parse()`](https://doc.rust-lang.org/std/primitive.str.html#method.parse)-Methode für Strings  konvertiert eine Zeichenkette in einen anderen Typ. Die Methode parse funktioniert nur bei Zeichen, die logisch in Zahlen umgewandelt werden können. Wenn die Zeichenkette zum Beispiel A👍% enthielte, gäbe es keine Möglichkeit, dies in eine Zahl umzuwandeln. Da dies fehlschlagen könnte, gibt die parse-Methode einen Result-Typ zurück

### Wichtige Merkmale

**Beispiel:** In Crate `rand`, eingebunden mit `rand::thread_rng().gen_range(1..=100);`, bedeutet...
- `use rand::Rng;` Das Merkmal (trait) Rng definiert Methoden, die Zufallszahlengeneratoren implementieren, und dieses Merkmal muss im Gültigkeitsbereich sein, damit wir diese Methoden verwenden können
- `rand::thread_rng` gibt einen speziellen Zufallszahlengenerator zurück: lokal zum aktuellen Ausführungsstrang (thread) und vom Betriebssystem initialisiert (seeded)
- Die Methode `gen_range` nimmt einen Bereichsausdruck als Argument und generiert eine Zufallszahl in diesem Bereich. Ein Bereichsausdruck hat die Form `start..=end`, beinhaltet also die Untergrenze und die Obergrenze, sodass wir `1..=100` angeben müssen, um eine Zahl zwischen 1 und 100 zu erhalten



***

## [Variablen](https://rust-lang-de.github.io/rustbook-de/ch03-01-variables-and-mutability.html)

- Mit einer `let`-Anweisung wird eine Variable erzeugt: `let apples = 5;`
- Das Gleichheitszeichen (=) sagt Rust, dass etwas an die Variable gebnunden wird
- In Rust sind Variablen standardmäßig unveränderlich (immutable), das heißt, sobald wir der Variablen einen Wert gegeben haben, wird sich der Wert nicht mehr ändern
- `&` zeigt an, dass es sich bei diesem Argument um eine Referenz handelt, welche die Möglichkeit bietet, mehrere Teile des Codes auf einen Datenteil zuzugreifen, ohne das diese Daten mehrfach in den Speicher kopiert werden müssen. **Referenzen sind ebenfalls unveränderlich!**


### Shadowing
- Mit **"Shadowing"** wird ein Wert von einem Typ in einen anderen Typ konvertieren. Durch das "Beschatten" kann man einen Variablennamen wiederverwenden, anstatt zwei eindeutige Variablen zu erstellen, man kann daher **eine neue Variable mit dem gleichen Namen wie eine vorherige Variable deklarieren**
-  Die erste Variable wird von der zweiten "beschattet" (shadowed), was bedeutet, dass die zweite Variable das ist, was der Compiler sieht, wenn der Namen der Variable verwendet wird 
- Die zweite Variable beschattet die erste und nimmt alle Verwendungen des Variablennamens auf sich, bis sie entweder selbst beschattet wird oder der Gültigkeitsbereich endet
- Beispiel:

        let x = 5;
        let x = x + 1;
        {
        let x = x * 2;
            println!("Der Wert von x im inneren Gültigkeitsbereich ist: {x}");
        }

- Dieses Programm bindet zunächst x an den Wert 5. Dann wird eine neue Variable x erzeugt, indem let x = wiederholt wird, wobei der ursprüngliche Wert genommen und 1 hinzugefügt wird, sodass der Wert von x dann 6 ist. Innerhalb eines inneren Gültigkeitsbereichs, der durch die geschweiften Klammern geschaffen wird, beschattet die dritte let-Anweisung dann ebenfalls x und erzeugt eine neue Variable, wobei der vorherige Wert mit 2 multipliziert wird, um x einen Wert von 12 zu geben. Wenn dieser Gültigkeitsbereich zu Ende ist, endet die innere Beschattung und x wird wieder zu 6.
- **shadowing ändert nicht die mutability der Variable**
- Lässt man das `let` Keyword weg, bekommt man einen Kompilierfehler
- **Mit shadowing kann man den Datentypen der Variable ändern (ohne den Namen zu ändern und damit eine neue Variable zu deklarieren)**
- Beispiel:
  
        let spaces = "   ";
        let spaces = spaces.len();

- Die erste Variable `spaces` ist ein `String`, die zweite repräsentiert die Länge des `Strings` und ist somit ein `Integer`



### let mutability (Veränderlichkeit)

- In Rust sind Variablen standarmäßig immutable (Unveränderlich).
- Um eine Variable veränderlich zu machen, ergänzen wir `mut` vor dem Variablennamen: `let mut bananas = 5;`


### Konstanten

- Konstanten sind **immer** unveränderlich (keine mutability via `mut`)
- Konstanten werden mit dem Schlüsselwort `const` anstelle des Schlüsselworts `let` deklariert 
- Der Datentyp des Wertes **muss mit annotiert** werden
- Konstanten können in jedem Gültigkeitsbereich deklariert werden (auch im globalen) und  sind für die gesamte Laufzeit eines Programms in dem Gültigkeitsbereich gültig, in dem sie deklariert wurden
- Konstanten können **nicht auf dynamisch bzw. zur Laufzeit berechnete Werte** gesetzt werden
- Die Namenskonvention von Rust für Konstanten ist die Verwendung von Großbuchstaben mit Unterstrichen zwischen den Wörtern
- Beispiel einer gültigen Deklaration: `const THREE_HOURS_IN_SECONDS: u32 = 60 * 60 * 3;`
- [Weitere Informationen darüber, welche Operationen bei der Deklaration von Konstanten verwendet werden können](https://doc.rust-lang.org/reference/const_eval.html)


### Strings

- `String::new()` ist eine Funktion, die eine neue Instanz eines [String](https://doc.rust-lang.org/std/string/struct.String.html) zurückgibt
- String ist ein von der Standardbibliothek bereitgestellter Zeichenketten-Typ, der ein wachstumsfähiges, UTF-8-kodiertes Stück Text darstellt



***

## [Datentypen](https://rust-lang-de.github.io/rustbook-de/ch03-02-data-types.html)

  Rust ist eine statisch typisierte Sprache ist, was bedeutet, dass der Compiler die Typen von allen Variablen zur Kompilierzeit kennen muss. Der Compiler kann normalerweise auf der Grundlage des Wertes und wie er verwenden wird, ableiten, welchen Typ man verwenden sollte.Sind mehrere Datentypen für eine Variable möglich, muss man diesen annotieren. Der Compiler zeigt dann den Fehler `type annotations needed`. Es gibt zwei Untermengen: Skalar(Scalar)- und Verbund(Compound)- Datentypen.

### Skalar-Datentypen (scalar types)
- Ein skalarer Datentyp stellt einen einzelnen Wert dar. Rust hat vier primäre skalare Typen: Ganze Zahlen, Fließkommazahlen, boolesche Werte (Wahrheitswerte) und Zeichen
  
#### Ganzzahl-Typen
- Eine ganze Zahl ist eine Zahl ohne Bruchteilkomponente
- Ganzzahltypen ohne Vorzeichen (unsigned) beginnen mit `u`, zb.: `u32` für eine 32-Bit Ganzzahl
- Ganzzahltypen mit Vorzeichen (signed) beginnen mit `i`, zb.: `i32`. Mit "Vorzeichen" ist + oder - gemeint, daher kann `i32` auch negative Werte halten
- Beispiel:
- `let x:u8 = 4` hält den Wert **4**, `let x:i8 = 4` hät den Wert **+4** und `let x:i8 = -4` hält den Wert **-4**
- Jede vorzeichenbehaftete Variante kann Zahlen von -(2n - 1) bis einschließlich 2n - 1 - 1 speichern, wobei n die Anzahl an Bits ist, die diese Variante benutzt. Ein i8 kann also Zahlen von -(27) bis 27 - 1 speichern, was -128 bis 127 entspricht. Vorzeichenlose Varianten können Zahlen von 0 bis 2n - 1 speichern, also kann ein u8 Zahlen von 0 bis 28 - 1 speichern, was 0 bis 255 entspricht

|Länge	|Vorzeichenbehaftet	|Vorzeichenlos|
|:-----:|:-----------------:|:-----------:|
|8 Bit	|i8 	            |u8           |
|16 Bit	|i16	            |u16          |
|32 Bit	|i32	            |u32          |
|64 Bit	|i64	            |u64          |
|128 Bit|i128	            |u128         |
|arch	|isize	            |usize        |

- Die Typen isize und usize von der Architektur des Computers ab, auf dem das Programm läuf - welcher in der Tabelle als „arch“ bezeichnet wird: 64 Bit auf einer 64-Bit-Architektur befindest und 32 Bit auf einer 32-Bit-Architektur
- [Ganzzahl-Literale](https://rust-lang-de.github.io/rustbook-de/ch03-02-data-types.html) sind erlaubt

- Vorzeichenbehaftete Zahlen werden unter Verwendung der [Zweierkomplementdarstellung](https://de.wikipedia.org/wiki/Zweierkomplement#Darstellung_und_Umwandlung_aus_dem_Dezimalsystem) gespeichert. Zusammengefasst werden also positive Zahlen mit einer führenden 0 dargestellt (zb.: 01 für den Wert 1) und negative Zahlen werden aus einer positiven Zahl codiert: Sämtliche binären Stellen werden negiert und zu dem Ergebnis der Wert 1 addiert. Eine Beispielhafte Umwandlung der negativen Dezimalzahl −4 in die Zweierkomplementdarstellung unter Verwendung von 8 binären Stellen:
1. Vorzeichen ignorieren und ins Binärsystem umrechnen: 4(10) = 00000100(2)
2. Invertieren: Not[00000100] = 11111011
3. Eins addieren: 11111011 + 00000001 = 11111100

- Ganzzahlige Typen sind standardmäßig i32
- Wird ein Wert größer oder kleiner als der zugewiesene Datentyp erlaubt tritt ein sogenannter Ganzzahlüberlauf auf und Rust reagiert darauf folgendermaßen: 
1. Wird im Fehlersuchmodus (debug mode) kompiliert, fügt Rust Prüfungen auf Ganzzahlüberläufe ein, was dazu führt, dass das Programm zur Laufzeit abbricht (panic) ([Programmabbruch](https://rust-lang-de.github.io/rustbook-de/ch09-01-unrecoverable-errors-with-panic.html)), falls dieses Verhalten auftritt. Rust verwendet den Begriff „panic“, wenn ein Programm durch einen Fehler abgebrochen wird
2. Wenn mit dem Schalter --release im Freigabemodus (release mode) kompiliert wird, fügt Rust keine Prüfungen auf Ganzzahlüberläufe, die das Programm abbrechen, ein. Wenn ein Überlauf auftritt, führt Rust stattdessen einen Zweier-Komplement-Umbruch durch. Kurz gesagt, Werte die größer als der Maximalwert den der Typ enthalten kann sind, werden umgebrochen zum kleinsten Wert den der Typ enthalten kann. Im Falle eines u8 wird der Wert 256 zu 0, der Wert 257 zu 1 und so weiter. Das Programm wird nicht abbrechen, aber die Variable wird wahrscheinlich einen anderen Wert annehmen, als man erwartet. Sich auf das Verhalten von Ganzzahlüberläufen zu verlassen wird als Fehler angesehen!

#### Fließkomma-Typen

- Rust hat auch zwei primitive Typen für Fließkommazahlen, das sind Zahlen mit Dezimalkomma
- Die Fließkomma-Typen in Rust sind `f32` und `f64`, die 32 Bit bzw. 64 Bit groß sind
- Der Standardtyp ist f64, da er auf modernen CPUs ungefähr die gleiche Geschwindigkeit wie f32 hat, aber eine höhere Präzision ermöglicht.
- Beide Fließkomma-Typen sind vorzeichenbehaftet.
- Fließkommazahlen werden nach dem [IEEE-754-Standard](https://de.wikipedia.org/wiki/IEEE_754) dargestellt. Der Typ f32 ist eine Fließkommazahl mit einfacher Genauigkeit und f64 mit doppelter Genauigkeit

#### Der boolesche Typ

- Wie in den meisten anderen Programmiersprachen hat ein boolescher Typ in Rust zwei mögliche Werte: true (wahr) und false (falsch)
- Boolesche Werte sind ein Byte groß. In Rust wird der boolesche Typ mit bool spezifiziert
- `let f: bool = false`  Beispiel mit expliziter Typannotation

#### Der Zeichen-Typ

- Rusts Typ `char` ist der primitivste alphabetische Typ der Sprache
- `let z: char = 'ℤ';` Beispiel mit expliziter Typannotation
- `let heart_eyed_cat = '😻';`  Beispiel ohne Typannotation
- `char`-Literale werden mit einfachen Anführungszeichen angeben, im Gegensatz zu Zeichenketten-Literalen, die doppelte Anführungszeichen verwenden
- Der Typ `char` von Rust ist vier Bytes groß
- `char` stellt einen Unicode-Skalarwert dar, was bedeutet, dass er viel mehr als nur ASCII darstellen kann. Akzentuierte Buchstaben, chinesische, japanische und koreanische Zeichen, Emoji und Leerzeichen mit Null-Breite sind gültige char-Werte in Rust. Unicode-Skalarwerte reichen von U+0000 bis U+D7FF und von U+E000 bis einschließlich U+10FFFF

### Verbund-Datentypen (compound types)

Verbund-Typen (compound types) können mehrere Werte zu einem Typ gruppieren. Rust hat zwei primitive Verbund-Typen: Tupel (tuples) und Arrays (arrays).

#### Der Tupel-Typ

- Ein Tupel ist eine allgemeine Möglichkeit, eine Reihe von Werten mit einer Vielzahl von Typen zu einem Verbund-Typ zusammenzufassen 
- Tupel haben eine feste Länge: Einmal deklariert, können sie weder wachsen noch schrumpfen
- `let tup: (i32, f64, u8) = (500, 6.4, 1);` Beispiel mit epliziter Typ-Annotationen
-  Ein Tupel wird als ein einziges Verbundelement betrachtet
-  Um einzelnen Werte aus einem Tupel herauszubekommen, kann man einen Musterabgleich verwenden. Dies wird destrukturieren (desctructing) genannt: 

                fn main() {
                let tup = (500, 6.4, 1);

                let (x, y, z) = tup; // Hier wird der Tupel in drei Teile zerlegt (destructing)

                println!("Der Wert von y ist: {y}");
                }

- Auf ein Tupelelement wird zugegriffen, indem ein Punkt (.) gefolgt vom Index des Wertes notiert wird, auf dem man zugreifen möchte. Zum Beispiel:

                fn main() {
                let x: (i32, f64, u8) = (500, 6.4, 1);

                let five_hundred = x.0;

                let six_point_four = x.1;

                let one = x.2;
                }

Dieses Programm erstellt das Tupel x und greift dann auf jedes Element des Tupels über die jeweiligen Indizes zu. Wie bei den meisten Programmiersprachen ist der erste Index in einem Tupel 0.

- Das Tupel ohne Werte gibt den Einheitswert (unit value) zurück.

#### Der Array-Typ

- Im Gegensatz zu einem Tupel muss jedes Element eines Arrays den gleichen Typ haben
- Anders als Arrays in einigen anderen Sprachen haben Arrays in Rust eine feste Länge, also eine feste Anzahl an Elementen die nicht weniger oder mehr werden können. Tipp: Dies können die sogenannten Vektor-Typen, welche von der Standardbibliothek bereitgestellt werden
- Ein Array wird als kommagetrennte Liste in eckigen Klammern geschrieben
  
                fn main() {
                let a = [1, 2, 3, 4, 5];
                }

- Arrays werden im Stack abgelegt
- `let months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];` Array ohne Typannotation
- `let a: [i32; 5] = [1, 2, 3, 4, 5];` Array mit expliziter Typannotation: Hier ist i32 der Typ aller Elemente. Nach dem Semikolon gibt die Zahl 5 an, dass das Array fünf Elemente enthält.
- Kurze Schreibweise für ein `Array`, indem jedes Element denselben Wert enthält: Anfangswert, gefolgt von einem Semikolon, und dann die Länge des Arrays in eckigen Klammern: `let a = [3; 5];` Das Array `a` wird 5 Elemente enthalten, die alle anfänglich auf den Wert 3 gesetzt werden. Dies ist dasselbe wie `let a = [3, 3, 3, 3, 3];`, nur kürzer
- Zugriff auf Array-Elemente:
  
                fn main() {
                let a = [1, 2, 3, 4, 5];

                let first = a[0];
                let second = a[1];
                }

- Versucht man auf ein Element eines Array zuzugreifen, dessen Index die Anzahl der Elemente des Arrays übersteigt, wird die typische Fehlermeldung `thread 'main' panicked at 'index out of bounds` ausgegeben



***

## Werte

### Result
- `read_line` als Beispiel schreibt die Benutzereingabe in die übergebene String-Variable, gibt aber darüber hinaus auch einen Result-Wert zurück
- [Result](https://doc.rust-lang.org/std/result/enum.Result.html) ist eine [Aufzählung](https://rust-lang-de.github.io/rustbook-de/ch06-00-enums.html) (enumeration, oder kurz enum), die einen Datentyp darstellt, der einem von mehreren möglichen Zuständen annehmen kann. Wir nennen jeden möglichen Zustand eine Variante. **Der Zweck dieser Result-Typen ist es, Informationen zur Fehlerbehandlung zu kodieren.**. Result gibt entweder den "Ok" oder "Err" Wert zurück 
- Diese Werte werden Varianten genannt. Die Variante Ok gibt an, dass die Operation erfolgreich war, und der erfolgreich generierte Wert innerhalb von Ok steht. Die Variante Err bedeutet, dass die Operation fehlgeschlagen ist, und Err enthält Informationen darüber, wie oder warum die Operation fehlgeschlagen ist
- Für Werte vom Typ Result sind, wie für Werte jedes Typs, Methoden definiert. Eine Instanz von Result hat eine [`Methode expect`](https://doc.rust-lang.org/std/result/enum.Result.html#method.expect), die man aufrufen kann
- Wenn diese io::Result-Instanz ein Err-Wert ist, wird expect das Programm zum Absturz bringen und die Meldung anzeigen, die als Argument an expect übergeben worden ist
- Wenn die Methode read_line ein Err zurückgibt, ist dies wahrscheinlich das Ergebnis eines Fehlers, der vom zugrundeliegenden Betriebssystem herrührt
- Wenn diese io::Result-Instanz ein Ok-Wert ist, wird expect den Wert, den Ok hält, als Rückgabewert verwenden. In diesem Fall ist dieser Wert die Anzahl der Bytes, die der Benutzer in die Standardeingabe eingegeben hat
- Wird expect nicht aufgerufen, wird das Programm kompiliert, aber eine Warnung wird ausgegeben
- Rust warnt, dass du den von read_line zurückgegebenen Result-Wert nicht verwendet hast, was darauf hinweist, dass das Programm einen möglichen Fehler nicht behandelt hat. Der richtige Weg, die Warnung zu unterdrücken, ist eine Fehlerbehandlung zu schreiben, aber man kann das Programm auch nur abstürzen lassen, indem man, wenn ein Problem auftritt, nur `expect`verwendet

#### Einheitswert (unit value)

Ausdrücke geben implizit den Einheitswert zurück, wenn sie keinen anderen Wert zurückgeben.

- Tupel: Das Tupel ohne Werte hat einen speziellen Namen: Einheitswert (unit value). Dieser Wert und der zugehörige Typ (Einheitstyp (unit type)) werden beide mit () geschrieben und stellen einen leeren Wert oder einen leeren Rückgabetyp dar.

***




## Funktionen
- Eine assoziierte Funktion ist eine Funktion, die auf einem Typ implementiert ist, zb.: `::new` bei `String::new()` (In etwa wie eine Methode eines Javascript-Objektes)



***

## Control flow (Kontrollfluss-Mechanismen)

- [match](https://rust-lang-de.github.io/rustbook-de/ch06-02-match.html): Gleicht einen Wert mit einer Reihe von Mustern ab und führt dann Code zum jeweils passenden Muster aus. Stelle dir einen match-Ausdruck wie eine Münzsortiermaschine vor: Die Münzen rutschen eine Bahn mit unterschiedlich großen Löchern entlang, und jede Münze fällt durch das erste Loch, in das sie hineinpasst. Auf die gleiche Weise durchlaufen die Werte die Muster in einem match-Ausdruck und beim ersten „passenden“ Muster fällt der Wert in den zugehörigen Codeblock, der ausgeführt werden soll
- Das Keyword [`loop{}`](https://doc.rust-lang.org/std/keyword.loop.html) erzeugt eine Endlosschleife, Benutzer-Abbruch mit STRG+C

- `trim` Eliminiert Textumbrüche `/n` am Anfang und Ende eines Strings
- `parse` Konvertiert einen Wert, welcher als String existiert in einen Zahlentyp, falls möglich, zb.: `"540"` zu `540`
- `expect` Abfangen eines Fehlers. Nachricht an Benutzer in den Funktionsausdruck: `.expect("Hier Nachricht eintgeben")` 


***



## Ownership

- Variablen mit `&`-Referenzauszeichnung sind Pointer

|Type  |Ownership        |Alias?|Mutate?|
|:----:|:---------------:|:----:|:-----:|
|T     |Owned            |      |yes    |
|&T    |Shared reference |yes   |       |
|&mut T|Mutable reference|      |yes    |
Quelle: 2 (Geht das schöner??????????)

Zur Tabelle: 
- Normale Types besitzen die Ownership über den Wert und können ihn auch mutieren.
- `Shared references` erlauben das Teilen (zb.: als Parameter für eine Funktion), aber nicht das Mutieren. Sie sind, für den Compiler, "geborgte" (borrowed) Werte von anderen Variablen. Die Referenz kann zwar den Wert verändern, aber ist `unmutable`. Das bedeutet zb.: das auf Referenz-Vektoren nicht `push()` usw... ausgeführt werden kann. Ausnahme sind spezielle APIs mit erlaubten `unsafe code`. Das schreiben und lesen der originalen Variable über die `&`-Referenzvariable ist weiterhin möglich
- `Mutable references` erlauben auch das Mutieren der Referenz. Sie sperren die originale Variable, weder mutieren, schreiben, lesen oder selbst das auslesen der Länge mit `.len()` auf der dieser ist nicht möglich solange eine `&mut`-Referenz von ihr besteht, dies kann ausschließlich über die `&mut` passieren



- `deep copy` und `clone()`:
  
                fn main(){

                        let mut book = Vec::new();

                        // Wenn man in `C` `erase(book)` übergibt, würde C dies tun aber man könnte `book` so oft übergeben wie man möchte, denn es übergibt eigentlich eine `deep copy`
                        // In `Rust` kann man es standarmäig nur 1x übergeben, da die `Ownership` auf die Funktion `erase()` übergeht
                        // Möchte man jedoch in Rust auch eine `deep copy` übergeben, benutzt man `clone()`
                        
                        erase(book.clone()) 
                }

                fn erase(book: Vec<String>){
                        ...erase
                }

Dieses Default-Verhalten in `C` wird mit sog. `copy constructors` erzeugt. In `Rust` ist dies mit `clone()` explizit gelöst.


***



## unsafe Rust

`unsafe`-Rust ist ein Superset von Rust, dass erlaubt Regeln zu brechen. Man sagt dem Compiler im Grunde "Vertrau mir in diesem Closure". Das `unsafe`-closure wird wir folgt deklariert:

                unsafe {
                        ...
                }





## Quellen

1. [rustbook-Deutsch](https://rust-lang-de.github.io/rustbook-de/)
2. ["Diving Into Rust For The First Time" - Coding Tech, Youtube-Video (Dauer: 01:10:29)](https://www.youtube.com/watch?v=_jMSrMex6R0&list=PLFjq8z-aGyQ6t_LGp7wqHsHTYO-pDDx84)