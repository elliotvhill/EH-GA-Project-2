const apiUrl = `http://localhost:3001/api`
const mainContainer = document.querySelector('.container')
const mainContent = document.querySelector('.main-content')
const concertsBtn = document.querySelector('#concerts')
const venuesBtn = document.querySelector('#venues')
const artistsBtn = document.querySelector('#artists')
const sadDadsHome = document.querySelector('#landing')
const heroImage = '/images/matt-berninger-sep-2018-2-3.png'
// document.addEventListener('DOMContentLoaded', (event) => mainContainer.style.visibility = 'hidden')
// showContent = () => mainContainer.style.visibility = 'visible'

let venueName;
let concertLoc;
let concertDay;
let concertLineup;
let newConcert;
document.getElementById('add').addEventListener('submit', function (event) {
    event.preventDefault()
    venueName = document.getElementById('venue_id').value
    concertLoc = document.getElementById('location').value
    concertDay = document.getElementById('concert_day').value
    concertLineup = document.getElementById('lineup').value
    newConcert = {
        "venue_id": venueName,
        "location": concertLoc,
        "concert_day": concertDay,
        "lineup": concertLineup,
    }
    console.log(newConcert)
})
