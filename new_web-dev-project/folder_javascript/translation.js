/* =============================
?   === navbar language toggle button ===
    ============================= */
document.querySelector(".navlist-language").addEventListener("click", () => {
// if  'deutsch' or 'english' in the navbar is clicked, set localstorage either to "de" or to "en"
document.querySelector(".navlist-language").innerText === "english"
    ? (localStorage.language = "en")
    : (localStorage.language = "de");
// than invoke translation of page
general_translation(localStorage.language);
home_translation(localStorage.language);
about_translation(localStorage.language);
//console.log(`Language setted to ${localStorage.language}.`);
});

/* =========================== 
?   === general components library ===
    =========================== */
function general_translation(language) {
  //? navbar
  if(document.querySelector(".navlist")){
        //?  navbar deutsch
        if (language === "de") {
          navlist_start.innerText = "start";
          navlist_start.title = "Zurück zum Start!";
          navlist_start.alt = "Zurück zum Start.";
          navlist_projects.innerText = "projekte";
          navlist_projects.title = "Zu den Projekten!";
          navlist_projects.alt = "Zu den Projekten.";
          navlist_contact.innerText = "kontakt";
          navlist_contact.title = "Zu den Kontaktöglichkeiten!";
          navlist_contact.alt = "Zu den Kontaktöglichkeiten.";
          navlist_about.innerText = "über";
          navlist_about.title = "Über diese Seite und meine Person!";
          navlist_about.alt = "Über diese Seite und meine Person.";
          navlist_language.innerText = "english";
          navlist_language.title = "Switch to English!";
          navlist_language.alt = "Switch to English.";
          musicnote.title = "Schalte die Musik auf/ab!";
          musicnote.alt="Stilisierte Musiknote tanzt mit Sternen. Orange Farbe wenn die Musik an ist, Grau wenn abgeschaltet.";
          //console.log(`Navbar translated to Deutsch`);
        };
        //? navbar english
        if (language !== "de") {
          navlist_start.innerText = "home";
          navlist_start.title = "Back to home!";
          navlist_start.alt = "Back to home.";
          navlist_projects.innerText = "projects";
          navlist_projects.title = "Go to projects!";
          navlist_projects.alt = "Go to projects.";
          navlist_contact.innerText = "contact";
          navlist_contact.title = "Go to contact!";
          navlist_contact.alt = "To contact.";
          navlist_about.innerText = "about";
          navlist_about.title = "About this site ans me as person!";
          navlist_about.alt = "About this site and me as person.";
          navlist_language.innerText = "deutsch";
          navlist_language.title = "Zu Deutsch wechseln!";
          navlist_language.alt = "Zu Deutsch wechseln.";
          musicnote.title = "Switch Sound on/off!";
          musicnote.alt="Styled music note dancing with stars. Is orange coloured if music is on, grey if off.";
          //console.log(`Navbar translated to English`);
        };
  };
};
      
/* ================= 
?   === home library ===
    ================= */
