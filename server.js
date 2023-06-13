const express = require('express');
const cors = require('cors')
const PORT = process.env.PORT || 3001;
const db = require('./db')
const app = express();
const { Venue, Concert, Artist } = require('./models')

const venueController = require('./controllers/venueController');
const concertController = require('./controllers/concertController');
const artistController = require('./controllers/artistController');

app.use(cors())
app.use(express.json())
app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});

app.get('/api', (req, res) => res.send('This is the Sad Dads landing page. Welcome!'))
app.get('/api/venues', venueController.getVenues)
app.get('/api/venues/:id', venueController.getVenueById)
app.get('/api/concerts', concertController.getConcerts)
app.get('/api/concerts/:id', concertController.getConcertById)
app.get('/api/artists', artistController.getArtists)
app.get('/api/artists/:id', artistController.getArtistById)
// app.get('/api/concerts/:day', async (req, res) => {
//   const { day } = req.params
//   const concertDate = await Concert.findOne({ concert_day: `${day}` })
//   res.json(concertDate)
// })