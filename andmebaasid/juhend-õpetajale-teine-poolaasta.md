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

# Neljas/viies kohtumine

Hakkame tegema praktikaportaali andmebaasi. Kirjeldan protsessi ja programmi mille jaoks on vaja andmebaasi luua.

Siin õpetajana peaksid leidam mingi keerukama õiguste süsteemiga programmi mida oled ise teinud, kuna siis su näited ja kogemus on veenvamad ja aitavad õppida.
Ma teen seda kõigiga koos ja küsin neilt tabelite nimesid ja fielde mida oleks vaja panna. Räägin ka juurde, et seda max jaksab 2h päevas teha kuna see on ajule üsna intensiivne.
Ka tunnis teeme seda osa vähemalt 2 nädalat, isegi kui tunniplaanis on 4h järjest.

```
Mis?
Koolile ja ettevõttetele praktika vahendamise portaal
Internship (practicum) portal for school and companies

Millele ja kelle nõuetele rohkem rõhku panna?
Tellija on kool
School is paying for the app

Etapid mis selgusid pikemast arutelust erinevate osapooltega:
1. Õpilaste ülevaade, vähemalt koondhinded - iga aine lõpphinne
Overview of students, and final grades in every subject

2. Praktika lepingud (docx, pdf)  binary blobs
Store internship contracts
we save file path on hard drive / project folder

3. Ettevõtete register
List of companies

4. Ettevõte saab lisada portaali tööpakkumise
Companies can add job offers to the portal

5. Õpilane saab kandideerida tööpakkumisele ja ettevõtja saab selle aksepteerida
Student can apply to the job offer and company will get an notification and can accept the student

```

## Viies kohtumine
Lõpetame ära skeema rollide õiguste osa mida eelmine kord ei jõudnud.
Siin on lõplik schema enne DrawSQLis joonistamist eesti rühmaga:
```
Student
id
pin varchar // isikukood
phone varchar
group varchar

Student_Grade
id
student_id
subject varchar(255)
grade varchar(255)

Company
id
name
regnr varchar
contact_first_name
contact_last_name
contact_phone   varchar
contact_email   varchar
logo varchar

Contract
id
student_id
company_id
file_ext
start_date
end_date
created_at datetime

Job_Offer
id
company_id
created_at datetime
title varchar
desc  text
deadline  datetime
poster str http://asd.com/pakkumine.jpg
tags str  // csv
specialty  enum

Student_Job_Offer // kandideerimine
student_id
job_offer_id
  composite primary key
accepted_at datetime
accepted_by int  //user id
rejected_at datetime
rejected_by int  //user id
rejected_comment text

User
id
email varchar
password varchar
first_name varchar
last_name varchar

Role_Permission
role_id
permission_id varchar

User_Permission
user_id
permission_id varchar

Role
id
name

User_Role
user_id int
role_id int

Company_User
user_id
company_id

```

# Kuues kohtumine
Jätkame praktikaportaaliga. Teeme Prisma.io schema faili ära. Räägin kuidas Prisma teeb seosed ja kuidas many-to-many seosed saab peidetud vahetabeliga teha
Aga erandina meie programmis on üks olukord kus tööpakkumisele kandideerinud õpilaste many-to-many seose juurde läheks ka vastuvõtmise või tagasilükkamise info ja siis on vaja explicit vahetabel teha schemas ikkagi. Näitan kus on selle kohta info Prisma manualis ja kuidas ma seda sisukorda kasutades üles leian.

Räägin juurde MySQL ja Postgres erinevusest:
```
mysql database server 3306
  schema client1
    table
    table 
  schema praktikaportaal
    table
    table
  schema epood
    table
    table

postgres database server 5432
  database epood
    schema public
      table
      table
  database praktikaportaal
    schema public
      table
      table
```

Siin on lõplik Prisma schema:
```
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?
// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

// Define the data model
model Student {
  id                Int                 @id @default(autoincrement())
  pin               String
  phone             String
  group             String
  grades            Student_Grade[]
  contracts         Contract[]
  Student_Job_Offer Student_Job_Offer[]
}

model Student_Grade {
  id        Int     @id @default(autoincrement())
  student   Student @relation(fields: [studentId], references: [id])
  studentId Int
  subject   String
  grade     String
}

model Company {
  id               Int            @id @default(autoincrement())
  name             String
  regnr            String
  contactFirstName String
  contactLastName  String
  contactPhone     String
  contactEmail     String
  logo             String
  contracts        Contract[]
  jobOffers        Job_Offer[]
  users            Company_User[]
}

model Contract {
  id        Int      @id @default(autoincrement())
  student   Student  @relation(fields: [studentId], references: [id])
  studentId Int
  company   Company  @relation(fields: [companyId], references: [id])
  companyId Int
  fileExt   String
  startDate DateTime
  endDate   DateTime
  createdAt DateTime
}

model Job_Offer {
  id               Int                 @id @default(autoincrement())
  company          Company             @relation(fields: [companyId], references: [id])
  companyId        Int
  createdAt        DateTime
  title            String
  desc             String
  deadline         DateTime
  poster           String
  tags             String
  speciality       Speciality
  studentJobOffers Student_Job_Offer[]
}

model Student_Job_Offer {
  student         Student   @relation(fields: [studentId], references: [id])
  studentId       Int
  jobOffer        Job_Offer @relation(fields: [jobOfferId], references: [id])
  jobOfferId      Int
  acceptedAt      DateTime?
  acceptedBy      Int?
  rejectedAt      DateTime?
  rejectedBy      Int?
  rejectedComment String?

  @@id([studentId, jobOfferId])
}

model User {
  id           Int               @id @default(autoincrement())
  email        String            @unique
  password     String
  firstName    String
  lastName     String
  roles        User_Role[]
  permissions  User_Permission[]
  Role         Role?             @relation(fields: [roleId], references: [id])
  roleId       Int?
  Company_User Company_User[]
}

model Role_Permission {
  roleId       Int
  permissionId String

  @@id([roleId, permissionId])
}

model User_Permission {
  userId       Int
  permissionId String
  User         User   @relation(fields: [userId], references: [id])

  @@id([userId, permissionId])
}

model Role {
  id    Int    @id @default(autoincrement())
  name  String
  users User[]
}

model User_Role {
  userId Int
  roleId Int
  User   User @relation(fields: [userId], references: [id])

  @@id([userId, roleId])
}

model Company_User {
  user      User    @relation(fields: [userId], references: [id])
  userId    Int
  company   Company @relation(fields: [companyId], references: [id])
  companyId Int

  @@id([userId, companyId])
}

enum Speciality {
  // Define your specialities here, for example:
  Engineering
  Marketing
  Design
}
```

# Kaheksas kohtumine

Backupide asi uuesti aga seadistame ise backup serveri ja teeme SSH võtmetega ligipääsu.
