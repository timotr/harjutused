# Programmeerimise aluste õpetaja juhendi mustand

Selles juhendis on kohtumised 4 akadeemilist tundi pikad.

## Tundide struktuur

### A) Kui tunni eesmärk on uus teema (hea oleks max 3h)
20min kordamine - notepadis, õpilased ütlevad teemad
45min uus teema
90min harjutuste tegemine

### B) Kui tunni eesmärk on kordamine (hea oleks 4h)
35min kordamine - kahoot või notepadis
35min kiire ülesanne (mingi teine set kiirete harjutuste jaoks, igaüks valib sealt ühe sellise harjutuse mille ta suudab kiirelt ära teha)
35min analüüsime koos koodi
75min suurem harjutus

Kiirete harjutuste set võiks olla midagi Duolingo moodi kus kood on ees ja all on valikud mida sinna tühja spoti panna.
Saaks teha mitu tükki kiiresti järjest. Goal: ülesannete kogus ja time limit on alguses valikus.
Tracking code, ise paned mingi koodi kui tahad näha statistikat. See salvestab kesksesse andmebaasi, tracking koodi jagades saavad teised näha sinu tulemusi.
Tracking koodiga krüpteerida andmed? Linnuke, annan loa õpetajal näha minu tulemusi (sinu krüpteerimisvõti läheb mulle listi). Failid on hashed tracking code.
Topics list
Sulud

## Teemad
- kus koodi saab käivitada, mis teisi töövahendeid programmeermisel kasutame
- while, for, if, function
- andmetüübid: kuidas peale vaadates ära tunneme, mis omadused neil on
- andmetüübid individuaalselt: CRUD ja teised meetodid
- sõnavara Object: properties, key, value, method; Array: index
- 
- 
- 
- täna levinud failiformaadid: CSV, XML, JSON, YAML
- nesting, parent, child, sibling, nested ifs
- seome õpitud keele teiste tehnoloogiatega: HTML, HTTP, OS/failisüsteem (aga hästi pealiskaudselt)

## Teemad mida ma tahaks näidata aga ei tea kus, võiks olla valikulised või randomly tulla
Kardan õpilasi uute terminitega üle koormata. Need teemad võiks tulla sujuvalt mõne harjutuse käigus kus need on disainis eelistatud ja tulevad naturaalselt välja.
- tsüklis break ja continue
- switch
- kompilaatorid ja interpretaatorid

## Teemad mida mina arvan, et peaks kindlasti välja jätma
Need teemad on algajale liiga segadust tekitavad. Neid saab omavahel arutada ainult kogenud arendajad. Need teemad peaks olema valikulised.
- programmeermise paradigmad: see on liiga suur ja filosoofiline haru, algaja peaks kogema palju erinevaid tööriistu ja leidma endale sobivad läbi kogemuse. Uudishimulikumad leivad sinna tee nii-kui-nii.

