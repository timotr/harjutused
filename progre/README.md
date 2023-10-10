
# Kuidas harjutusi kasutada

Olen siia kogunud mõningaid harjutusi mida tasuks osata enne teha kui hakata lahendama ülesandeid näiteks Codewars lehel.

Nende harjutuste lahendamiseks ei pruugi olla mõistlik küsida AI tööriistadelt koodist näiteid. ChatGPT ja GitHub Copilot on kindlasti head abivahendid ning ma soovitan neid reaalses töös ja ka õppimiseks kasutada aga AI-le suunatud küsimus peab olema püstitatud õigesti.

## Eeldused ja kellele sobib

Sobib päris algajatele kes on tutvunud põhiliste programmeerimise elementidega.
Tead juba mis on variable, function, array ja while/for tsükkel aga pole veel neid eriti kasutada saanud.

Osades harjutustes ette antud struktuurid on tehtud küll JavaScripti jaoks aga saab ka teistes keeltes lahendada.

## Mis järjekorras harjutusi teha?

Mõned tööd on mul tunnis arvestuslikud ja tuleb esitada GitHubis.
Esimese arvestusliku töö juures (checkTemp) on selle kohta juhend.

Keerukuse järjekorras, lihtsamad enne:  
- [easy](https://github.com/timotr/harjutused/blob/main/progre/easy.md) on kõige kergemad harjutused, lähevad failis sees järjest raskemaks.
- [checkTemp](https://github.com/timotr/harjutused/blob/main/progre/checkTemp.md) (arvestuslik)
- [guessTheNumber](https://github.com/timotr/harjutused/blob/main/progre/guessTheNumber.md)
- [arrays](https://github.com/timotr/harjutused/blob/main/progre/arrays.md)
- [countCode](https://github.com/timotr/harjutused/blob/main/progre/countCode.md) (arvestuslik)
- [perfectlyBalanced](https://github.com/timotr/harjutused/blob/main/progre/perfectlyBalanced.md)
- [letterValueSum](https://www.reddit.com/r/dailyprogrammer/comments/onfehl/20210719_challenge_399_easy_letter_value_sum/)
- [orderSummary](https://github.com/timotr/harjutused/blob/main/progre/orderSummary.md) (arvestuslik)
- [morseCode](https://www.reddit.com/r/dailyprogrammer/comments/cmd1hb/20190805_challenge_380_easy_smooshed_morse_code_1/)
- [sameNecklace](https://www.reddit.com/r/dailyprogrammer/comments/ffxabb/20200309_challenge_383_easy_necklace_matching/)
- [rectangle](https://github.com/timotr/harjutused/blob/main/progre/rectangle.md)
- [pyramid](https://github.com/timotr/harjutused/blob/main/progre/pyramid.md)

## Kuidas edasi?

Nüüd peaks olema piisavalt oskusi, et edasi liikuda. Soovitan veel lihtsate algoritmidega harjutada aga tasuks hakata mõtlema, et kuidas me praeguseid teadmiseid kombineerime teiste tehnoloogiatega.

### Koodi organiseerimine
Näiteks tahate hakata õppima kuidas teised arendajad koodi organiseerivad. Üks tehnika koodi organiseerida on **objekt orienteeritud lähenemine**. Koodi kirjutades tekivad pidevalt ühed samad probleemid mille lahendused on arendajad kokku kogunud **teekidesse (ingl k library)**. **Framework** nime all tuntakse süsteeme kus on kombineeritud teegid ja koodi organiseerimise tehnikad. Kõiki neid hakkavad õpetajad tutvustama järgmistes programmeerimise ainetes. Igal õpetajal on võimalus tutvustada teile enda lemmikuid frameworke aga eks aja jooksul leiate ka enda lemmiku.

### Sidumine teiste tehnoloogiatega
Kui oled juba natuke kokku puutunud **HTML'i ja CSS'iga**, siis siin saab mängu tuua programmeerimise. Kui on vaja teha nii, et lehe peal saaks kiirelt infot vahetada, tõlkida või korrata ühte HTMLi struktuuri tükki 20-30 korda siis tuleb kasuks selline tehnika nagu **templating**. Sellega kombineerime HTMLi ja programmeermiskeele.

Kus ja kuidas rakendused oma andmeid salvestavad. E-poes võib olla kümneid tuhandeid tooteid koos piltidega aga kus seda kõike infot hoida ja lihtsa otsinguga üles leida. **Tasub uurida kuidas faile kõvaketta peale kirjutada ja sealt lugeda**. Andmestruktuuride (array, object) salvestamiseks püsimällu kasutavad arendajad erineva võimekusega **andmebaase** - need on programmid mis teevad salvestamise, varundamise ja koormustaluvuse probleemid arendaja jaoks lihtsamaks. Otsi näiteks `SQL databases` või `Relational databases`.

**Kuidas arvutid Internetis omavahel suhtlevad.** Täna säästame nii palju aega sellega, et leiame endale vajalikud asjad veebist mitte ei sõida mööda ilma ringi. Esimene samm oleks uurida näiteks **HTTP protokolli** kohta.

Et paremini aru saada kuidas arvutid töötavad soovitan YouTube'ist vaadata playlisti [Crash Course - Computer Science](https://www.youtube.com/watch?v=tpIctyqH29Q&list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo)

## Veel harjutusi

CodeWars. Pakun, et seal on miljoneid harjutusi ja saad lahendada peaaegu igas programeermiskeeles.  
Harjutused on pandud keerukuse järgi järkudesse, edasi arenedes saad järjest raskemaid harjutusi.  
https://www.codewars.com/r/nsmOeA (referal link)

Mõned harjutused leiab ka Redditist kui CodeWarsi automaattestidega lähenemine ei meeldi.  
https://www.reddit.com/r/dailyprogrammer/

Võimalus teiste programeerijatega omavahel võistelda lahendades lühikesi ülesandeid.  
https://www.codingame.com/multiplayer/clashofcode

Algajatele iseseisvaks harjutamiseks mõeldud tasuta interaktiivsed kursused:  
Eesti keeles: https://www.ko-it.ee/  
Inglise keeles: https://www.codecademy.com/learn/introduction-to-javascript