function home_translation(language) {
  if(document.querySelector(".section-introduction")){
      if (language === "de") {
        //? section introduction deutsch
        introduction_pageHeadline.innerText = "front-end. web-development";
        introduction_mylogo.title = "Mein Motto: Liebe die Wissenschaft, Technik & den Frieden! Hier gehts zu meinem Github-Repository.";
        introduction_mylogo.alt = "Logo mit meinen Motto: Liebe die Wissenschaft, Technik & den Frieden! ";
        introduction_image.title = "Energie tanken und Ideen nachgehen - in der Ruhe liegt die Kraft."
        introduction_image.alt = "Schwarz-Weißes Bild von mir sitzend auf einer Bank im Wald. Energie tanken für neue Projekte.";
        introduction_headlineOne.innerText = "Willkommen. Mein Name ist Stefan.\nIch erstelle Webanwendungen.";
        introduction_headlineTwo.innerText = "Enthusiasmus pur";
        introduction_headlineThree.innerText = "HTML, CSS & Javascript";
        introduction_headlineOutro.innerText = "Mit Liebe zur Wissenschaft, der Technik und dem Frieden !";
        introduction_paragraphOne.innerText = "Auf dieser Portfolio-Webppage gebe ich einen Einblick auf abgeschlossene & solide Webentwicklungs-Projekte. Als ich 2020 mit dem programmieren begann konnte ich noch nicht ahnen wie viel Spaß und Leidenschaft dieses breite Feld in mir entfesseln würde. Stets auf der Suche nach neuen Herausforderungen und deren Lösung ist Web-Development für mich durch Ehrgeiz & Leidenschaft ausgedrückte Technikbegeisterung.";
        introduction_paragraphTwo.innerText = "Derzeit beschäftige ich mich stark konzentriert auf die 3 Bereiche HTM, CSS und Javascript, spezialisiert auf Front-End Web-Development. Daher findest du hier auch ausschließlich Projekte die sich mit diesen drei 'Tools' beschäftigen - teils spielerisch, teils mit praktischen Nutzen.";
        //? section projects deutsch
        projects_section_headline.innerText = "projekte.";
        project_one_image.title = "Weckt es Erinnerungen an dein Kinderzimmer?";
        project_one_image.alt = "Ein Etch-a-Sketch Spielapparat in rot mit weißen Knöpfen.";
        project_two_image.title = "4-Gewinnt: Die erweiterte Version des 'Doddel-Schach' !";
        project_two_image.alt = "Eine blaue 4-Gewinnt Spielkonsole mit gelben und roten Spielsteinen darin. Gelb hat gewonnen.";
        project_three_image.title = "Tic-Tac-Toe, 3-Gewinnt, Doddelschach. Dieses Spiel hat viele Namen!";
        project_three_image.alt = "Ein rotes 3-Gewinnt Spielfeld. Der Spieler/Die Spielerin mit 'O' hat diagonal gewonnen.";
        project_four_image.title = "Das allseits beliebte und bekannte Stein-Schere-Papier!";
        project_four_image.alt = "Drei weiße Hände im Comic-Stil die Stein-Schere-Papier spielen.";
        project_one_headline.innerText = "Etch-a-Sketch"; 
        project_two_headline.innerText = "4-Gewinnt";
        project_three_headline.innerText = "Tic-Tac-Toe";
        project_four_headline.innerText = "Stein-Schere-Papier";
        project_one_description.innerText = "Etch A Sketch™ ist eine Variante der Zaubertafel und war als Spielzeug besonders in den 1970er Jahren populär. Das Projekt versucht das Original so zu imitieren, dass es möglichst viel Freude bereitet und dabei einige nützliche Features wie eine freie Farbwahl oder einstellbare Auflösung integriert. Das Projekt hat in der Entwicklung großen Spaß bereitet: Vor allem die Auseinandersetzung mit CSS-Grid sowie die Ereignissteuerung mit Javascript waren besonders lehrreich!";
        project_two_description.innerText = "Dies war mein erste Projekt für das ich mir die Zeit genommen habe es umfassend nach meinen Vorstellungen auszubauen: Als User kann man die Spielfeldgröße frei wählen, Spielsteinfarben tauschen, Statistiken sowie Einstellungen wie Name oder Sprache werden gespeichert, Serienspiele sind möglich, eine Gewinnanimation ist integriert und und und... Außerdem ist es responsiv und man kann es auch auf mobilen Endgeräten spielen! Das alles erforderte eine sehr weitreichende Auseinandersetzung mit zahlreichen Front-End-Development Themen.  Es würde mich sehr freuen wenn du es ausprobierst - viel Spaß !" ;
        project_three_description.innerText = "Das weltweit bekannte 'Tic-Tac-Toe' macht fast in jeder Situation Spaß zu spielen und ist auch ein guter Langeweile-Brecher. Die Umsetzung einer Online-Version erforderte eine erste Auseinandersetzung meinerseits mit der Programmierung einer Gaming-KI, die - sobald sie fertig war - nicht wie ein lahmer Betrunkener um 3 Uhr nachts wirkte. Durch die deutlich geringere Anzahl an Spielmöglichkeiten war es eine sehr gute Vorbereitung für das '4-Gewinnt' Projekt, dessen kleine Schwester es ist. Gerade die weniger hohe Komplexität und das dadurch schnellere Spiel kann oft attraktiv und genau das richtige sein! Wirst du den Computer schlagen können ?";
        project_four_description.innerText = "Wer kennt es nicht ? Beliebt bei Groß und Klein - manchmal zum Spaß gespielt, manchmal aber auch zum Ausspielen von Bedeutendem! Die Programmierung selbst war total lustig und spannend, ein guter Zufallsalgorhymtus war das Ziel und wurde gefunden. Möchtest du wissen ob du mehr Glück hast als die Maschine vor dir?";
        project_one_link.innerText = "Probier die Zaubertafel aus !";
        project_two_link.innerText = "Eine Runde 4 - Gewinnt ?";
        project_three_link.innerText = "Drei gewinnt geht immer !";
        project_four_link.innerText = "Schnick, Schnack, Schnuck !";
        project_one_link.title = "Klicke um zu malen !";
        project_two_link.title = "Klicke um zu spielen !";
        project_three_link.title = "Klicke um zu spielen !";
        project_four_link.title = "Klicke um zu spielen !";
        //console.log(`Home translated to Deutsch`);
      };
      if (language !== "de") {
        //? section introduction english
        introduction_pageHeadline.innerText = "front-end. web-development";
        introduction_mylogo.title = "My motto: love science, technology & peace!";
        introduction_mylogo.alt ="Logo with my motto: love science, technology & peace! Click to go to my Github-Repository.";
        introduction_image.title = "Recharge your batteries and pursue ideas - strength lies in stillness."
        introduction_image.alt = "Black and white picture of me sitting on a bench in the forest. Recharge your batteries for new projects.";
        introduction_headlineOne.innerText = "Welcome. My name is Stefan.\nI craft web applications.";
        introduction_headlineTwo.innerText = "Pure enthusiasm";
        introduction_headlineThree.innerText = "HTML, CSS & Javascript";
        introduction_headlineOutro.innerText = "With love for science, technology and peace!";
        introduction_paragraphOne.innerText = "On this portfolio webpage I give an insight into completed & solid web development projects. When I started programming in 2020, I could not have imagined how much fun and passion this broad field would unleash in me. Always looking for new challenges and their solution, web development for me is enthusiasm for technology supported of ambition and passion.";
        introduction_paragraphTwo.innerText = "Currently i have a strong focus on the 3 areas HTML, CSS & Javascript, specializing in front-end web-development. Therefore you will only find projects that deal with these three 'tools' - partly playful, partly with practical use.";
        //? section projects english
        projects_section_headline.innerText = "projects.";
        project_one_image.title = "Does it bring back memories of your childhood room?";
        project_one_image.alt = "An Etch-a-Sketch game machine in red with white buttons.";
        project_two_image.title = "4-in-a-row: The extended version of 'Noob Chess'!";
        project_two_image.alt = "A blue match 4 game console with yellow and red tiles inside. Yellow won.";
        project_three_image.title = "Tic-Tac-Toe, Match 3, Noob Chess. This game has many names!";
        project_three_image.alt = "A red match-3 board. The player with 'O' won diagonally.";
        project_four_image.title = "The well-loved and well-known rock-paper-scissors!";
        project_four_image.alt = "Comic style three white hands playing rock-paper-scissors.";
        project_one_headline.innerText = "Etch-a-Sketch"; 
        project_two_headline.innerText = "4-in-a-row";
        project_three_headline.innerText = "Tic-Tac-Toe";
        project_four_headline.innerText = "Rock-Paper-Scissors";
        project_one_description.innerText = "Etch A Sketch™ is a variant of the magic board and was particularly popular as a toy in the 1970s. The project tries to imitate the original in such a way that it is cool to play and integrates some useful features such as a free choice of color or adjustable resolution. The project was a lot of fun in the development: Above all, dealing with CSS grid and event control with Javascript were particularly instructive !";
        project_two_description.innerText = "This was my first project for which I took the time to expand it comprehensively according to my ideas: As a user you can freely choose the size of the playing field, swap stone colors, statistics and settings such as name or language are saved, series games are possible, a winning animation is integrated and and and... In addition, it is responsive and you can also play it on mobile devices! All this required a very extensive examination of numerous front-end development topics. I would be very happy if you try it out - have fun ! ";
        project_three_description.innerText = "The world-famous 'Tic-Tac-Toe' is fun to play in almost every situation and is also a good boredom breaker. Making an online version required my first exposure to programming a gaming AI that - once done - didn't seem like a lame drunk at 3am. Due to the significantly smaller number of game options, it was a very good preparation for the '4-in-a-row' project, of which it is the little sister. Especially the less high complexity and the resulting faster game can often be attractive and just the right thing! Will you be able to beat the computer ?";
        project_four_description.innerText = "Who doesn't know it? Popular with young and old - sometimes played for fun, but sometimes also to play something important! The programming itself was totally fun and exciting, a good random algorithm was the goal and was found. Do you want to know if you know more lucky than the machine in front of you ?";
        project_one_link.innerText = "Try the magic board !";
        project_two_link.innerText = "Wanna play a round 4-in-a-row ?";
        project_three_link.innerText = "3-in-a-row is always possible!";
        project_four_link.innerText = "Rock Paper Scissors !";
        project_one_link.title = "Click to draw !";
        project_two_link.title = "Click to play !";
        project_three_link.title = "Click to play !";
        project_four_link.title = "Click to play !";
        //console.log(`Home translated to english`);
      };
  };
};
  
