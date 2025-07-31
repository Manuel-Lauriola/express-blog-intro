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
//metto il server in ascolto sulla porta definita
app.listen(port, () => {
  console.log(`il server è in ascolto alla porta ${port}`)
})
//definisco la rotta per i miei post
app.get (`/posts`, (req, res) => {
  //definisco l'array dei post
  const posts = [
    {
      title:"Il grande Lebowski",
      content:"Il Drugo vive di bowling e relax, ma un tappeto rubato lo trascina in un esilarante complotto con nichilisti. Un cult unico.",
      img:"./img/lebowski.jpg",
      tags:["movies", "comic", "dude", "nichilism"],
    },
    {
      title:"One piece",
      content:"Luffy e la sua ciurma di pirati salpano nel Grand Line in cerca di tesori e avventura. Un viaggio epico verso la libertà.",
      img:"./img/one-piece.jpg",
      tags:["pirates", "dream", "anime", "adventure"],
    },
    {
      title:"Juventus",
      content:"La Juventus, storica squadra bianconera di Torino, vanta innumerevoli scudetti e una tifoseria appassionata. Sempre in lotta per la vittoria.",
      img:"./img/juventus.jpg",
      tags:["football", "teamwork", "black and white", "del piero"],
    },
    {
      title:"Hearthstone",
      content:"Un gioco di carte digitale dove eroi si sfidano con magie e servitori. Strategia e un pizzico di fortuna per la vittoria.",
      img:"./img/hearthstone.jpg",
      tags:["card game", "rng", "praise Yogg", "deck building"],
    },
    {
      title:"Scrubs",
      content:"JD e Turk ci portano nel Sacred Heart: medici strampalati, amicizia, amore e tante risate. Una sitcom ospedaliera iconica.",
      img:"./img/scrubs.jpg",
      tags:["tv series", "doctors", "comic", "dream"],
    },
  ]
})