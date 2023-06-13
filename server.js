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
// venues
app.get('/api/venues', controller.getVenues)
app.get('/api/venues/:id', controller.getVenueById)
app.get('/api/venues/:name', controller.getVenueByName)
app.post('/api/venues', controller.createVenue)
app.put('/api/venues/update/:id', controller.updateVenue)
app.delete('/api/venues/delete/:id', controller.deleteVenue)
// concerts
app.get('/api/concerts', controller.getConcerts)
app.get('/api/concerts/:id', controller.getConcertById)
app.post('/api/concerts/', controller.createConcert)
app.put('/api/concerts/update/:id', controller.updateConcert)
app.delete('/api/concerts/delete/:id', controller.deleteConcert)
//artists
app.get('/api/artists', controller.getArtists)
app.get('/api/artists/:id', controller.getArtistById)
app.post('/api/artists/', controller.createArtist)
app.put('/api/artists/update/:id', controller.updateArtist)
app.delete('/api/artists/delete/:id', controller.deleteArtist)