# JavaScript – DOM innerHTML Toggle

## Hjemmeopgave

I denne hjemmeopgave arbejder du videre med **JavaScript DOM, events, conditionals og `innerHTML`**.

Du skal arbejde med et tekst-element, som ændrer indhold, når brugeren klikker på teksten.

Du arbejder selvstændigt med projektet og følger kommentarerne i filerne trin for trin.

---

# Fremgangsmåde – sådan kommer du i gang med projektet

I denne hjemmeopgave skal du bruge **GitHub Template-metoden**.

Du skal derfor **ikke downloade projektet som ZIP og ikke bruge Fork**.

Følg denne rækkefølge:

```text
GitHub Template
↓
Dit eget repository på GitHub.com
↓
GitHub Desktop
↓
Visual Studio Code
↓
Arbejd med hjemmeopgaven
↓
Commit
↓
Push
```

> Følg punkterne **ét ad gangen og i den viste rækkefølge**.

---

## 1. Opret dit eget repository på GitHub.com

Åbn det udleverede **template-repository** på GitHub.com.

Du skal være logget ind på din egen GitHub-konto.

Klik på:

**Use this template**

Vælg derefter:

**Create a new repository**

Vælg din egen GitHub-konto som ejer, og brug det repository-navn, som din underviser har angivet.

Klik derefter på:

**Create repository**

Vent et øjeblik, mens GitHub opretter dit nye repository.

### Kontrollér, at du er i dit eget repository

Når repositoryet er oprettet, skal du kontrollere navnet øverst på siden.

Det skal være **dit eget GitHub-brugernavn**, der står foran repositoryets navn.

Det kan fx se sådan ud:

```text
dit-brugernavn/js-dom-innerhtml-toggle
```

> **Stop her og kontrollér dette, før du går videre.**

---

## 2. Hent dit repository ned på din computer

Nu ligger projektet på **GitHub.com**, men du skal også have det ned på din egen computer.

Åbn **GitHub Desktop**.

Vælg:

**File → Clone repository...**

Vælg fanebladet **GitHub.com**, og find det repository, du netop har oprettet.

Hvis repositoryet ikke vises, kan du i stedet vælge fanebladet **URL** og indsætte adressen til dit repository fra GitHub.com.

### Vælg, hvor projektet skal gemmes

I feltet **Local path** vælger du, hvor projektet skal ligge på din computer.

> **Local path** betyder den mappe på din computer, hvor projektets filer bliver gemt.

Klik derefter på:

**Clone**

Vent, mens GitHub Desktop henter projektet ned på din computer.

---

## 3. Åbn projektet i Visual Studio Code

Når projektet er klonet, vælg:

**Open in Visual Studio Code**

Du skal arbejde direkte i den projektmappe, som GitHub Desktop har klonet.

Kontrollér, at projektet har denne struktur:

