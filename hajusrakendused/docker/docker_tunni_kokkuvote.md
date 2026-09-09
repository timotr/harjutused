# Tunnikokkuvõte: WSL2, virtuaalmasinad ja Docker

## Mida tunnis uurisime?

### 1. Miks Dockerit üldse vaja on?

**Probleemid, mida lahendame:**
- Kuidas kasutada eri projektides erinevaid tarkvara versioone ilma arvutit segamini ajamata?
- Kuidas käivitada projekt nii, et arendaja ei pea kõiki sõltuvusi oma arvutisse installima?
- Kuidas projektiga seotud teenused lihtsalt käivitada, peatada ja eemaldada?
- Kuidas hoida arenduskeskkond eri arvutites võimalikult ühesugune?

**Näide:**  
Host-arvutis võib `npm run dev` anda vea, et NPM pole installitud, kuid projekti Node.js containeris on Node.js ja NPM olemas.

---

## Põhimõisted

- **WSL2** – Windows Subsystem for Linux; võimaldab Windowsis kasutada Linuxi keskkonda ning on Docker Desktopi tavapärane alus Windowsis.
- **Virtual Machine (VM)** – eraldi virtuaalne arvuti oma operatsioonisüsteemiga; Docker Desktop kasutab Windowsis Linuxi käitamiseks WSL2/virtualiseerimist.
- **Docker** – tööriistade ökosüsteem rakenduste ja nende sõltuvuste containeritesse pakkimiseks ning käivitamiseks.
- **Docker Desktop** – Windowsi/macOS-i rakendus, mis teeb Dockeri kasutamise lihtsamaks ja haldab vajalikku Linuxi keskkonda.
- **Image** – valmis „mall“, millest container käivitatakse, nt `node:18`, `node:24`, `php:8.4`, `mysql:8.4`.
- **Container** – image'i põhjal käivitatud isoleeritud protsessikeskkond. Container ei ole tavaliselt eraldi täisvirtuaalmasin.
- **Service** – `compose.yml` failis kirjeldatud rakenduse osa, nt `frontend`, `backend` või `db`; Docker Compose loob selle põhjal ühe või mitu containerit.
- **Docker Compose** – võimaldab kirjeldada ja käivitada mitmest teenusest koosneva projekti ühe konfiguratsioonifaili abil.
- **`compose.yml` / `docker-compose.yml`** – projekti Docker Compose konfiguratsioon.
- **Port** – number, mille kaudu teenus võrgus ühendusi vastu võtab, nt veebiserver `3000`, MySQL `3306`.
- **Port mapping** – host-arvuti pordi ühendamine containeri pordiga, et teenusele pääseks ligi väljastpoolt Dockeri võrku.
- **Docker network** – Compose'i loodud sisevõrk, kus teenused saavad omavahel suhelda.
- **Service name / hostname** – Compose'i sisevõrgus saab teise teenusega ühenduda tema teenusenime kaudu, nt `db:3306`.
- **Volume** – püsiv andmeruum; võimaldab andmebaasi või faile säilitada ka siis, kui container eemaldatakse ja uuesti luuakse.
- **Environment variable** – seadistusväärtus, mida rakendus saab käivitamisel lugeda, nt andmebaasi host, kasutajanimi või port.

---

## Olulised küsimused, millele vastasime

### Kuidas frontend, backend ja andmebaas üksteist leiavad?
- Containerite vahel kasutatakse Compose'i võrgus tavaliselt **service name'i**, nt backend → `db:3306`.
- Service name ei ole ise IP-aadress; Docker lahendab selle DNS-i abil õige containeri aadressiks.
- Kui ühendus tuleb **host-arvutist või brauserist**, kasutatakse tavaliselt `localhost` + hostile avatud porti.

### Miks porte avada?
Containeri siseport ei ole automaatselt host-arvutile nähtav.  
Näiteks:

```yaml
ports:
  - "3000:3000"
```

tähendab:

`hosti port 3000` → `containeri port 3000`

### Miks kasutada volume'it?
Ilma püsiva andmeruumita võivad containeri kustutamisel kaduda näiteks andmebaasi andmed.

### Millal on vaja environment variable'e?
Kui sama rakendus peab töötama eri keskkondades erineva konfiguratsiooniga, nt:

- DB host
- DB port
- kasutajanimi
- parool
- API URL

---

## Docker Compose'i põhikäsklused

Käsud käivitatakse terminalis kaustas, kus asub `compose.yml` või `docker-compose.yml`.

```bash
docker compose up
```

Käivitab teenused ja näitab logisid terminalis.  
Peatamiseks: **Ctrl+C**.

```bash
docker compose up -d
```

Käivitab teenused taustal (*detached mode*).

```bash
docker compose down
```

Peatab ja eemaldab Compose'i loodud containerid ning võrgu.

```bash
docker compose build
```

Ehitatakse projektile vajalikud image'id uuesti. Vajalik eelkõige siis, kui Dockerfile või image'i sisse paigaldatavad sõltuvused on muutunud.

```bash
docker compose up --build
```

Ehita vajadusel image'id uuesti ja käivita teenused.

---

## Näidisprojekti struktuur

```text
TA-24B-1/
├── frontend/
├── backend/
├── documentation/
└── compose.yml
```

Sellist ülesehitust nimetatakse sageli **monorepo'ks** – ühe repositooriumi sees on mitu sama süsteemi osa.

---

## Tunni põhiidee

Docker aitab hoida **projekti keskkonna projekti sees**.

Selle asemel, et arendaja installiks oma arvutisse käsitsi Node.js-i, MySQL-i, PHP või muud vajalikud versioonid, kirjeldatakse need projektis Docker image'ite ja Compose'i kaudu. Nii on projekti lihtsam käivitada, jagada ja hiljem puhastada.
