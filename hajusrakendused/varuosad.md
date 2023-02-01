Seda harjutust saab jagada neljaks osaks:
* Loe CSV faili andmed mällu
* Saada andmed kasutajale JSON formaadis
* Filtreeri/otsi varuosasid seerianumbri või nime järgi
* Parem hinne kui teed ka lehekülgedeks jagamise ja sorteerimise

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


## Näidis endpointid filtreerimiseks, sortimiseks ja lehekülgedega otsimiseks
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
