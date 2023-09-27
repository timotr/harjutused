Siin on teemad millest rääkida ja mis harjutusi teha.
Ma tahaks näidata siin ka oma tempot, et oleks ülevaade tundide/nädalate lõikes ja kui kaua ma iga teema peale aega kulutan.
Äkki lisan kõige lõppu oma tundide väljavõtte Tahvlist.

Kõik kohtumised on siin 4 akadeemilist tundi. Kahe tunniga läheb pisut kiirega, 4 on hea - siis nad jõuavad ise proovida ja katsetada ka ning ma jõuan mõningaid aidata kellel vead tekivad.

Teemad mida käsitlen:
# Esimene kohtumine
1. Arutame õpilastega, mis on andmebaas, mille järgi me selle ära tunneme.
2. Räägin failidest koosnevast andmebaasist, CSV failid. Näide kuidas õpetajad ja õppeained võiksid olla jagatud kahte faili ja miks ühes failis on halb hoida seost kes mida õpetab.  
Lihtsustatud normaliseerimine mida praeguses näites kohe saab arutada:
 - andmetüübid oleks alati samad näide õpetaja staaž=int mitte "staaž 3 aastat", "4". "6 aastat 3 kuud" ja "5 aastat" - iga kord erinev formaat (Küsi mis on veel parem: alustamise kp. Aga kui töötaja vahepeal ära käib aga siis tagasi tuleb?)
 - sarnased andmed kogume ühte faili, väldime dubleerimist
3. Arutelu kas Excel/Google Spreadsheet on ka andmebaas aga need võivad teatud olukordades jääda aeglaseks (reaalne näide Inchcape kolme esindusega traffic data, Excel sync errors)
4. Räägin kuidas andmebaaside tarkvarasid liigitakse: relatsioonilised, mitte-relatsioonilised. Document, key-value, table (column, row), graph. Vahel jagan selle kahe tunni vahele ära aga mida rohkem seda korrata seda parem.
5. Installeerime andmebaasi tarkvara ja graafilise kasutajaliidese millega andmebaasi ühendada.
6. Tutvustan relatsioonilise SQL andmebaasi sõnavada: table, column (field), row (value), schema, query, type
7. Valime Stack Overflow Survey põhjal ühe populaarse SQL andmebaasi.
Teeme ise ühe andmebaasi, schema, tabeli ja sinna sisse 3 kannet. Näiteks kasutajate tabel ja 3 kasutajat, aga iga õpilane võib midagi suvalist ka teha - põhiline, et katsetavad.
Tutvusta kuidas andmebaasiga ühendada: CLI, GUI ja API - soovita GUI'd aga jäta ka vaba valik, et struggle tekiks. Hiljem teeme reaaselt API ja ORM'idega ka. Sest andmebaas on service tüüpi, modulaarne rakendus, tal ei ole kohe GUI kaasa pandud. Näita kust saab aru kas hakkas tööle, kust saab restarti teha (Windows services)
8. Rääkisin ka andmebaasis tabelite ja veergude (columns) nimetamisest, et see on kultuuriline ja sõltub meeskonnast ja vahel ka tehnoloogiatest mida kasutatakse. Näiteks ORM võib mõjutada millised valikud sul on.
(See teema võib olla ka teise kohtumise lõpus või kolmanda alguses, oleneb kuidas tunnis jõuad.)

# Teine kohtumine
1. Kordan andmebaasi liigitusi (document, key-value, table (column, row), graph) aga seekord lisan kohe lõppu ka järgmise punkti:
2. Arutasime milliseid programmeermiskeeles olevaid andmetüüpe kasutame, et erinevaid struktuure ehitada. Kuidas teha table programmeermiskeeles ja mis on graaf (Hästi üldiselt, et on directed ja mitte. Näitan wiki lehte kus nimekiri erinevatest graafide liigitustest aga pikalt ei räägi).
3. Arutasime, miks ja millal valida keerulisem SQL database engine ja millal teha ise lihtne file based database.
Advanced SQL databases have
 - memory cache
 - writing and read queue
 - backups
 - SQL - structured query language

4. Teeme harjutuse kus käivitasime olemasoleva SQL tabeli struktuuri `customers-*.sql`. Seal on meelega ka üks viga, mis pakub teatud uusi kogemusi nt tabeli kustutamise vajadus.
Ja seejärel proovisime kirjutada paar lihtsat päringut, et info andmebaasist kätte saada:  
4.1. Write a SQL query to retrieve all columns from a table named "Customers."  
4.2. Retrieve only the "first_name" and "last_name" columns from a table named "Customers."  
4.3. Retrieve all orders with a total amount greater than $100.  

