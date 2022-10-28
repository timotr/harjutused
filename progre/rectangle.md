# Ristkülikud

Kirjuta funktsioon `rect(w, h)` mis prindib konsooli ristküliku vastavalt ette antud mõõtmetele.
Harjutuse teeb raskemaks, et browseri konsoolid panevad korduvad read ühe alla kokku ning korduste arvu numbrina rea ette.
Selle vältimiseks peame kõigepealt kõik read stringi sisse salvestama ning alles kõige lõpus selle stringi konsooli printima.
Uue rea tegemiseks saab kasutada _new line_ sümbolit `"\n"`. Tagurpidi kaldkriips (backslash) on _escape_ sümbol millele järgnev tähemärk võib omada mingit eritähendust.
Tagurpidi kaldkriipsu enda kirjutamiseks tekstina tuleb panna kaks tagurpidi kaldkriipsu `"\\"`.

Näiteks `rect(7, 4)` prindib järgneva ristküliku:
```
*******
*******
*******
*******
```

Kirjuta funktsioon mis prindib seest tühja ristküliku.  
Näiteks `hollowRect(7,4)`
```
*******
*     *
*     *
*******
```

Ja nüüd veidi raskem ülesanne, kirjuta funktsioon mis teeb seest tühja ristküliku koos diagonaalidega.  
`diagonalRect(9,9)`
```
*********
**     **
* *   * *
*  * *  *
*   *   *
*  * *  *
* *   * *
**     **
*********
```

Paariarvuliste ruutude ja teiste suuruste korral võib tulla paratamatult naljaka kujuga diagonaalid.  
Õiget lahendust ei ole, tehke nii nagu teil parasjagu endal õnnestub.  
`diagonalRect(7,5)` võib välja näha näiteks nii:  
```
*******
**   **
* * * *
**   **
*******
```
või
```
*******
* * * *
*  *  *
* * * *
*******
```
