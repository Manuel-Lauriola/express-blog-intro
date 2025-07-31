//importo il modulo express
const express = require(`express`)
//dichiaro il risultato della funzione nella variabile app
const app = express()
//definisco la porta
const port = 3000
//definisco la rotta base
app.get(`/`, (req, res) => {
  res.send(`Server del mio blog`)
})