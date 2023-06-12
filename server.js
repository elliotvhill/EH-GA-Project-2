const express = require('express');
const cors = require('cors')
const PORT = process.env.PORT || 3001;
const db = require('./db')
const app = express();
const { Venue, Concert, Artist } = require('./models')

app.use(cors())
app.use(express.json())
app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});

app.get('/api', (req, res) => res.send('This is the Sad Dads landing page. Welcome!'))
app.get('/api/venues', async (req, res) => {
  const venues = await Venue.find({})
  res.json(venues)
})
app.get('/api/concerts', async (req, res) => {
  const concerts = await Concert.find({})
  res.json(concerts)
  console.log(concerts)
})
app.get('/api/concerts/:id', async (req, res) => {
  const { id } = req.params
  const concert = await Concert.findById(id)
  res.json(concert)
})
// app.get('/api/concerts/:day', async (req, res) => {
//   const { day } = req.params
//   const concertDate = await Concert.findOne({ concert_day: `${day}` })
//   res.json(concertDate)
// })
app.get('/api/artists', async (req, res) => {
  const artists = await Artist.find({})
  res.json(artists)
})