const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Epood')
})

app.use(express.json());

const products =  [
  {id:1, name: "Toode 1", price: 10},
  {id:2, name: "Toode 2", price: 12},
  {id:3, name: "Toode 3", price: 7.5},
  {id:4, name: "Toode 4", price: 10.99},
  {id:5, name: "Toode 5", price: 29.45},
  {id:6, name: "Toode 6", price: 30},
  {id:7, name: "Toode 7", price: 5},
  {id:8, name: "Toode 8", price: 2.5},
  {id:9, name: "Toode 9", price: 10},
];
const orders = [];

app.get("/api/products", (req, res) => {
  res.send(products)
})

app.post("/api/products", (req, res) => {
  const product = {...req.body, id: Math.ceil(Math.random()*100000)}
  products.push(product)
  res.send(product)
})

// CRUD ülesanne
// DELETE /api/products/5
// PUT /api/products/5   {price: 24.44}

app.get("/api/orders", (req, res) => {
  res.send(orders)
})

app.post("/api/orders", (req, res) => {
  const order = {...req.body, id: Math.ceil(Math.random()*100000)}
  orders.push(order)
  res.send(order)
})

/**
 * This is public endpoint - fetch all cart products from database and create new order
 * Example POST
 * {
 *    "customer": {"name": "Timo"},
 *    "cart": [{"id": 7, "amount": 4},{"id": 1, "amount": 1},{"id": 4, "amount": 1}]
 * }
 */
app.post("/api/create-order", (req, res) => {
  let order = {
    id: Math.ceil(Math.random()*100000),
    customer: req.body.customer,
    items: [],
  }
  req.body.cart.forEach(orderProduct => {
    let product = products.find(p => p.id == orderProduct.id)
    // skip product that not exist in our database
    if (product) {
      order.items.push({
        amount: orderProduct.amount,
        product: product
      })
    }
  });

  orders.push(order);

  res.status(204).send()
})
  

app.listen(port, () => {
  console.log(`Epood listening on port ${port}`)
})