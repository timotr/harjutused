# Docker + WSL2 Cheat Sheet

Kiirjuhend projekti käivitamiseks Dockeriga Windowsis.

---

## 1. Miks Docker?

Docker aitab projekti sõltuvused projektiga kaasa panna.

Kasulik siis, kui:

- eri projektid vajavad eri Node.js / PHP / MySQL versioone;
- ei taha kõike host-arvutisse installida;
- projekt koosneb mitmest osast: frontend + backend + database;
- tahad kogu arenduskeskkonna lihtsalt käivitada ja eemaldada;
- tahad, et projekt töötaks eri arendajate arvutites võimalikult ühtemoodi.

Näide:

```bash
npm run dev
```

võib host-arvutis ebaõnnestuda, sest NPM pole installitud.

Kui Node.js on projekti Docker containeris, pole host-arvutisse Node.js-i tingimata vaja.

---

# 2. Windows: WSL2 kontroll

Ava **PowerShell** või **Windows Terminal**.

```powershell
wsl --version
```

Kui WSL puudub:

```powershell
wsl --install
```

Windows võib paluda arvuti taaskäivitada.

Linuxi distributsiooni saab vajadusel paigaldada ka **Microsoft Store'ist**, näiteks:

```text
Ubuntu
```

Pärast installimist/uuendamist tee restart, kui Windows seda nõuab.

Docker Desktopis kasuta WSL2-põhist engine'it.

---

# 3. Põhimõisted

## Image

Image on valmis mall rakenduse käivitamiseks.

Näited:

```text
node:24
node:18
php:8.4
mysql:8.4
```

Image ise ei ole veel töötav rakendus.

---

## Container

Container on **image'i põhjal käivitatud isoleeritud protsessikeskkond**.

```text
IMAGE
  ↓
CONTAINER
```

Oluline:

> Container ei ole tavaliselt eraldi täisvirtuaalmasin.

Windowsis kasutab Docker Desktop Linuxi containerite käitamiseks WSL2/virtualiseerimist.

---

## Service

Compose'i failis kirjeldatakse rakenduse osad **service'itena**.

Näide:

```yaml
services:
  frontend:
    # ...

  backend:
    # ...

  db:
    # ...
```

Tavaliselt loob Docker Compose iga service'i jaoks containeri.

---

# 4. Compose

Fail asub tavaliselt projekti juurkaustas:

```text
compose.yml
```

või vanema nimetusega:

```text
docker-compose.yml
```

Näiteks:

```text
TA-24B-1/
├── frontend/
├── backend/
├── documentation/
└── compose.yml
```

---

# 5. Käivitamine

Ava terminal **samas kaustas, kus asub compose.yml**.

## Käivita ja näita logisid

```bash
docker compose up
```

Peatamiseks:

```text
Ctrl+C
```

---

## Käivita taustal

```bash
docker compose up -d
```

`-d` = **detached mode**

---

## Peata ja eemalda containerid

```bash
docker compose down
```

---

## Ehita image'id uuesti

```bash
docker compose build
```

Kasuta seda näiteks siis, kui muutus:

- `Dockerfile`;
- image'i sisse paigaldatav dependency;
- `package.json` / lock-file, kui dependency'd installitakse image'i buildimise ajal.

Praktiline variant:

```bash
docker compose up --build
```

See rebuildib vajadusel image'id ja käivitab projekti.

---

# 6. Networking

Docker Compose loob projektile tavaliselt automaatselt sisevõrgu.

Sama Compose'i võrgu sees saavad service'id üksteist leida **service name'i järgi**.

Näiteks:

```yaml
services:
  backend:
    # ...

  db:
    image: mysql:8.4
```

Backend saab MySQL-iga ühenduda näiteks:

```text
db:3306
```

Siin:

```text
db
```

on **hostname / service name**.

See ei tähenda, et `db` ise oleks IP-aadress. Docker DNS lahendab nime containeri IP-aadressiks.

---

# 7. Container → container

Näiteks backend tahab ühenduda andmebaasiga:

```env
DB_HOST=db
DB_PORT=3306
```

```text
backend container
       │
       ▼
    db:3306
       │
       ▼
 MySQL container
```

