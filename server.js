const express = require('express')
const app = express()
const cors = require('cors')
const AppRouter = require('./routes/AppRouter')
const PORT = process.env.PORT || 3001;
const db = require('./db')
const { Venue, Concert, Artist } = require('./models')
const bodyParser = require('body-parser')

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))
app.listen(3001, () => {
  // console.log(`Express server running on port ${PORT}`)
})

app.get('/', (req, res) => res.json({ message: 'This is the Sad Dads landing page. Welcome!' }))
app.use('/api', AppRouter)