/* ================= 
?   === about library ===
     ================= */
function about_translation(language) {
  if(document.querySelector(".section-about")){
    if (language === "de") {
      //? section about deutsch
      about_mylogo.title ="Mein Motto: Liebe die Wissenschaft, Technik & den Frieden! Hier gehts zu meinem Github-Repository.";
      about_mylogo.alt ="Logo mit meinen Motto: Liebe die Wissenschaft, Technik & den Frieden! ";
      about_headline.innerText = "über mich. und diese Seite";
      about_headline_one.innerText = "Portfolio";
      about_headline_two.innerText = "Danke";
      about_headline_three.innerText = "Zu meiner Person";
      about_paragraph_one.innerText = "Diese Webpage ist als Portfolio für meine Web-Development Projekte konzipiert. Es soll einen Überblick über meine Fähigkeiten in den Bereichen HTML, CSS, Javascript & Design ermöglichen und für mich selbst auch als Lernkurven-Archiv dienen. Bitte beachte, dass ich deswegen ältere Projekte nicht mit neu erlernten Fähigkeiten erweitere, sondern - wenn sinnvoll - ein neues Projekt daraus mache. Ich hoffe du hast Spaß mit meiner Artbeit !";
      about_paragraph_two.innerText = "Auf meinem Github-Repository findet man eine Readme-Datei mit allen Kollektiven, Künstlern, Developern, Unternehmen usw... ohne dennen ich kein Webentwickler geworden wäre. Stellvertretend für alle möchte ich hier auf das 'Odin-Projekt' (https://www.theodinproject.com/) verweisen, welches ich für alle Anfänger, aber auch für bereits erfahrenere Webentwickler sehr empfehlen kann. Im Bereich CSS möchte ich sämtlichen Web-Content von Kevin Powell (https://www.youtube.com/kepowob) empfehlen, dessen Videos und Kurse mir sehr weitergeholfen haben. Abschließend möchte ich ein großes und herzliches Danke an meine Freunde und meine Familie richten, die mich stets bei meinen Interessen sehr unterstützen und aufs neue motivieren.\n\nIch danke euch allen von Herzen !";
      about_paragraph_three.innerText = "Stefan Bartl, geboren 1990 in St.Pölten, lebt in Wien, Österreich. Stets technisch interessiert verschlug es mich beruflich zuerst in das Baugewerbe. Ich absolvierte eine Lehre zum Maurer/Schalungsbauer und schloß diese mit Auszeichnung ab. Nach 6 Jahren wechselte ich in den Österreichischen Gewerkschaftsbund um meine gesellschaftspolitischen Interessen zu verwirklichen und dabei für diejenigen Menschen etwas gutes zu tun, die es sich oft nicht selbst richten können und politisch unterrepräsentiert sind. Als Gewerkschafter konnte ich bis heute mehrjährige Management-Erfahrung, zahlreiche Ausbildungen, Skills & Fertigkeiten u.a. in den Bereichen Rhetorik, Gruppendynamik, Personalführung, Veranstaltungsmanagement, Budgetpolitik, Betriebs-und Volkswirtschaft, politische Ökonomie usw. ansammeln.  Seit 2021 fülle ich meine gesamte Freizeit mit Kursen und eigener Weiterbildung im Bereich der Webentwicklung. Seither hat mich das 'Programmierer'-Fieber gepackt und gehe total in dieser herausfordernden, kreativen und wunderschönen Tätigkeit auf.";
      about_paragraph_four.innerText = "Kurzum, mit folgenden drei-einhalb Worten beschreibt man mich: Science, Tech, Frieden(-spolitik) !";
      about_image_map.title = "Mein zuhause - im Herzen Europas. Besuche mich und ich zeige dir die blühende Stadt Wien! (Karte von Google Maps bearbeitet mit Gimp)";
      about_image_map.alt = "Eine Google-Maps Karte von Europa mit einer Markierung in Wien.";
      about_image_donaumarina.title = "In der Stadt an der Donau zu leben ist auf viele Arten wunderbar. Die gute Infrastruktur erlaubt mir mich global zu vernetzen und zu arbeiten.";
      about_image_donaumarina.alt = "Ein Foto das Stefan an einer kultigen Location an der Donau zeigt.";
      //? section-contacts deutsch
      contact_headline.innerText = "kontaktiere mich hier.";
      contact_socialmedia_headline.innerText = "Über die sozialen Medien..."; 
      contact_myblog_headline.innerText = "...schau auf meinen Blog vorbei...";
      contact_myblog_image.title = "Hier gehts zu meinen deutschsprachigen Blog über die Gesellschaft, Politik und Wissenschaft!";
      contact_myblog_image.alt = "Eine rote Faust in einem grünen Kreis und zwei Sterne mit der Aufschrift: protestblog.eu - Be Heard!";
      contact_myemail.innerText = "...oder via E-Mail";
      contact_myemail.title = "Klicken um mir eine E-Mail zu senden!";       
      contact_credits.title = "Annerkennung ist wichtig. Hier bedanke ich mich bei Personen und Organisationen ohne die diese Seite nicht möglich wäre. Schaue nach um wen es geht!";

      //console.log(`About translated to Deutsch`);
    };
    if (language !== "de") {
      //? section about english
      about_mylogo.title = "My motto: love science, technology & peace!";
      about_mylogo.alt ="Logo with my motto: love science, technology & peace! Click to go to my Github-Repository.";
      about_headline.innerText = "about me. and this site";
      about_headline_one.innerText = "Portfolio";
      about_headline_two.innerText = "Thanks";
      about_headline_three.innerText = "To my person";
      about_paragraph_one.innerText = "This webpage is designed as a portfolio for my web development projects. It should provide an overview of my skills in the areas of HTML, CSS, Javascript & Design and also serve as a learning curve archive for myself. Please note that I do not expand older projects with newly learned skills, but - if useful - make a new project out of it. I hope you enjoy my work !";
      about_paragraph_two.innerText = "On my Github repository you can find a readme file with all the collectives, artists, developers, companies, etc... without it I wouldn't have become a web developer. On behalf of everyone, I would like to refer to the 'Odin project' (https://www.theodinproject.com/), which I can highly recommend for all beginners, but also for more experienced web developers. In the area of ​​CSS, I would like to recommend all web content by Kevin Powell (https://www.youtube.com/kepowob), whose videos and courses have helped me a lot. Finally, I would like to say a big and heartfelt thank you to my friends and family, who always support me in my interests and motivate me new.\n\nThank you all from the bottom of my heart !";
      about_paragraph_three.innerText = "Stefan Bartl, born in St.Pölten in 1990, lives in Vienna, Austria. Always interested in technology, my first job ended up in the construction industry. I completed an apprenticeship as a bricklayer/formwork builder and completed it with distinction. After 6 years I switched to the Austrian Trade Union Confederation to realize my socio-political interests and to do something good for those people who often cannot do it themselves and are politically underrepresented. As a trade unionist, I have been able to accumulate several years of management experience, numerous training courses, skills and abilities in the areas of rhetoric, group dynamics, personnel management, event management, budget policy, business and economics, political economy, etc. Since 2021 I have been filling all my free time with courses and my own further education in the field of web development. Since then I've been gripped by the 'programmer' fever and I'm totally absorbed in this challenging, creative and beautiful job.";
      about_paragraph_four.innerText = "In short, the following three and a half words describe me: science, tech, peace(-politics) !";
      about_image_map.title = "My home - in the heart of Europe. Visit me and I'll show you the thriving city of Vienna! (Card from Google Maps edited with Gimp)";
      about_image_map.alt = "A Google Maps map of Europe with a marker in Vienna.";
      about_image_donaumarina.title = "Living in the city on the Danube is wonderful in many ways. The good infrastructure allows me to network and work globally.";
      about_image_donaumarina.alt = "A photo that shows Stefan at a cult location on the Danube.";
      //? section-contacts english
      contact_headline.innerText = "contact me here.";
      contact_socialmedia_headline.innerText = "via social media..."; 
      contact_myblog_headline.innerText = "...check out my (german) blog...";
      contact_myblog_image.title = "Click here for my german speaking blog about society, politics and science!";
      contact_myblog_image.alt = "Red fist with green circle, two stars and the text 'protestblog.eu - be heard!' around it.";
      contact_myemail.innerText = "...or via e-mail"; 
      contact_myemail.title = "Click to send me a E-Mail!";      
      contact_credits.title = "Recognition is important. I would like to thank the people and organizations without whom this page would not be possible. Check out who it is!"; 
      //console.log(`About translated to english`);
    };
};
};