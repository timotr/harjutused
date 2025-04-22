# Harjutus 2 - auto varuosade HTTP API

## Seda harjutust saab jagada neljaks osaks:
* Loe CSV failist andmed mällu
* Saada andmed kasutajale JSON formaadis kasutades HTTP veebiserverit
* Filtreeri/otsi varuosasid seerianumbri või nime järgi
* Lehekülgedeks jagamine ja sorteerimine

## Kirjeldus
Ettevõte kasutab mõnda vanemat laotarkvara, mis suudab eksportida tooteid ainult CSV-vormingus.
Meie eesmärk on teha oma äripartneritele API, et nad saaksid kontrollida, kas meie laos on mingeid kindlaid varuosi ja mis hinnaga.
CSV eksporditakse igal hommikul värskete andmetega ja see tuleb API-sse laadida.
Andmefail võib olla üle 600 Mb. Parim on see üks kord mällu lugeda ja veebiserver töös hoida.
Nii ei kuluta me kasutajate päringute ajal täiendavalt protsessori aega kettalt andmete lugemiseks ja töötlemiseks.

Valige ise programmeerimiskeel, raamistik ja endpoint'i nimi.  
Andmefaili nimi on [LE.txt](https://github.com/timotr/harjutused/blob/main/hajusrakendused/LE.txt)

Ülesanne lahendamiseks tuleb õpetajalt täiendavaid küsimusi küsida, kirjelduses pole meelega kõike infot olemas.

## Hindamine
 - Hinne 3 Rakendus suudab andmefaili töödelda ning JSON formaadis vastuse anda
 - Hinne 4 Rakendus suudab nime ja tootekoodi järgi varuosasid filtreerida/otsida
 - Hinne 5 Rakendus suudab tulemuse edastada lehekülgede kaupa, 30 tulemust ühel lehel
 - Harjutamiseks: Proovige tulemusi sorteerida veeru järgi, näiteks hinna järgi – odavaim enne

## Mida ma eeldan, et te juba teate:
- Kuidas installida teeke (library) kasutades package manageri (npm, pip, nuget, composer)
- Tsüklid ja andmestruktuurid valitud keeles, kui sa ei tea mis on andmestruktuur on viimane aeg küsida
- kuidas kirjutada andmeid array/list tüüpi struktuuridesse
- kuidas kirjutada andmeid object/Dictionary/HashMap/Map tüüpi struktuuridesse
- Kuidas teha HTTP-päringuid

## Mida peate võib-olla juurde õppima:
- Kuidas lugeda CSV faili
- Mis tähendab "hoida andmeid mälus"
- Kuidas määrata HTTP päringu päiseid (header), päringu parameetreid (query params) ja body
- Kuidas serveriga HTTP GET päringuid vastu võtta
- Kuidas lugeda serverisse saadetud päringu päist, query parameetreid ja body
- Kuidas andmeid lehekülgedeks jagada ja sorteerida

## Näidis endpointid filtreerimiseks, sorteerimiseks ja lehekülgede kaupa sirvimiseks
Aadress võib olla näiteks:

    localhost:3300/spare-parts

Lehekülgedeks jagamine võiks kasutada query parameetreid:

    localhost:3300/spare-parts?page=2

Otsing võib toimuda eraldi, andmeveeru nime järgi:

    localhost:3300/spare-parts?name=polt
    localhost:3300/spare-parts?sn=9745224452
  
Või kombineeritult:

    localhost:3300/spare-parts/search/(otsingusõna siia, mõlemad 9745224452 ja "polt" on sobilikud sisendid)
  
Otsingutulemused peaksid olema samuti lehekülgedeks jaotatavad:

    localhost:3300/spare-parts?name=polt&page=2

Sorteerimine veeru nime järgi (kasuta kindlasti terver andmestikku, mitte ainult leheküljel olevaid tulemusi):

    localhost:3300/spare-parts?sort=price
  
Sorteeri tagurpidi lisade `-` märgi veeru nime ette:

    localhost:3300/spare-parts?sort=-price

## Kuidas esitada
Enamasti ma soovin tööd näha klassiruumis või videokõnes, kus saad oma rakendust demonstreerida. Küsin mõned täiendavad küsimused. Sõltuvalt rühmast, võin pakkuda ka töö esitamist Teamsis või GitHubis, kuhu saadate ainult hoidla address.
