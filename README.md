# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Peter van de Geer

  #### Je startniveau:
  rood en zwart

  #### Je focus:
  Mijn focus gaat zijn op het responsive maken van de site, maar ik wil ook kijken naar de surface plane.
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  lego homepagina en kerstcadeau's 2025 pagina
  (https://www.lego.com/nl-nl) (https://www.lego.com/nl-nl/holiday-gifts)

  #### Screenshot(s) van de eerste pagina (small screen): 
  lego homepagina (pc)
  <img src="readme-images/legohomepagina.png" width="375px" alt="landingpage van lego.com">

  lego homepagina (iphone 14 pro)
  <img src="readme-images/iphonelegohomepagina.JPG" width="375px" alt="landingpage van lego.com">

  #### Screenshot(s) van de tweede pagina (small screen):
  starwars kerstcadeau's 2025 pagina (pc)
  <img src="readme-images/legoadultswelcome.png" width="375px" alt="pagina voor AFOL's (Adult Fan Of Lego)">

  starwars kerstcadeau's 2025 pagina (iphone 14 pro)
  <img src="readme-images/iphonelegoadultswelcome.JPG" width="375px" alt="pagina voor AFOL's (Adult Fan Of Lego)">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:
  Wat mij is opgevallen na het gebruiken van de screenreader van microsoft, is  dat Lego.com een hele goede toegankelijkheid heeft voor gebruikers met een e-reader. Dit omdat er heel erg uitgebreidde alt tags en aria labels zijn gebruikt. Hierdoor kunnen mensen die slechterziend zijn, makkelijker navigeren door de website. 

  Uit de WCAG komen de volgende punten naar boven:
  Goed:
  Tekst en achtergrond gebruiken voldoende kleurcontrast, dat maakt tekst leesbaar voor mensen met slechte ogen of kleurenblindheid.
  Tekst is schaalbaar / vergrootbaar zonder verlies van functionaliteit of inhoud.
  Alle interactieve elementen (knoppen, links, formulieren, menu’s) zijn correct gemarkeerd en bedienbaar, bijvoorbeeld echte <button> of <a> elementen gebruiken.
  Media speelt niet automatisch af zonder controle, de gebruiker kan zelf kiezen of een video start.
  Ondertiteling bij video’s, wanneer visuele info belangrijk is, zodat slechthorenden of blinden de inhoud kunnen meekrijgen.
  Decoratieve afbeeldingen worden correct gemarkeerd als decoratief, zodat alleen relevante info voorgelezen wordt voor mensen met een e-reader.
  Teksten eenvoudig en duidelijk geschreven: korte zinnen, duidelijke taal, eenvoudig woordgebruik.

  Minder goed:
  Er zijn zo ver ik zie geen media queries gebruikt. Hierdoor zijn er ook geen animaties, 
  die de prefers-reduced-motion media query naleven.
  Sommige tekst is zwart op een donker teal kleurige oppervlak in plaats van een witte tekst.

  Slecht:
  De html code bevat meer dan 1001 errors. 

  </details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  Mijn homepagina blijft alle onderdelen behouden,want content verschilt genoeg van elkaar.

  Adultswelcomescherm breakdown mobiele versie, hier ga ik een aantal onderdelen verwijderen: 
  <img src="readme-images/onderdelenweghalenadultswelcomescherm.jpg" width="375px" alt="weggestreepte onderdelen van het adultswelcome scherm in het rood, de rest wordt behouden">

  Adultswelcome pagina breakdownschets mobiele versie:
  <img src="readme-images/breakdownschetslegoadultswelcomepagina.jpg" width="375px" alt="breakdown van de hele adults welcome pagina">

  homepagina breakdownschets mobiele versie:
  <img src="readme-images/breakdownschetslegohomepagina.jpg" width="375px" alt="breakdown van de hele homepagina">

  <!--### dynamisch deel (article): 
  <img src="images/iphonebreakdownarticle.png" width="375px" alt="breakdown van eerste gedeelte van kerstcadeau's pagina"> -->

  <!-- ### wellicht nog een dynamisch deel (bijv filter):  -->
  <!-- <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van nog een dynamisch deel"> -->
</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Het was lastig om te bedenken hoe ik een uitklapbaar menu kon coderen met buttons voor de footer.
  Het was lastig om te bepalen of een stuk tekst in de footer een h2 of h3 is.
  Het maken van de breakdown schets ging goed.


  ### Agenda voor meeting
  Ik wil graag feedback krijgen op mijn breakdownschetsen.
  Verder wil ik graag weten hoe ik mijn footer goed kan uitwerken. Uitklap menu door een button.
  Ik wil graag weten hoe ik ervoor kan zorgen dat als ik op een button klik dat er dan een ul aangezet wordt en een andere ul uitgezet wordt.


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - WCAG bevindingen specifieker maken
  - In de technieken in gaan voor de toegankelijkheid die LEGO gebruikt. Hoe is het gemaakt? Hoe kan ik dit namaken?
  - h1 visually hidden maken
  - Hamburger menu uit de nav halen
  - Summary details gebruiken voor de buttons van de footer
  - uitklap menus uitwerken van het hamburgermenu
  - Skiplink maken voor mensen met e-readers

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Het lukt mij niet om voor de modal een blur toe te voegen, waardoor ik de rest van de pagina kan zien.
  Het lukt mij niet om zowel de informatietab en de nav bovenaan de pagina te houden. 
  Ik wil alles responsive maken.

  ### Agenda voor meeting
  Hoe kan ik mijn hamburger menu uitwerken?
  Hoe kan ik ervoor zorgen dat mijn modal een blur krijgt?
  Hoe kan ik het beste alle veranderende afbeeldingen in mijn HTML zetten?


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Probeer alles stap voor stap te doen
  - Probeer meerdere menu's te maken
  - Beginnen aan CSS

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Tijdens het maken heb ik bewust rekening gehouden met semantische HTML, toetsenbordbediening en ARIA tags. 
  Hierdoor is de structuur van mijn website overzichtelijk en goed te lezen voor screenreaders.
  Ik heb gebruik gemaakt van de tag aria-label, om een element een titel te geven als het bijvoorbeeld alleen een icoon is, zodat iemand met een screenreader snapt wat er gebeurt als je bijvoorbeeld op een knop drukt, die geen titel heeft van zichzelf.
  Ook heb ik gebruik gemaakt van aria-live="polite", wat er voor zorgt dat in de informatietab als JavaScript de tekst verandert, dat de screenreader eerst de hele tekst op leest, voordat het ergens anders heen springt.
  Ook heb ik bij de modal gebruik gemaakt van aria-labelledby, wat de modal de naam geeft van de bestaande h2 in de modal, zodat iemand met een screenreader direct weet waar de modal over gaat.

  Ik maak gebruik van duidelijke semantische elementen zoals header, nav, main en footer, in combinatie met een skiplink naar de hoofdinhoud. Daarnaast gebruik ik echte button elementen voor interactie, in plaats van div’s, terwijl de LEGO site dit niet doet. Zij hebben heel complexe menu’s en je weet niet goed wat waar staat. Ik kon daar bijvoorbeeld ook niet de inhoud van het hamburgermenu vinden.

  Ook heb ik gebruik gemaakt van een h1 met visually-hidden voor een goede hoofdtitel van de pagina's, terwijl LEGO dit voor de eerste section van hun pagina's gebruikt.

  Ook verandert mijn website heel erg in een dark color scheme, dus daarin is mijn website ook al voor uit gegaan, ten opzichte met die van LEGO zelf. Op hun site verandert namelijk helemaal niks.

  Ik zou graag nog meer aria-labels willen ontdekken, zodat mijn toegankelijkheid nog beter zal worden.
</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Het gaat nog niet zo goed, want ik heb een grote website gekozen met ingewikkelde functies. 
  Ik ben vooral bezig geweest met de html zo perfect mogelijk maken en alle functies proberen uit te werken, dat de basis css nog bijna niet is gemaakt.
  Ik moet hard aan de slag al wil ik wat kunnen laten zien.


  ### Agenda voor meeting
  Vragen stellen over mijn huidige hamburgermenu, waarom het niet lukt en hoe ik ervoor kan zorgen dat de tekst binnen het menu blijft en niet op de pagina tevoorschijn komt als de pagina groter wordt.


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Niet meer met de navigatie bezig zijn
  - probeer te focussen op de basis van de website
  - probeer zoveel mogelijk css te maken.

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/responsivemaken.jpg" width="375px" alt="de pagina is mooi op groot scherm">
  <img src="readme-images/responsivemakentwee.jpg" width="375px" alt="de pagina is mooi op kleiner scherm">
  <img src="readme-images/responsivemakendrie.jpg" width="375px" alt="de pagina is mooi op mobiel scherm">

  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/carousel.jpg" width="375px" alt="mooie carousel">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/carouseltwee.jpg" width="375px" alt="minder mooie carousel">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. CeraPro fonts van de lego website, gedownload van: https://en.bestfonts.pro/font/cera-pro
  2. foto's en video van de lego site: https://www.lego.com/nl-nl/categories/adults-welcome , https://www.lego.com/nl-nl
  3. https://www.w3schools.com/accessibility/accessibility_skip_links.php#:~:text=The%20skip%20link%20is%20a,to%20it%20with%20an%20anchor.&text=That's%20it.
  4. https://www.svgrepo.com/vectors/burger-menu/
  5. https://www.w3schools.com/html/html_forms.asp
  6. https://stackoverflow.com/questions/781473/how-to-create-a-label-inside-an-input-element
  7. https://www.a11yproject.com/posts/how-to-hide-content/
  8. https://stackoverflow.com/questions/56758098/how-to-position-detail-marker-to-come-after-summary


</details>