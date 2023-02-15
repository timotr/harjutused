const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Raamatupidamine')
})

app.use(express.json());

const invoices = [];

app.get("/api/invoice", (req, res) => {
  res.send(invoices)
})

app.post("/api/invoice", (req, res) => {
  const invoice = {...req.body, id: Math.ceil(Math.random()*100000)}
  invoices.push(invoice)
  res.send(invoice)
})
  

app.listen(port, () => {
  console.log(`Raamatupidamine listening on port ${port}`)
})