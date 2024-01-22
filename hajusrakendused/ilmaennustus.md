# Harjutus 1 - Tallinna ilmaennustus kasutades Yr.no API't

Tahame teha minimaalse rakenduse, mis ühe HTTP päringuga küsib ilmaennustuse ja prindib sealt andmed (aeg ja õhutemperatuur) ekraanile.
Võite teha seda mis tahes enda valitud programmeerimiskeeles. Kuupäeva ja kellaaega ei ole vaja töödelda, printige nii nagu see JSON-ist tuleb.

Näidis milline väljund võiks olla:

    2022-09-17T09:00:00 19C
    2022-09-17T10:00:00 20C
    2022-09-17T11:00:00 19C
    ...

Eesmärk on meenutada kuidas HTTP päringut teha ja päringu JSON formaadis vastust lugeda.
Kui teete C# projektina siis pole vaja tervet projekti üles laadida, piisab sellest failist kus andmete lugemine toimub, nt Program.cs console app puhul.
Ideaalis võiksid tööd esitleda tunnis.

Sa leiad Yo.no API aadressi kui otsid internetist "yr.no api" ja veebilehele jõudes vajuta "Get started" > "Start here".
Sa tahad teha päringu aadressile /compact ning lisada sinna juurde query parameetritega Tallinna koordinaadid.

Ülesanne lahendamiseks tuleb õpetajalt täiendavaid küsimusi küsida, kirjelduses pole meelega kõike infot olemas.

## Hindamine
 - Hinne 3 Rakendus näitab praegust temperatuuri
 - Hinne 4 Rakendus näitab järgmiste tundide ilmaennustust (min 3h)
 - Hinne 5 Rakendus näitab järgmiste tundide ilmaennustust kasutades tsüklit

### Mida ma eeldan, et te juba teate:
* muutujad
* for tsükkel
* kuidas lugeda andmeid array/list tüüpi struktuuridest
* kuidas lugeda andmeid object/Dictionary/HashMap/Map tüüpi struktuuridest
* kuidas töödelda JSON andmeid (serializing)
* kuidas printida andmeid ekraanile

### Mida peate võib-olla juurde õppima:
* mis on **HTTP client library**
* kuidas lisada **HTTP päiseid (headers)**
* mis on **search query parameetrid**
* kuidas paigaldada teiste tehtud koodi kasutades **package manager'i**
* mis on **laiuskraadi pikkuskraadi koordinaadid**

## Kuidas esitada
Tööd saate esitada tunni ajal või Teams Assigments kaudu.
