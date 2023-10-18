# Letter value sum
Source (in English): https://www.reddit.com/r/dailyprogrammer/comments/onfehl/20210719_challenge_399_easy_letter_value_sum/?rdt=50065

Määrake igale väiketähele väärtus, `a`=1 kuni `z`=26 (inglise tähestiku järgi). Kirjutage funktsioon mis leiab argumendina kaasa antud stringis olevate tähtede väärtuste summa.

Mõned näited:
```
lettersum("") => 0
lettersum("a") => 1
lettersum("z") => 26
lettersum("cab") => 6
lettersum("excellent") => 100
lettersum("microspectrophotometries") => 317
```

### Boonusülesanded
Kui kõike ei viitsi siis vali endale 1-2 ülesannet mis jõukohased tunduvad.  
Kasutage valikuliste boonusülesannete jaoks sõnaloendit [enable1](https://raw.githubusercontent.com/timotr/harjutused/main/progre/enable1.txt).

1. `microspectrophotometries` on ainus sõna, mille tähtede summa on 317. Leia ainus sõna, mille tähtede summa on 319.

2. Kui mitmel sõnal on paaritu tähtede summa?

3. Seal loendis on 1921 sõna, mille tähtede summa on 100 - see on teine kõige levinud tähte summa. Mis tähtede summa on kõige levinum ja mitu sõna selles on?

4. `zyzzyva` ja `biodegradabilities` tähtede summa on sama (151) ja nende pikkused erinevad 11 tähe võrra. Leia teine sama tähtede summaga sõnapaar, mille pikkused erinevad 11 tähe võrra.

5. `cytotoxicity` ja `unreservedness` sõnadel on sama tähtede summa (188) ja neil pole ühiseid tähti. Leidke sõnapaar, millel pole ühiseid tähti ja millel on sama tähtede summa, mis on suurem kui 188. (Selliseid paare on kaks ja üks sõna esineb mõlemis paaris.)
