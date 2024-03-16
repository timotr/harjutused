# Sorteeri logifail kuupäevade järgi

See ülesanne on lihtsalt lahendatav programmeerides aga ma tahaks lisada sellele väikse twisti.
Windowsis ja Unixi süsteemidel on olemas programm `sort`, mis suudab sisendiks võtta faili ja selle ridade kaupa sorteerida.

Eesmärk on mõista, et programmeermiskeeltes on võimalik saata käsklusi edasi ka operatsioonisüsteemile, mis on võimeline käivitama omakorda teisi programme. Need võivad olla kirjutatud teises keeltes kui sinu skript.  
Näiteks `sort` programm on kirjutatud C keeles ja kompileeritud masinkoodi. See tähendab, et see on võimeline sorteerima kuni 100x kiiremini, kui interpreteeritavad keeled nagu Python ja JavaScript.  
Väikse faili puhul ei mängi see väga rolli aga teatud olukordades on failides miljoneid ridu kandeid ja siis hakkab kiiruse vahe juba rolli mängima - kas 6 sekundit või 1 minutit.

Seega uuri mis funktsiooniga on võimalik käivitada käsurea programme läbi Pythoni või Javascripti.  
Seejärel käivita käsklus mis kasutab `sort` programmi ja annab sisendiks [selle logifaili](https://raw.githubusercontent.com/timotr/harjutused/main/progre/it-skriptid/access.log) pathi sinu arvutis.  
Kui logifail pole sinu programmi kõrval siis peab `sort` programmi parameetriks panema täieliku teekonna failini (absolute path).  
Kui teekonnas (path) on tühikud siis ära unusta lisada jutumärke: `sort "C:/Users/Timo Triisa/Downloads/logifail.log"`

Näita tulemust õpetajale enda arvutist.
