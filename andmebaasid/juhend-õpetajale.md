Siin on teemad millest rääkida ja mis harjutusi teha.
Ma tahaks näidata siin ka oma tempot, et oleks ülevaade tundide/nädalate lõikes ja kui kaua ma iga teema peale aega kulutan.
Äkki lisan kõige lõppu oma tundide väljavõtte Tahvlist.

Kõik kohtumised on siin 4 akadeemilist tundi. Kahe tunniga läheb pisut kiirega, 4 on hea - siis nad jõuavad ise proovida ja katsetada ka ning ma jõuan mõningaid aidata kellel vead tekivad.

TODO:
Valmista ette mõned andmebaasid päris andmetega kus harjutada päringuid ja õpilased näeks struktuure.
Self-reference - kategooriad ja tooted, kaustad ja failid
Tööaja graafiku hoidmine andmebaasis
Rollide süsteemid

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

# Neljas tund

Täna on teil tunnis iseseisev töö disainida hobuste tallile haldus-süsteemi andmebaas. Töö võtab umbes 45-120 minutit aega. Vihjeks, et andmebaasis peaks olema minimaalselt 7 tabelit - võib olla ka rohkem. ERD skeem koos seostega ning indeksitega tuleb esitada tänase tunni lõpus. Näiteks ekraanipilt (screenshot) mulle emaili peale või proovida share'ida otse DrawSQL lehelt. Hoidke töö pilves alles.

Ülesande tekst:
Tere! Ma olen talli juhataja ja vastutan igapäevaselt meie hobutalli toimimise eest. Meil on mitu olulist ülesannet, mida sooviksime tarkvara abil paremini hallata ja jälgida.

Meil on mitmeid hobuseid, igaühel neist on oma nimi, vanus, tervislik seisund, talliboksi number ja treeninggraafikud. Soovime tarkvara, mis võimaldaks meil hõlpsasti sisestada ja uuendada neid andmeid. Vaja on hoida ka hobuste omanike andmeid.

Lisaks oleks vaja pidada arvet talli varustuse üle. Oleks vaja lihtsat inventari loetelu koos vara väärtusega.

Hobuste puhul on veel oluline nende tervise jälgimine. Tahame säilitada veterinaarsete protseduuride ajalugu, näiteks vaktsineerimised ja ravikuurid.

Praegu on meil töötajate kontaktandmed ja töögraafikud tehtud Excelis, sooviks need ka kanda süsteemi.

Oluline on ka kasutajaõiguste jaotamine, soovime osadel töötajatel piirata teatud andmetele ligi saamist. Hobuste omanikel võiks olla ka võimalus konto teha ja näidata neile hobusete veterinaarsete toimingute ajalugu.



In English

Today you have an independent task in class to design a database for a horse stable's management system. The work takes about 45-120 minutes. As a hint, there should be at least 7 tables in the database - there may be more. The ERD diagram with connections and indexes must be presented at the end of today's lesson. You can take a screenshot and send it to my email or share directly from DrawSQL website if you can. Save it in cloud just on case.

Task text:
Hello! I am the manager of the stable and I am responsible for the day-to-day operation of our horse stable. We have several important tasks that we would like to better manage and track with software.

We have several horses, each with its own name, age, health status, stall number and training schedules. We want software that allows us to easily enter and update this data. It is also necessary to keep the data of the horse owners.

In addition, it would be necessary to keep an account of the equipment of the stable. A simple inventory list with the value of the equipment would be required.

In the case of horses, monitoring their health is also important. We want to keep a history of veterinary procedures, such as vaccinations and courses of treatment.

Currently, we have employees' contact information and work schedules made in Excel, we would also like to transfer them to the system.

The distribution of user rights is also important, we want to restrict access to certain data for some employees based on the roles. Owners could also have the option to create an account and see the history of the horses' veterinary operations.

# Viies tund

