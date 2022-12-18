# wkdbook: Rust


## Ein Projekt erstellen

- Projektverzeichnis mit Cargo erstellen: `cargo new projektname`
- Dies erstellt einen `src`-Ordner mit der main.rs Datei (inkl. Hello World Template) und einen `target`-Ordner mit einem Git-Repository und der zugehörigen `.gitignore`-Datei sowie einer `Cargo.toml`-Datei, welche die Cargo-Konfigurationsdatei darstellt. Eine `Cargo.lock`-Datei wird auch erstellt, diese sollte jedoch vom Developer i.d.R. nicht Bearbeitet werden. Darin werden die Versionsnummern der Abhängigkeiten deines ersten erfolgreichen Builds gespeichert. Damit erspart sich Cargo das erneute checken von Versionsnummern und als Developer erhält man auch in Zukunft sicher einen Build mit funktionierenden Versionen der Abhängigkeiten. Erst wenn man in der der inder `Cargo.toml` manuell Versionsnummern ändert, aktualisiert sich auch die `Cargo.lock`.
- Mit dem Befehl `cargo build` kann man das Projekt builden und eine ausführbare Binary-Datei erstellen.
- Der Befehl `cargo run` fasst das builden sowie executen der Binary in einem Befehl zusammen.
- `cargo check` überprüft schnell deinen Code, um sicherzustellen, dass er kompiliert, erzeugt aber keine ausführbare Datei.




## Crates, Bibliotheken, Module, Funktionen & Makros

