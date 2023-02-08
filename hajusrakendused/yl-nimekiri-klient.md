# Harjutus 3 - Ülesannete nimekirja klientrakendus (ToDo)

## Kirjeldus
Luua ülesannete nimekirja rakendus kus saab lisada tegevusi või meelespeasid. Igat ülesannet või tegevust peab saama märkida tehtuks, vajadusel muuta ning kustutada.
Võid ka järgmises peatükis oleva rakenduse alla laadida ja käima panna kui see aitab paremini aru saada mida rakendus teeb.

Ülesannete nimekirja jaoks on olemas juba server-rakendus (REST API), mis suudab ülesandeid salvestada.
API ja selle juhend asuvad aadressil http://demo2.z-bit.ee/

Esimene samm oleks mõne HTTP graafilise tööriistaga (Postman, Insomnia, VSC Thunder Client) teha endale kasutaja demo2 serverisse.
Siis proovida teha mõned Taskid ja kontrollida kas need salvestuvad. Alles siis proovida teha samu päringuid JavaScriptis Reacti klientrakenduses.

## Klientrakendus
Seejärel soovitan võtta Reactis tehtud põhja: https://github.com/timotr/harjutused/tree/main/hajusrakendused/todo-frontend
Sinna oleks vaja teha juurde päringud mis iga muudatuse korral saadaks andmed ka backend serverisse.
Näiteks handleDeleteTask funktsioon saadaks HTTP päringuga teate serverile, et valitud Task tuleks kustutada.

Kui React sulle ei sobi võid ehitada ise klientrakenduse endale sobivale platvormile või isegi käsurea rakendusena.
Hajusrakenduste üks boonustest on see, et pole vahet mis keeles rakendust kirjutad, suhtlema saab need ikka panna.
Klientrakendust (front-end) võib ise ehitada aga server-rakendust (back-end) selles ülesandes ise ei ehita - peame kasutama olemasolevat.

Ülesanne lahendamiseks tuleb õpetajalt täiendavaid küsimusi küsida, kirjelduses pole meelega kõike infot olemas.

## Hindamine
- Hinne 3 Ülesandeid lisada, muuta ning kustutada (CRUD) aga API token on hard-coded ja kasutajat ei saa vahetada
- Hinne 4 Lisaks eelmisele saad olemasoleva kasutajaga sisse ja välja logida
- Hinne 5 Lisaks eelmisele saad ka uue kasutaja registreerida

## Mida ma eeldan, et te juba teate:
- Kuidas installida ja käivitada Javascripti rakendusi
- Kuidas teha HTTP-päringuid
- Kuidas määrata HTTP päringu päiseid, päringu parameetreid (query params) ja body
- Tsüklid ja andmestruktuurid valitud keeles

## Mida peate võib-olla juurde õppima:
- RESTful API struktuur: meetodid ja URL-i vorming
- Mis on küpsised (cookies)
- Kuidas kasutada sessionStorage või localStorage hoidlaid
- Mis on debounce ja throttle funktsioonid
- Teave CORS-i kohta Chrome'i kasutamisel
- Navigeerida Reacti rakenduses, kasutada React Hook'e https://beta.reactjs.org/

## Kuidas esitada
See töö võib olla Teamsis esitamiseks liiga suur, soovitatavalt laadige rakendus GitHubi ja esitage ainult hoidla address.