Meenutame eelmiste tundide teemasid
Vaatame mis on ORM. Proovime JavaScriptis Drizzle ORM'i koos jalgpalli andmebaasiga.

https://github.com/timotr/harjutused/blob/main/andmebaasid/Drizzle-ORM-prototype.md
The exercise is really easy and works with any tool. But when projects get harder and you're in a team, you need to learn skills to organize your code and database.
Migration is one common way to do it. Migration technique is used to track (applied) changes in database structure.
Separating your schema in source code is another one.

ORM are able to import existing database schema
Data first -> auto generates code (input SQL)
Schema first -> auto generates database and code (input JS or custom language)
Code first -> auto generates database (input JS)

Tunnis tehtud sammud. Kõiki detaile seal ei ole, aitasime tunnis üksteisel vigu leida kui tekkis aga kõike pole võimalik kirja panna.
Juhend Drizzle ORM-i installimiseks tühja JavaScripti projekti ja jalgpalliklubi andmebaasi loomiseks:
1. Tee uus kaust projekti jaoks
2. Ava projekti kaustas käsurida
3. Loo package manager meta fail käsuga 'npm init'. Ilma valikuteta sai teha 'npm init -y'
4. Ava Drizzle veebilehelt dokumentatsioon
5. Alusta 'Get started' sektsioonist vastavalt mis andmebaasi kasutad.
5.1. Installi vajalikud package'id mis juhendis kirjas
5.2. Tee migratsiooni skripti jaoks uus fail kuhu saad selle connection näite kopeerida
6. Vaata juhendis järgmist peatükki kus selgitatakse kuidas schema defineerida
6.1. See on väike projekt seega üks fail schema jaoks peaks olema piisav. Vaata, et ikka õige andmebaasi koodi kopeerid.
6.2. Muuda näites tabelite nimed ära, võta tabelid jalgpalli klubi näitel: players, guardians, playerGuardians
7. Proovime käivitada Drizzle Kit käsu mis loob schema põhjal migratsiooni failid. Vaata Drizzle Kit juhendit.
7.1. Tee omal valikul drizzle.config fail
7.2. Määra config failis schema fail, output folder, driver ja dbCredentials. Drizzle Kit "Quick start" peatükis on veel näited sellest confist.
7.3. Lisame dizzle-kit generate ja meie enda migrate faili käsud package.json scripts objekti
"generate": "drizzle-kit generate:mysql",
"migrate": "node ./db/migrate.js",
7.4. Käivita generate (`npm run generate`) käsk enne ja siis migrate
8. Kontrolli kas andmebaasi tekkisid need tabelid (MySQL Workbenchiga)
9. Lisa schemasse ka teams tabel ja tee constraintid:
"players - teams" and "players - playerGuardians - guardians"
9.1. Genereeri uus migratsioon pärast muudatust (`npm run generate`)

# Kuues tund

Jätkame jalgpalliklubi rakenduse ehitamist. Kontrollime, et kõik on jõudnud koodiga sama kaugele ja ühendus töötab.
Seejärel hakkame tegema mängijate lisamise ja lugemise päringuid.

Proovige luua skript, mis lisab mängijad käsurea abil andmebaasi.
1. Looge uus JS-fail, importige sinna andmebaasi ühenduse object nt schema failist.
2. Kirjutage insert päring Drizzle'i abil.
3. Käivitage andmete sisestamiseks skript "node yourscript.js".
4. Kontrollige, kas andmebaasis on andmed olemas.
5. Lisage mängija nime sisestamise võimalus käsurea parameetrite kaudu. Nt "node yourscript.js Pavel Aleksejev"

6. Tehke index.js sisse web server (näiteks Express.js abil)
7. Võtke POST meetodiga HTML form data vastu ja sisestage selle abil mängija andmebaasi

# Seitsmes tund