Sama Compose'i sisevõrgu jaoks ei pea MySQL-i porti tingimata host-arvutile avalikuks tegema.

---

# 8. Host / browser → container

Kui tahad teenust avada Windowsist või brauserist, tuleb vajalik port hostile avaldada.

```yaml
services:
  frontend:
    ports:
      - "3000:3000"
```

Tähendus:

```text
HOST:3000  →  CONTAINER:3000
```

Seejärel:

```text
http://localhost:3000
```

---

# 9. Väga oluline: frontend → backend

Kui frontendi JavaScript töötab **brauseris**, siis brauser ei asu Dockeri sisevõrgus.

Seetõttu ei tööta brauseris tavaliselt:

```text
http://backend:3000
```

Kui backend on hostile avatud:

```yaml
backend:
  ports:
    - "8080:3000"
```

siis brauser kasutab näiteks:

```text
http://localhost:8080
```

Aga üks Docker container saab teisega ühenduda service name'i kaudu:

```text
backend:3000
```

---

# 10. Ports

Süntaks:

```yaml
ports:
  - "HOST_PORT:CONTAINER_PORT"
```

Näide:

```yaml
ports:
  - "8080:3000"
```

tähendab:

```text
localhost:8080
        ↓
container:3000
```

---

# 11. Volumes

Container võib olla ajutine.

Kui container kustutatakse ja uuesti luuakse, ei tohiks tähtsad andmed kaduda.

Selleks kasutatakse **volume'e**.

Näide:

```yaml
services:
  db:
    image: mysql:8.4
    volumes:
      - mysql_data:/var/lib/mysql

volumes:
  mysql_data:
```

Volume sobib näiteks:

- andmebaasi andmetele;
- kasutaja üles laaditud failidele;
- muule püsivale rakenduse andmele.

---

# 12. Environment variables

Environment variable'id annavad programmile konfiguratsiooni.

Näiteks:

```yaml
environment:
  DB_HOST: db
  DB_PORT: 3306
  DB_NAME: app
```

või `.env` fail:

```env
DB_HOST=db
DB_PORT=3306
DB_NAME=app
```

Tüüpilised kasutused:

```text
DB_HOST
DB_PORT
DB_USER
DB_PASSWORD
API_URL
NODE_ENV
```

Ära lae päris paroole avalikku GitHubi repositooriumisse.

---

# 13. Lihtne Compose näide

```yaml
services:

  frontend:
    build: ./frontend
    ports:
      - "3000:3000"

  backend:
    build: ./backend
    ports:
      - "8080:3000"
    environment:
      DB_HOST: db
      DB_PORT: 3306
    depends_on:
      - db

  db:
    image: mysql:8.4
    environment:
      MYSQL_ROOT_PASSWORD: example
      MYSQL_DATABASE: app
    volumes:
      - mysql_data:/var/lib/mysql

volumes:
  mysql_data:
```

Ühendused:

```text
Browser
   │
   ├── localhost:3000 ──► frontend
   │
   └── localhost:8080 ──► backend
                            │
                            └── db:3306 ──► MySQL
```

---

# 14. Kõige olulisemad käsud

```bash
# Käivita
docker compose up

# Käivita taustal
docker compose up -d

# Peata ja eemalda
docker compose down

# Ehita image'id
docker compose build

# Ehita + käivita
docker compose up --build

# Vaata töötavaid containereid
docker ps

# Vaata Compose'i teenuseid
docker compose ps

# Vaata logisid
docker compose logs

# Jälgi logisid jooksvalt
docker compose logs -f
```

---

# 15. Pea meeles

```text
IMAGE      = mall
CONTAINER  = image'i töötav eksemplar
SERVICE    = Compose'is kirjeldatud rakenduse osa
NETWORK    = containerite omavaheline suhtlus
PORT       = ligipääs teenusele
VOLUME     = püsivad andmed
ENV        = konfiguratsioon
COMPOSE    = kogu rakenduse käivitamise kirjeldus
```

Kõige tähtsam võrgu mõte:

```text
container → container : SERVICE_NAME:PORT
host/browser → container : localhost:PUBLISHED_PORT
```
