const express = require("express");
const PORT = process.env.PORT || 3001;
const db = require('./db')
const app = express();
const { Venue, Concert } = require('./models')

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
})