Jätkame jalgpalliklubi rakenduse ehitamist. Seekord lisame veebiserveri, et andmeid lisada, lugeda, muuta ja kustutada (CRUD operations).
https://github.com/timotr/harjutused/blob/main/andmebaasid/Drizzle-ORM-prototype.md

1. Setup web server using Express
2. Create player by posting HTML form data.
3. List existing players on the webpage
4. Delete a player
5. Bonus: update a player

# Kaheksas tund

Õpilased teevad iseseisvalt seda jalgpalli klubi rakendust edasi.
Mina kontrollisin hobuste andmebaasi ERD skeeme - nad peaksid nähema rohkem valmis andmebaase enne äkki?

# Üheksas tund

RBAC Role-ased Access Control
CBAC Claims-based Access Control
PBAC Permission-based Access Control

Rollipõhine pole väga granulaarne, tekib probleeme kus mõni töötaja peaks saama väike tööampsu juurde teisest rollist aga saab kõik teise rolli õigused.
Rolle võib olla ka raske välja mõelda, nii et need kataks kõik vajadused hästi ära.

Claims ja permission põhised ligipääsud on tegevuspõhised ja seetõttu saab kellegi lubada näiteks uut kannet lisada aga kustutada mitte.
Esmakordselt kõikide tegevuste ära kaardistamine õigusteks on väga ajamahukas. Üldiselt kõik rollide ja õigustega seotud arendustööd on suhteliselt mahukad.

Claim tüüpi kontroll kannab kaasas mõnda kasutajaga seotud infot, näiteks claim "IsEmployee" kontrollib kas kasutajal on "EmployeeNumber" property täidetud. Vähemalt nii väidab [Entity Framework manual](https://learn.microsoft.com/en-us/dotnet/framework/wcf/feature-details/managing-claims-and-authorization-with-the-identity-model#claims)

Neid kolme saab ka omavahel kombineerida. Näiteks, et ühel rollile on määratud mitu erinevat permissionit ja kasutajale veel personaalsed claimid.
Näiteks
(PS. Tunnis vaatasime ka meditsiinisüsteemi ja mis rollid seal oleks aga ma ei jaksa neid siia kirja panna seega kopeerin ühed teised rollid ja permissionid.)

Permissions (tegevusega seotud):
viewStock
updateStock
deleteProducts
createClient
addReservation

Roles (ametiga seotud):
Mehaanik (viewStock updateStock)
Klienditeenindaja (createClient, addReservation)
Laohaldur (viewStock, updateStock, deleteProducts)
Laotöötaja (viewStock, updateStock)

Claims (omadusega seotud):
isAdult
hasFiveYearsOfExperience
hasDrivingLicense

Üks mõte veel: rolle ja õigusi võib hoida ka lihtsalt lähtekoodis mitte andmebaasis. Ainult kasutaja külge sidumise tabelid nagu UserRoles (user_id, role_id) ja UserClaims (user_id, claim_id)
peaks olema andmebaasis, sest me muudame neid väga tihti. Kuna rollid ja õigused on tihedalt seotud koodiga siis nende andmebaasis hoidmine ja muutmine lisab täiendavat keerukust.

Hästi oluline teema on näidata ka claimi laadset olukorda, kus keegi haldab midagi. Näiteks perearst näeb endaga seotud patsiente mitte kõiki korraga (saab panna ka kõik aga, et filtri saaks peale panna).
Et see võib vahel olla otse koodis ilma claim tüüpi filter funktsioonita aga võib ka funktsioonina teha.

# Kümnes tund

Hobusetalli töö põhjal oli näha, et õpilastel on nõrk arusaam kuidas tööaja graafikut teha. Proovime teha tunnis kolme broneerimisüsteemi:
 - hotelli toa broneerimine (päevades)
 - arsti konsultatsioon (minutites)
 - töögraafik (tundides, korduv plaan)

# Üheteistkümnes tund

Äkki teha rollide, permissionite ja claimide harjutamiseks mingi näidis kliendile need väärtused.
