const express = require('express')
const app = express()
const cors = require('cors')
const AppRouter = require('./routes/AppRouter')
const PORT = process.env.PORT || 3001;
const db = require('./db')
const { Venue, Concert, Artist } = require('./models')

const controller = require('./controller')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`)
})

app.get('/', (req, res) => res.json({ message: 'This is the Sad Dads landing page. Welcome!' }))
app.use('/api', AppRouter)

// app.post('/api/venues', controller.createVenue)
// app.put('/api/venues/update/:id', controller.updateVenue)
// app.delete('/api/venues/delete/:id', controller.deleteVenue)
// app.post('/api/concerts/', controller.createConcert)
// app.put('/api/concerts/update/:id', controller.updateConcert)
// app.delete('/api/concerts/delete/:id', controller.deleteConcert)