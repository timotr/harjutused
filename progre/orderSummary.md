Lugeda tellimuse objekti seest kõik tellimuse kaubad. Printida iga kauba nimi, kogus, hind ja summa konsooli eraldi reale. 
Kõige lõpus printida konsooli tellimuse kogusumma. 

Tellimuse näidis objekti leiab GitHubist https://timotr.github.io/tellimus.html  
Iga kord kui refreshid saad uue näidise. Programm peab suutma iga uue tellimusega õige hinna välja arvutada.

Tee funktsioon `orderSummary` mis võtab ühe parameetrina kaasa tellimuse objekti.

Abiks tulevad teadmised kuidas... 
* ... array seest andmeid lugeda.  Otsi `iterate array` 
* ... objekti seest key abil andmeid lugeda. Otsi `access object properties` 
* ... protsentidega arvutada ja hinnale käibemaks lisada. Otsi `add vat to price` 

Laadida lahendus GitHubi nimega `orderSummary.js`

Näiteks
```js
function orderSummary(order) {
  // ... sinu kood siia
}

// Arvutab hinna kui object on funktsiooni sulgude vahel
orderSummary({
  "id": 264817,
  "orderNumber": "E20210918011",
  "createdAt": "2021-09-18 12:07:58",
  "clientName": "Malle Kask",
  "deliveryType": "DHL kuller",
  "deliveryId": 272,
  "rows": [
    {
      "articleId": 29594,
      "name": "Brevil Latte 1600K",
      "productCode": "903035HP",
      "price": 5.12,
      "amount": 2,
      "vat": 0.22
    },
    {
      "articleId": 68525,
      "name": "Siemens Espresso 1000X",
      "productCode": "ST243306",
      "price": 5.72,
      "amount": 1,
      "vat": 0.09
    },
    {
      "articleId": 73313,
      "name": "Caffe Musetti Lungo 1500W",
      "productCode": 148132,
      "price": 9.67,
      "amount": 1,
      "vat": 0.22
    }
  ]
})
```
