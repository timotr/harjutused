Kirjuta numbri ära arvamise programm näiteks veebilehitseja (web browser) konsoolis.  
Las arvuti valib ühe numbri vahemikus 1-10 ja jätab selle meelde.  
Seejärel küsib kasutajalt ühe numbri kasutades käsklust `prompt`.

    prompt("Sisesta üks number 1-10-ni") 

Kontrolli kas kasutaja sisestatud number on sama mille arvuti valis.  
Kui arvud on samad kirjuta konsooli: "Yay! Arvasid õige numbri ära!"  
Kui arvud ei ole samad kirjuta konsooli: "Sorry, X ei ole õige number." kus X asemel on kasutaja sisestatud number. 

Hinde 4 saamiseks tee veel üks lisaülesanne.  
Hinde 5 saamiseks tee mõlemad lisaülesanded. 

Lisaülesanded: 

1. Kui sisestatud arv on 1 võrra suurem või väiksem kirjutaks konsooli "Ai, sa pakkusid väga lähedale." 
Näiteks arvuti valitud number on 8 ja kasutaja pakkus 7 või 9. 
2. Kasutaja saaks arvu pakkuda 3 korda, enne kui arvuti uue numbri valib. 

Abiks võivad olla järgmised materjalid ja märksõnad:
* Math.random https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
* Prompt https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt
* break while loop
