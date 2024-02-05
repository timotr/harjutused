Tee jalka rakendus ette UI, proovime teha päringud sinna sisse, et backend hakkaks tööle.

JS Prisma ORM

PHP Doctrine ORM? Rakendus teha ette ja siis katsetada

Rimi raport UI? Teen ette midagi ja siis nikerdame tööle mingit statistika näitama?

# Esimene kohtumine

Teeme Windowsi peal andmebaasi varundamise skripti

1. Soovitan teha kas Windows BAT või PowerShelli skripti mis käivitab andmebaasis backup käskluse ja väljastab kas SQL või muus formaadis varukoopia faili andmetest ja schemast.
Pane backupi faili nimeks "rimi_" + sinu enda nimi.

2. Tahame SFTP/SSH kaudu backup faili sinna serverisse saata. Lae fail serveris kausta C:/Users/backups/databases

Backup server: 172.18.24.8  
kasutaja: backups  
parool: Passw0rd  

3. Käivitada skript ajastatult igal öösel kell 04:00

Töö on hindeline, tulen vaatan skripti ja kuidas ajastasid nt Task Scheduler'iga.  
Hoia skript alles, kasutame seda ühes tunnis uuesti.

# Teine kohtumine
HTTP request&response, status codes, RESTful
Node web server POST
Express framework
Läbi mitme faili kogume infot

Tegite Maarja tunnis domeeni registreerimise veebilehe. Jätkame selle sama koodiga mis te seal valmis saite ning kogume vormidelt vajaliku info kokku ja salvestame selle andmebaasi.

1. Kogu Maarja domeeni vormidelt info kokku. Mitme eri vormi/faili korral on selleks paar varianti.

Data from multiple forms/files Maarja's exercise

First form data is forgotten after you submit another HTML form.
We need all the forms data when saving to the database.

Two main ways to approach this problem
a) Keep intermediate values in browser
b) Keep intermediate values in server

Tools for each approach:
a) Keep intermediate values in browser, send in the last step
  Tools to store values between files changes:
    1) URL, search params
    2) localStorage, sessionStorage, SQLite
    3) HTML hidden form inputs
    4) JS variables / state engines (React, Vue, Angular, Svelte, etc)
  Tools to send values at the end:
    1) HTML form submit
    2) JS fetch, XMLHttpRequest

Techniques:
a) Keep intermediate values in browser
  Step 1 - store:
  1) option: HTML hidden input
  2) option: JS localStorage, sessionStorage, SQLite
  3) option: JS muutujad / state (React, Vue, Angular, Svelte, etc)
  Step 2 - send:
  1) option: Server str.replace to update form hidden inputs
  2) option: JS DOM mutation to update form hidden inputs 
  3) option: JS fetch (or XMLHttpRequest)
  
b) Keep intermediate values in server
  Step 1 - store:
  1) option: session + cookies
  Step 2 is not needed, it's already in server


2. Salvesta viimases sammus info andmebaasi. Võid kasutada ORMi aga ei pea. Andmebaasi salvestamise osa on hindeline.



# Kaheksas kohtumine

Backupide asi uuesti aga seadistame ise backup serveri ja teeme SSH võtmetega ligipääsu.