6. Sissejuhatus relatsioonidesse (seosed)  
5.1. Ühes tabelis on customer_id ja teiseses tabelis on ka customer_id, see viitab, et need kaks kannet on omavahel seotud numbrid. Miks me kasutame seda numbrit mitte näiteks nime?  
5.2. NoSQL andmebaasides on ka seosed aga need pole alati andmebaasi tarkvara poolt kehtestatud ja kontrollitud. Saad tekitada olukorra kus customer_id on mõni number mida andmebaasis polegi ja viga ei paista kohe välja.  
5.3. Kirjutame LEFT JOIN päringu: SELECT orders.*, customers.first_name FROM orders LEF JOIN customers ON customers.customer_id = orders.customer_id;  
5.4. Näita JOIN'ide liikidest pilti, kui õpilased näitavad huvi välja ja aega on siis proovime erinevaid, mis need teevad.  
5.5. Sama asja kohta näide kui teha where päringuga ja kahe tabeliga from: 
SELECT orders.*, customers.first_name FROM customers, orders WHERE customers.customer_id = orders.customer_id;  
5.6. Arutelu selle kohta kas WHERE on aeglasem kui JOIN. Seleta, et käskude järjekord (FROM taga koma listil) on oluline ja võib mõjutada päringu kiirust.
Mina soovitan LEFT JOIN varianti kuna see võib olla paremini optimeeritud aga mõlemad võivad olla sama kiired - peame tegema katse (tulevas tunnis?).  
5.7. Las proovivad nüüd teha veel neljada katse ka sama andmebaasiga (jätkab tänase tunni 4. punkti):
  4.4. Retrieve all orders and include customer first and last name to the output next to each order.  
Näita milline see väljund umbes peab tulema:  
1	"2023-09-01"	1	150.00	"John"  
2	"2023-09-02"	2	75.50	"Jane"  
3	"2023-09-03"	1	200.25	"John"

# Kolmas kohtumine
1. Meenutame mida eelmine tund tegime,
2. Seletan mis on Entity Relationship Diagram
3. Räägin, et tasub teha märkmeid kui kliendi juures käite ja ta räägib mida on vaja teha, koosolek võib olla pikk ja pooled asjad lähevad meelest ära.
4. Rollimäng - räägin kui jalgpalli treener kes vajab rakenduste mängijate oskuste arengu jälgimiseks, laste puhul vanemate kontaktinfo kogumiseks ja liikmetasude kontrollimiseks
5. Õpilased proovivad selle info põhjal ise hakata andmebaasi disainima kasutades https://drawsql.app/ rakendust. Käin ringi ja jälgin mis vigu tehakse aga alati ei seleta neid kohe vaid pärast kõigile korraga.
6. Teen sama andmebaasi ise ning räägin juurde. Küsin õpilastelt mis tabeleid meil veel puudu on ja arvamust mida inglise keeles nimeks panna neile. Samuti arutan andmetüüpide valikute üle.
7. Seletan Excelis / Google Spreadsheetis kuidas tabelid(sheetid) seda infot hoidma hakkavad ja mis on relatsioon. Näitan kuidas üks id ühes sheetis saab olla teise sheeti kannetega seotud.
8. Teeme tabelite vahele one-to-many seosed. Seletan, et tihti on vaja many-to-many seost aga selle tegemiseks praktikas tehakse vahetabel. Seletan, et primary key on enamasti see kus otsas on ühenduse "one" ots ja mitte "boldis" (näitan visuaalselt sest seletan primary ja foreign pärast pausi) teine "tablename_id" ots on 3 haruga, nagu sinna saaks mitu tükki lisada. Kasutan lauseid "Ühel mängijal saab olla mitu treeningut ja ühel treeningul saab olla mitu mängijat. Järelikult on vaja mitu-mitmele seost" jne.
9. Pärast pausi seletan mis on primary key, et nt duplikaatide kustutamisel tuleb see abiks. Mis on foreign key ja mis on index.
10. Seletan indexite puhul plussid miinused lugemise ja salvestamise kiiruse osas.
11. Seletan, et indeksid tehakse binary tree struktuuride abil, joonistan kuidas need kokku pannakse (sorteerimine ja siis rekursiivselt pooleks jaotamine).
12. Teen Excelis / Google Spreadsheetis näite kuidas paroolid on user tabelis. Seletan, et parool peab kaitsma andmelekke eest räsimisega (hash) ja soolamisega (salt). Näitan vanemat md5 ja sha1 algoritmi ja seletan, et need tänapäeval liiga kiired ja palju collisioneid. Ka liiga pikal paroolil võib olla collisioneid. Ära keela liiga pikka parooli aga hoiata kasutajat, et parooli lõpp lõigatakse maha. On uuemad räsi algoritmid mis teevad neid aeglasemaks ja seetõttu on raske brute-force'ida ja rainbow tabeleid genereerida. Salt aitab lühikesi paroole reverse lookup eest kaitsta. Seletan, et enamus keeltes on hashimise jaoks crypto teegid olemas või built-in funktsioonid. Teen näidis if lause kuidas sisselogimisel siis räsi võrdlemine käib.

