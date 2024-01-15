Tee jalka rakendus ette UI, proovime teha päringud sinna sisse, et backend hakkaks tööle.

JS Prisma ORM

PHP Doctrine ORM? Rakendus teha ette ja siis katsetada

Rimi raport UI? Teen ette midagi ja siis nikerdame tööle mingit statistika näitama?

# Esimene kohtumine

Teeme Windowsi peal andmebaasi varundamise skripti

1. Soovitan teha kas Windows BAT või PowerShelli skripti mis käivitab andmebaasis backup käskluse ja väljastab kas SQL või muus formaadis varukoopia faili andmetest ja schemast.
Pane backupi faili nimeks "rimi_" + sinu enda nimi.

2. Tahame SFTP/SSH kaudu backup faili sinna serverisse saata. Lae fail serveris kausta ~/databases või C:/users/backups/databases (ma ei tea kumb path töötab)

Backup server: 172.18.24.8
kasutaja: backups
parool: Passw0rd

3. Käivitada skript ajastatult igal öösel kell 04:00

Töö on hindeline, tulen vaatan skripti ja kuidas ajastasid nt Task Scheduler'iga.
Hoia skript alles, kasutame seda ühes tunnis uuesti.

# Teine kohtumine

Maarja domeeni rakenduse ehitamine koos andmebaasiga

# Kaheksas kohtumine

Backupide asi uuesti aga seadistame ise backup serveri ja teeme SSH võtmetega ligipääsu.
