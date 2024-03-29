const express = require('express')
const app = express()
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const handlebarHelpers = require('./handlebars-helpers')
const methodOverride = require('method-override')
const homeRoutes = require('./routes/home')
const restaurantsRoutes = require('./routes/restaurants')
const searchRoutes = require('./routes/search')

const port = 3000

// Register ExpressHandlebars instance-level helpers
const hbs = exphbs.create({ helpers: {} })
// define handlebars using
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
// tell express that all templates ahead will be handlebars 
app.set('view engine', 'handlebars')

// set up mongoose connection to MongoDB
mongoose.connect('mongodb://127.0.0.1/restaurant', { useNewUrlParser: true })

// retrieve responded "connection" object after successful execution
const db = mongoose.connection

// connection error
db.on('error', () => {
  console.log('mongodb error!')
})

// connect successfully 
db.once('open', () => {
  console.log('mongodb connected!')
})

// include restaurant model
const Restaurant = require('./models/restaurant')

// express takes all request body and parse it into JS object
app.use(bodyParser.urlencoded({ extended: true }))

// use method-override
app.use(methodOverride('_method'))

// use built-in middleware static() to serve static files
app.use(express.static('public'))

// landing page
app.use('/', homeRoutes)

// Outsourced routes & filter only routes starting with /restaurants
app.use('/restaurants', restaurantsRoutes)

// Outsourced routes & filter only routes starting with /search
app.use('/search', searchRoutes)

// 404 error page
app.use((req, res) => {
  res.status(404).render('404')
})

app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})