### Crates
- [Cargo](https://doc.rust-lang.org/cargo/) ist das Bau-System (build system) und der Paketmanager von Rust. Die meisten Rust-Entwickler verwenden dieses Werkzeug, um ihre Rust-Projekte zu verwalten, weil Cargo viele Aufgaben für dich erledigt, z.B. Bauen deines Codes, Herunterladen der Bibliotheken, von denen dein Code abhängt, und das Bauen dieser Bibliotheken. (Wir nennen Bibliotheken, die dein Code benötigt, Abhängigkeiten (dependencies).)
- Ein Crate (dt.: Kiste) ist eine Sammlung von Rust-Quellcode-Dateien und werden von Rust-Developer typischerweise mit Cargo auf [crates.io](crates.io) hochgeladen.
- Ein Projekt kann entweder als "binary crate" oder ["library crate"](https://doc.rust-lang.org/rust-by-example/crates/lib.html) angelegt werden. Ersteres können ausgeführt werden, zweiteres können ausschließlich in anderen Projekten eingebunden, aber eben nicht selbstständig ausgeführt werden.
- Möchte man eine "library crate" einbinden muss man dies in der `Cargo.toml` unter `[dependencies]` deklarien, zb.: `rand = "0.8.3"`
- Mit `cargo update` überschreibt Cargo die Versionsnummer ind `Cargo.toml` & `Cargo.lock` mit den aktuellsten Versionen der Abhängigkeiten.
- In der Datei Cargo.toml ist alles, was nach einer Überschrift folgt, Teil dieses Abschnitts, der so lange andauert, bis ein anderer Abschnitt beginnt. Im Abschnitt `[dependencies]` teilst du Cargo mit, von welchen externen Kisten dein Projekt abhängt und welche Versionen dieser Kisten du benötigst.
- Wenn wir eine externe Abhängigkeit einfügen, holt Cargo die neuesten Versionen von allem was die Abhängigkeit benötigt. Möglicherweiße lädt Cargo daher auch andere Pakete/Bibliotheken, von dem die hinzugefügte Abhängigkeit selbst abhängt.
- Eine weitere nette Funktionalität von Cargo ist, dass das Ausführen des Kommandos `cargo doc --open` die von all deinen Abhängigkeiten bereitgestellte Dokumentation lokal zusammenstellt und in deinem Browser öffnet.


### Bibliotheken
- Standardmäßig hat Rust einige Elemente in der Standardbibliothek definiert, die es in den Gültigkeitsbereich jedes Programms bringt. 
Diese Menge wird Präludium genannt, und du kannst deren Inhalt in der [Dokumentation der Standardbibliothek](https://doc.rust-lang.org/std/prelude/index.html) sehen.
- Wenn ein Typ, den du verwenden willst, nicht im Präludium enthalten ist, musst du diesen Typ explizit mit einer use-Anweisung in den Gültigkeitsbereich bringen. Das Verwenden der Bibliothek std::io bietet dir eine Reihe von nützlichen Funktionalitäten, einschließlich der Möglichkeit, Benutzereingaben entgegenzunehmen.
- Biblitotheken und Module werden mit `use ...` eingebunden
- `io::stdin()` ruft die Funktion `stdin` aus dem Modul `io` auf 
- Bibliotheken wie zb.: `io` müssen nicht am Anfang des Programms importiert werden, sondern man könnte die Funktion trotzdem verwenden, indem man den Funktionsaufruf als [`std::io::stdin`](https://doc.rust-lang.org/std/io/struct.Stdin.html) schreibt. Die Funktion `stdin` gibt eine Instanz von `std::io::Stdin` zurück, was ein Typ ist, der eine Standardeingaberessource (handle to the standard input) für dein Terminal darstellt.


### Wichtige Crates

- [rand](https://crates.io/crates/rand) um zufällige Zahlen zu generieren


### Wichtige Module

- `std:io` => Ein-/Ausgabefunktionalität 
- `std::cmp::Ordering` => Vergleichen und Ordnen von Werten


### Wichtige Funktionen, Methoden & Makros 

- [`println!`](https://doc.rust-lang.org/std/macro.println.html) gibt eine Zeichenkette auf dem Bildschirm aus, zb.: `println!("Rate die Zahl!");`
- Mehrere Werte in `println` ausgeben: `println!("x = {} und y = {}", x, y);`
  
- [`read_line`](https://doc.rust-lang.org/std/io/struct.Stdin.html#method.read_line) ermöglicht es eine Benutzereingabe zu verarbeiten, zb.: `io::stdin().read_line(&mut guess)`. Das Zeichenketten-Argument muss veränderlich (`mut` bzw. `&mut`, um die Referenz `&` veränderlich zu machen) sein, damit die Methode den Inhalt der Zeichenkette ändern kann.

- [`parse()`](https://doc.rust-lang.org/std/primitive.str.html#method.parse)-Methode für Strings  konvertiert eine Zeichenkette in einen anderen Typ. Die Methode parse funktioniert nur bei Zeichen, die logisch in Zahlen umgewandelt werden können. Wenn die Zeichenkette zum Beispiel A👍% enthielte, gäbe es keine Möglichkeit, dies in eine Zahl umzuwandeln. Da dies fehlschlagen könnte, gibt die parse-Methode einen Result-Typ zurück.

### Wichtige Traits (Merkmale)

**Beispiel:** In Crate `rand`, eingebunden mit `rand::thread_rng().gen_range(1..=100);`, bedeutet...
- `use rand::Rng;` Das Merkmal (trait) Rng definiert Methoden, die Zufallszahlengeneratoren implementieren, und dieses Merkmal muss im Gültigkeitsbereich sein, damit wir diese Methoden verwenden können.
- `rand::thread_rng` gibt einen speziellen Zufallszahlengenerator zurück: lokal zum aktuellen Ausführungsstrang (thread) und vom Betriebssystem initialisiert (seeded)
- Die Methode `gen_range` nimmt einen Bereichsausdruck als Argument und generiert eine Zufallszahl in diesem Bereich. Ein Bereichsausdruck hat die Form `start..=end`, beinhaltet also die Untergrenze und die Obergrenze, sodass wir `1..=100` angeben müssen, um eine Zahl zwischen 1 und 100 zu erhalten.




## Variablen

- Wir verwenden eine let-Anweisung, um eine Variable zu erzeugen: `let apples = 5;`
- Das Gleichheitszeichen (=) sagt Rust, dass wir etwas an die Variable binden wollen.
- In Rust sind Variablen standardmäßig unveränderlich (immutable), das heißt, sobald wir der Variablen einen Wert gegeben haben, wird sich der Wert nicht mehr ändern.
- `&` zeigt an, dass es sich bei diesem Argument um eine Referenz handelt, welche die Möglichkeit bietet, mehrere Teile des Codes auf einen Datenteil zuzugreifen, ohne das diese Daten mehrfach in den Speicher kopiert werden müssen. **Referenzen sind ebenfalls unveränderlich!**
- Mit **"Shadowing"** wird ein Wert von einem Typ in einen anderen Typ konvertieren. Durch das "Beschatten" kann man einen Variablennamen wiederverwenden, anstatt zwei eindeutige Variablen zu erstellen.

### mutability (Veränderlichkeit)

- In Rust sind Variablen standarmäßig immutable (Unveränderlich).
- Um eine Variable veränderlich zu machen, ergänzen wir mut vor dem Variablennamen: `let mut bananas = 5;`



### Strings

- `String::new()` ist eine Funktion, die eine neue Instanz eines [String](https://doc.rust-lang.org/std/string/struct.String.html) zurückgibt.
- String ist ein von der Standardbibliothek bereitgestellter Zeichenketten-Typ, der ein wachstumsfähiges, UTF-8-kodiertes Stück Text darstellt.




## Werte

### Result
- `read_line` als Beispiel schreibt die Benutzereingabe in die übergebene String-Variable, gibt aber darüber hinaus auch einen Result-Wert zurück. 
- [Result](https://doc.rust-lang.org/std/result/enum.Result.html) ist eine [Aufzählung](https://rust-lang-de.github.io/rustbook-de/ch06-00-enums.html) (enumeration, oder kurz enum), die einen Datentyp darstellt, der einem von mehreren möglichen Zuständen annehmen kann. Wir nennen jeden möglichen Zustand eine Variante. **Der Zweck dieser Result-Typen ist es, Informationen zur Fehlerbehandlung zu kodieren.**. Result gibt entweder den "Ok" oder "Err" Wert zurück. 
- Diese Werte werden Varianten genannt. Die Variante Ok gibt an, dass die Operation erfolgreich war, und der erfolgreich generierte Wert innerhalb von Ok steht. Die Variante Err bedeutet, dass die Operation fehlgeschlagen ist, und Err enthält Informationen darüber, wie oder warum die Operation fehlgeschlagen ist.
- Für Werte vom Typ Result sind, wie für Werte jedes Typs, Methoden definiert. Eine Instanz von Result hat eine [`Methode expect`](https://doc.rust-lang.org/std/result/enum.Result.html#method.expect), die man aufrufen kann. 
- Wenn diese io::Result-Instanz ein Err-Wert ist, wird expect das Programm zum Absturz bringen und die Meldung anzeigen, die als Argument an expect übergeben worden ist. 
- Wenn die Methode read_line ein Err zurückgibt, ist dies wahrscheinlich das Ergebnis eines Fehlers, der vom zugrundeliegenden Betriebssystem herrührt. 
- Wenn diese io::Result-Instanz ein Ok-Wert ist, wird expect den Wert, den Ok hält, als Rückgabewert verwenden. In diesem Fall ist dieser Wert die Anzahl der Bytes, die der Benutzer in die Standardeingabe eingegeben hat.
- Wird expect nicht aufgerufen, wird das Programm kompiliert, aber eine Warnung wird ausgegeben.
- Rust warnt, dass du den von read_line zurückgegebenen Result-Wert nicht verwendet hast, was darauf hinweist, dass das Programm einen möglichen Fehler nicht behandelt hat. Der richtige Weg, die Warnung zu unterdrücken, ist eine Fehlerbehandlung zu schreiben, aber man kann das Programm auch nur abstürzen lassen, indem man, wenn ein Problem auftritt, nur `expect`verwendet.




## Funktionen
- Eine assoziierte Funktion ist eine Funktion, die auf einem Typ implementiert ist, zb.: `::new` bei `String::new()` (In etwa wie eine Methode eines Javascript-Objektes)




## Control flow (Kontrollfluss-Mechanismen)

- [match](https://rust-lang-de.github.io/rustbook-de/ch06-02-match.html): Gleicht einen Wert mit einer Reihe von Mustern ab und führt dann Code zum jeweils passenden Muster aus. Stelle dir einen match-Ausdruck wie eine Münzsortiermaschine vor: Die Münzen rutschen eine Bahn mit unterschiedlich großen Löchern entlang, und jede Münze fällt durch das erste Loch, in das sie hineinpasst. Auf die gleiche Weise durchlaufen die Werte die Muster in einem match-Ausdruck und beim ersten „passenden“ Muster fällt der Wert in den zugehörigen Codeblock, der ausgeführt werden soll.
- Das Keyword [`loop{}`](https://doc.rust-lang.org/std/keyword.loop.html) erzeugt eine Endlosschleife, Benutzer-Abbruch mit STRG+C.




## Quellen
[rustbook-Deutsch](https://rust-lang-de.github.io/rustbook-de/)