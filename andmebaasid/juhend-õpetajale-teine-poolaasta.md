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

Tegite Maarja tunnis domeeni registreerimise veebilehe. Jätkame selle sama koodiga mis te seal valmis saite ning kogume vormidelt vajaliku info kokku ja salvestame selle andmebaasi.

1. Kogu Maarja domeeni vormidelt info kokku. Mitme eri vormi/faili korral on selleks paar varianti:
- Salvestame kasutades Javascripti
   a) browseri localStorage ja sessionStorage
     I) Form hidden input DOM mutation
     II) fetch funktsiooniga päring form submit asemel
   b) muutujad ja fetch (React, Vue, Angular, Svelte, jne)
- Server sessions (cookie)
- Hidden input

2. Salvesta viimases sammus info andmebaasi. Võid kasutada ORMi aga ei pea.

# Kaheksas kohtumine

Backupide asi uuesti aga seadistame ise backup serveri ja teeme SSH võtmetega ligipääsu.
