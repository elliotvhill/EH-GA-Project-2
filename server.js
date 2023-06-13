const express = require('express');
const cors = require('cors')
const PORT = process.env.PORT || 3001;
const db = require('./db')
const app = express();
const { Venue, Concert, Artist } = require('./models')

const controller = require('./controller')

app.use(cors())
app.use(express.json())
app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});

app.get('/api', (req, res) => res.send('This is the Sad Dads landing page. Welcome!'))
app.get('/api/venues', controller.getVenues)
app.get('/api/venues/:id', controller.getVenueById)
app.get('/api/concerts', controller.getConcerts)
app.get('/api/concerts/:id', controller.getConcertById)
app.get('/api/artists', controller.getArtists)
app.get('/api/artists/:id', controller.getArtistById)
// app.get('/api/concerts/:day', async (req, res) => {
//   const { day } = req.params
//   const concertDate = await Concert.findOne({ concert_day: `${day}` })
//   res.json(concertDate)
// })