## Tundide ülevaade:
1. A **[Esimene kohtumine](#esimene-kohtumine)** while ja for, operaatorid (max 5), if on nagu while aga ei loopi
2. B **[Teine kohtumine](#teine-kohtumine)** string, boolean, number, fruitCounter
3. A Functions [guessTheNumber](https://github.com/timotr/harjutused/blob/main/progre/guessTheNumber.md)
4. A Arrays
5. A Objects, [Kahoot Basics II](https://create.kahoot.it/details/91b07b47-f141-4ace-a6ae-ccb4959c0765)
6. B [Kahoot Arrays](https://create.kahoot.it/details/261ab306-984d-4777-8c3f-1053a9ec1b7d)
7. B Analüüsime koos [algoritme](#erinevad-algoritmid-mida-koos-analüüsida) (max 2, muidu väsivad ära)
8. B [Kahoot Objects](https://create.kahoot.it/details/5fbe65d9-6f97-46f9-a2d7-4b4b79177af1)
9. A 
10. B Analüüsime koos [algoritme](#erinevad-algoritmid-mida-koos-analüüsida) (max 2, muidu väsivad ära)
11. A Error handling, kuidas lugeda stack trace'i, try/catch, avoid nesting ifs
12. B
13. A
14. B
15. A Promise?
16. B
17. Konsultatsioon

## Esimene kohtumine

JavaScript ei ole Java

Variables muutujad: mälu (RAM, CPU L1-3 Cache)
Conditionals tingimuslaused (Control flow): while, for
Operaatorid: <,>,==,=,--
Functions: prompt
Scope
Loops
Data types:  Boolean (1 on vool, 0 ei ole voolu, on / off)
Syntax - õigekiri, lause ehitus

Kus me JavaScripti (js) käima paneme?
Browser, Node

Programeerimiseks kasutame
Visual Studio Code
Intellij IDEA

Tunnis tegime harjutuseks need ülesanded:
1. Prindib ekraanile numbrid 10-30
2. Prindib numbrid 0 kuni see mis kasutaja sisestab
3. (Boonus) Prindib numbrid 1-99, nii et kõik kümnendid jäävad
vahele 10, 20, 30, 40, 50, 60 jne ei prindita

Hinne on boonuseks nendele kes kõik kolm ära tegid või olid tunnis aktiivsed ja mõttega kaasas.

## Teine kohtumine

Meenutame mida me eelmises tunnis õppisime.

Uued andmetüübid:
boolean - true / false   1 / 0   tõene / väär
number - Javascriptis on täisarvud ja reaalarvud mõlemad number tüüpi, teistes keeltes võib olla eraldatud
string (sõne) - tekst, tunneme ära jutumärkide järgi ja IDE värvib selle näiteks punaseks.

Arvuti oskab ainult numbreid. Kuidas me salvestame teksti, heli, pilte/värve?
Kodeerimine (encoding) - teksti jaoks originaalis oli ASCII encoding.

Kuidas hinded saab ja aine läbitud?
https://github.com/timotr/harjutused  lehel on harjutused ja kirjas kuhu arvestuslikud kodutööd üles laadida.
Kõige lõpus tuleb suuline teadmiste kontroll, seal on võimalik kasutada näiteks enda konspekti kui peast ei tea või otsida netist aga siis saab vastuse eest vähem punkte.

Uued operaatorid/tehted:
<=  väiksem või võrdne kui.  10 < 10 false   10 <= 10 true
>= suurem või võrdne kui
&&  and, kui vasak ja parem pool on true, tagastab true, kui üks on false on tulemus false
|| or, piisab kui ühel pool tehet on true, siis tuleb tulemuseks true, kui mõlemal pool on false siis tuleb false
! pöörab paremal pool oleva boolean väärtuse tagurpidi, !true on false, !false on true. !!true on true sest keerad kaks korda tagurpidi

Control flow ja conditionals:
if, while, for

If lause on uus, see on tingimuslause. Seletasin selle lause süntaksit ja kuidas kasutada && ja || tehteid if lause juures.

Functions:
prompt - veebilehitsejas küsib kasutajalt string sisendi

Puuvilja loenduri programm mis küsib kasutajal puuvilja nime ja loeb kokku mitu korda seda sisestatud on:
1. Tee kaks muutujat mis loendavad mitu puuvilja on sisestatud: õunad, pirnid. Alusta loendamist nullist.
2. Küsi kasutajalt üks puuvili
3. Kui see on õun, suurenda õunte muutujat
4. Kui see on pirn, suurenda pirnide muutujat
5. Kui see on mõni muu sisend siis kirjuta "Tundmatu puuvili" ja lõpeta programm.
6. Korda alates teisest punktist

## Kolmas kohtumine

Las uurivad 30 minutit kuidas ise funktsioone teha.
Sisendi, väljundi ja skoobi näited.
Sünonüümid: subroutines, routines, procedures, functions (especially if they return results) or methods (in class)
Selgita miks funktsioone kasutatakse:
- In the 1950s, computer memories were very small by current standards so subroutines were used to reduce program size. A piece of code was written once and then used many times from various other places in a program.
- Today, subroutines are more often used to help make a program more structured, e.g., by isolating some algorithm or hiding some data access method. If many programmers are working on one program, subroutines are one kind of modularity that can help divide the work. It is less demanding for your mind if you don't see all the code.

Näita kust leida funktsioonide meetodite kirjeldused.
https://www.w3schools.com/js/js_functions.asp

Seejärel proovige teha harjutustest kaks easy kategooria ülesannet ja checkTemp ülesanne. Need peaks olema kokku umbes 45 kuni 120 minutiga tehtavad, kui ise teete ja kaasa mõtlete.
https://github.com/timotr/harjutused

## Neljas kohtumine

Kordame eelmise tunni teemasid.
Uus andmetüüp array (List). Kuidas array luua, kuidas sinna asju sisestada ning kuidas sealt sees andmeid lugeda. Kordame for tsükli tööpõhimõtet läbi fruitSort.html faili.

Kolmanda tunni harjutus:
1. Küsi kasutajalt 10 puuvilja/sõna, salvesta need array sisse.
(vaja teha for/while tsükkel)
2. Kõige lõpus prindi konsooli kõik 10 puuvilja/sõna korraga, kui kasutaja ei sisestanud midagi siis ära tühja rida näita.
(vaja teha if lause ja/või veel üks tsükkel aga mitte for-in või for-of)
3. Prindi konsooli milline puuvili/sõna oli kõige pikem.
(vaja teha variable ja if lause)

## Viies kohtumine

Kordasime funktsioonide teemat ja võtsime viimase andmetüübi object. Sellel on veel mitu nime nagu Dictionary, Map, HashMap, assocative array

Hinded on kordamise eest, kes teadsid operaatoreid, andmetüüpe ja funktsioone.

Pärast seda tegime järgmiseid ülesandeid: checkTemp, arrays.md, guessTheNumber ja perfectlyBalanced - sellises järjekorras nagu õpilased ise tundsid, kõik on enamvähem võrdse raskusega.
Ülesanded leiab siit: https://github.com/timotr/harjutused/tree/main/progre

## Kuues kohtumine

Tegime kordamist läbi Kahooti.  Kolm parimat said boonushinde ja lisaks hinded veel nendele kes mäletasid eelmise tunni teemasid.

Rääkisin kodus iseseisva õppimise vajadusest. Sul on vaja kokku 200 tunni jagu keskenduda programmeerimisele siis sul on tugev alus teise aasta alguseks. Kooli lõpetamiseks ja tööle minemiseks peaks olema miinimum 1000 tundi kogemust programmeermisega. Kui sa enamus ajast veedad arvutis mängides siis sul on aasta lõpuks 1000h Valoranti kogemust ja 50h programmeerimise kogemust.

Jätkame ülesannetega GitHubis ja aitan esimeste ülesannetega järgi.

## Seitsmes kohtumine



## Kaheksas kohtumine

## Kümnes kohtumine

Alustame suuliste teadmiste kontrolliga. Iga tund küsin umbes viielt õpilaselt tema teadmiste kohta ja palun neid demonstreerida. Vastavalt sellele panen hinde, hinnet on võimalik parandada alles siis kui olen selle kõigiga läbi teinud. Vestlusel küsin esimese kuue tunni teemade kohta (variables, conditions, operators, functions, data types, array, object ja kontrollin milliseid ülesandeid oled teinud ning kas sul on konspekt)

## Üheteistkümnes kohtumine

## Kaheteistkümnes kohtumine

## Järgmised 3 kohtumist 14.nov, 21.nov ja 28.nov ja pärast seda iseseisev töö

14.nov HTML + JS
21.nov Node, HTTP Server
28.nov Failisüsteem: teeme faili, loeme faili, nimekiri kõikidest .png ja .jpeg failidest (seda läheb järgmise nädala iseseisva töö tegemiseks vaja)
5.dets iseseisvalt: otsime mingit kindlat stringi ühes kaustas kõikidest .txt failidest
12.dets 

## Kompilaatorid ja interpretaatorid

Protsessoritel on eri disainid ja selle tõttu ka erinevad baas käsustikud mida sellega teha saab.
Selleks, et üks programmeermiskeel saaks joosta erinevate protsessorite peal peab selle tõlkima protsessorile sobivasse masinkoodi.

Selle jaoks on kahte liiki tõlke programmid: kompilaatorid ja interpretaatorid.
Kompilaator tõlgib otse masinkoodi. Iga uue protsessori lisamine võib vajada väga palju tööd.
Interpretaator tekitab vahepealse käsustiku mida on kiirem tõlkida masinkoodi. Sellised keeled jõuavad rutem erinevatele protsessoritele.

Varem öeldi, et kompileeritud programmid töötavad kiiremini kui interpreteeritavad aga tänaseks on erinevaid tehnikaid mis suudavad need ka hästi kiireks teha.
Teoorias saab teha igale keelele kompilaatori ja interpretaatori mõlemad. See on keele autori ja selle kasutajate otsustada kumma nad ehitavad.

Interpretaator suudab luua teatud keerukamaid tehnikaid mida kompilaatoriga teha ei saa:
- platform independence (Java's byte code, for example)
- reflection and reflective usage of the evaluator (e.g. a first-order eval function)
- dynamic typing
- ease of debugging (it is easier to get source code information in interpreted languages)
- small program size (since interpreted languages have flexibility to choose instruction code)
- dynamic scoping
- automatic memory management

See teadmine võib teil aidata tulevikus valida mis programmeerimiskeelt järgmiseks õppida või julgustada kedagi kunagi ise mõnele keelele tõlkeprogrammi ehitama.

## Kahooti lingid

[Basic II](https://create.kahoot.it/details/91b07b47-f141-4ace-a6ae-ccb4959c0765)
[Arrays](https://create.kahoot.it/details/261ab306-984d-4777-8c3f-1053a9ec1b7d)
[Objects](https://create.kahoot.it/details/5fbe65d9-6f97-46f9-a2d7-4b4b79177af1)

## Erinevad algoritmid mida koos analüüsida

Võta korraga ainult 1-2 tükki. Kogemus näitab, et pärast teist nad väsivad ära.

### Reversed string loop
```js
let inputString = "hello";
let reversedString = "";

for (let i = inputString.length - 1; i >= 0; i--) {
  reversedString += inputString[i];
}

console.log(reversedString); // Output: "olleh"
```

### Reversed string split reverse join
```js
let inputString = "hello";
let reversedString = inputString.split('').reverse().join('');

console.log(reversedString); // Output: "olleh"
```

### Prime numbers
```js
for (let num = 2; num <= 100; num++) {
  let isPrime = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(num);
  }
}
```

### Word count split
```js
let inputString = "This is a sample sentence to count words.";
let wordCount = inputString.split(" ").length;

console.log("Word count: " + wordCount); // Output: Word count: 8
```

### Word count loop
```js
let inputString = "This is a sample sentence to count words.";
let wordCount = 1; // Initialize with 1 to account for the first word

// Iterate through each character in the input string
for (let i = 0; i < inputString.length; i++) {
  if (inputString[i] === ' ') {
    // If a space is encountered, increment the word count
    wordCount++;
  }
}

console.log("Word count: " + wordCount); // Output: Word count: 8
```

### Factorial recursive
```js
function factorialUsingFunction(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorialUsingFunction(n - 1);
  }
}

const result1 = factorialUsingFunction(5);
console.log(result1); // Output: 120
```

### Factorial loop
```js
function factorialUsingWhileLoop(n) {
  let result = 1;
  let i = 2;
  while (i <= n) {
    result *= i;
    i++;
  }
  return result;
}

const result3 = factorialUsingWhileLoop(5);
console.log(result3); // Output: 120
```

### Array map function
```js
Array.prototype.customMap = function(callback) {
  const mappedArray = [];

  for (let i = 0; i < this.length; i++) {
    mappedArray.push(callback(this[i], i, this));
  }

  return mappedArray;
};

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.customMap(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
```

### Array filter function
```js
Array.prototype.customFilter = function(callback) {
  const filteredArray = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      filteredArray.push(this[i]);
    }
  }

  return filteredArray;
};

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.customFilter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```