```text
js-dom-innerhtml-toggle/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

---

# Hjemmeopgaven

Du skal primært arbejde med disse filer:

- `index.html`
- `js/script.js`

Du kan også eksperimentere med de små ændringer, der er foreslået i `css/style.css`.

Læs kommentarerne i koden grundigt, inden du begynder at skrive din løsning.

---

## 4. Forbind JavaScript-filen med HTML-filen

Åbn:

```text
index.html
```

I filen finder du denne kommentar:

```html
<!-- Link til js/script.js herunder -->
```

Din første opgave er at forbinde JavaScript-filen med HTML-dokumentet.

JavaScript-filen ligger i mappen:

```text
js/
```

og hedder:

```text
script.js
```

> **Vær opmærksom på filstien:** `script.js` ligger ikke i samme mappe som `index.html`, men i undermappen `js`.

Skriv selv det korrekte `<script>`-element på det angivne sted.

Gem derefter filen.

---

## 5. Åbn `js/script.js`

Start med at skrive:

```js
"use strict";
```

I filen er tekst-elementet allerede hentet fra DOM'en:

```js
const getWordElem = document.getElementById("word");
```

Det betyder, at JavaScript nu har adgang til HTML-elementet med:

```html
id="word"
```

---

## 6. Arbejd med klik på selve teksten

I denne opgave er der **ingen knap**.

I stedet lytter JavaScript efter klik direkte på tekst-elementet:

```js
getWordElem.addEventListener("click", function() {

    // Din kode skal skrives her

});
```

Når brugeren klikker på teksten, skal koden inde i den anonyme function køre.

Du skal selv skrive en `if/else`-struktur inde i event listeneren.

---

## 7. Brug `textContent` og `innerHTML`

Din `if/else`-struktur skal undersøge den aktuelle tekst ved hjælp af:

```js
this.textContent
```

Hvis teksten er:

```text
Det ta'r kun 5 minutter
```

skal du ændre indholdet med:

```js
this.innerHTML
```

så teksten bliver:

```html
<strong>og så er du i Netto.</strong>
```

Ellers skal du ændre indholdet tilbage til:

```text
Det ta'r kun 5 minutter
```

> `textContent` arbejder med ren tekst, mens `innerHTML` kan indsætte HTML-kode som fx `<strong>`.

---

## 8. Test løsningen i browseren

Åbn `index.html` med **Live Server**.

Klik på teksten flere gange og kontrollér:

- at teksten først viser **Det ta'r kun 5 minutter**
- at teksten ændres til **og så er du i Netto.**
- at den nye tekst vises med `<strong>`
- at teksten skifter tilbage igen ved næste klik

Hvis noget ikke virker:

1. Åbn browserens Developer Tools.
2. Gå til **Console** og læs eventuelle fejlmeddelelser.
3. Kontrollér din `if/else`-struktur.
4. Kontrollér brugen af `this.textContent`.
5. Kontrollér brugen af `this.innerHTML`.
6. Kontrollér, at teksten er skrevet præcist som i opgaven.
7. Gem filerne og test igen.

---

## 9. Prøv selv i `css/style.css`

I `style.css` finder du kommentarer med små forslag til ændringer.

Du kan blandt andet prøve at ændre:

- `font-size`
- `color`
- `opacity`

Formålet er at se, hvordan CSS påvirker tekstens udseende og hover-effekt.

> Disse ændringer er ekstra eksperimenter og ændrer ikke selve JavaScript-opgavens løsning.

---

## 10. Arbejd progressivt med commits

Du skal ikke vente med at committe, til hele hjemmeopgaven er færdig.

Lav commits løbende, når du har afsluttet en tydelig del af arbejdet.

Du kan eksempelvis lave commits efter:

```text
Forbundet JavaScript med index.html
```

```text
Tilføjet use strict
```

```text
Tilføjet if else til tekst-elementet
```

```text
Arbejdet med innerHTML
```

```text
Testet tekst-toggle
```

Skriv selv korte og meningsfulde commit-beskeder, der beskriver, hvad du har ændret.

> Formålet er, at din Git-historik viser, hvordan du har arbejdet med hjemmeopgaven trin for trin.

---

## 11. Push til GitHub.com

Når du har lavet et commit i GitHub Desktop, skal du huske at klikke på:

**Push origin**

På den måde bliver dine ændringer sendt fra din computer til dit repository på GitHub.com.

Gå gerne ind på GitHub.com bagefter og kontrollér, at dine seneste commits kan ses.

---

# Når hjemmeopgaven er færdig

Kontrollér følgende:

- [ ] Jeg har oprettet mit eget repository med **Use this template**
- [ ] Jeg arbejder i mit eget repository
- [ ] Jeg har klonet projektet med GitHub Desktop
- [ ] Projektet er åbnet i Visual Studio Code
- [ ] `js/script.js` er forbundet korrekt med `index.html`
- [ ] Jeg har skrevet `"use strict";`
- [ ] Jeg har arbejdet med `addEventListener()`
- [ ] Jeg har skrevet en `if/else`-struktur
- [ ] Jeg har arbejdet med `this.textContent`
- [ ] Jeg har arbejdet med `this.innerHTML`
- [ ] Jeg har indsat `<strong>` via `innerHTML`
- [ ] Teksten skifter frem og tilbage ved klik
- [ ] Jeg har testet løsningen i browseren
- [ ] Jeg har lavet løbende commits
- [ ] Jeg har pushet mine commits til GitHub.com

> **Husk:** Formålet er både at træne **JavaScript DOM, events, conditionals, `textContent` og `innerHTML`** og at øve workflowet mellem **GitHub.com → GitHub Desktop → Visual Studio Code → Commit → Push**.
