const dotenv = require('dotenv')
dotenv.config()
const MONGO_URL = process.env.MONGO_URL || 3001 // PROD
// const apiUrl = `http://localhost:3001/api` // DEV
const mainContainer = document.querySelector(".container")
const mainContent = document.querySelector(".main-content")
const concertsBtn = document.querySelector("#concerts")
const venuesBtn = document.querySelector("#venues")
const artistsBtn = document.querySelector("#artists")
const sadDadsHome = document.querySelector("#landing")
const heroImage = "/images/matt-berninger-sep-2018-2-3.png"
let addBtn = document.querySelector(".add")
document.addEventListener(
  "DOMContentLoaded",
  (event) => (mainContainer.style.visibility = "hidden")
)
showContent = () => (mainContainer.style.visibility = "visible")
let concertsArr = ""
venuesBtn.addEventListener("click", async () => {
  // let response = await axios.get(`${apiUrl}/venues`)  // DEV
  let response = await axios.get(`${MONGO_URL}/venues`) // PROD
  const venuesArr = response.data.venues
  let venuesList = ""
  let venuesHTML = ""
  venuesArr.forEach((venue) => {
    let venueName = venue.venue_name
    let venueLoc = venue.location
    venuesList += `<li class="venues">${venueName} — ${venueLoc}</li>`
    venuesHTML = `<ul class="venues">${venuesList}</ul>`
  })
  showContent()
  mainContent.innerHTML = venuesHTML
})
concertsBtn.addEventListener("click", async () => {
  // let response = await axios.get(`${apiUrl}/concerts`) // DEV
  let response = await axios.get(`${MONGO_URL}/concerts`) // PROD
  concertsArr = response.data.concerts
  let concertsList = ""
  let concertsHTML = ""
  concertsArr.forEach((concert) => {
    let concertDay = concert.concert_day
    let concertVenue = concert.venue_id
    concertsList += `<li class="concerts">${concertDay} — ${concertVenue}</li>`
    concertsHTML = `<ul class="concerts">${concertsList}</ul>`
  })
  showContent()
  mainContent.innerHTML = concertsHTML
  addBtn.innerHTML = `<button class="add"><a href="/client/add.html"> Add a concert </a>`
})
artistsBtn.addEventListener("click", async () => {
  // let response = await axios.get(`${apiUrl}/artists`) // DEV
  let response = await axios.get(`${MONGO_URL}/artists`) // PROD
  const artistsArr = response.data.artists
  let artistList = ""
  let artistsHTML = ""
  artistsArr.forEach((artist) => {
    let artistName = artist.artist
    artistList += `<li class="artists">${artistName}</li>`
    artistsHTML = `<ul class="artists">${artistList}</ul`
  })
  showContent()
  mainContent.innerHTML = artistsHTML
})

const currentYear = new Date().getFullYear()
const footerDate = () => {
  return currentYear
}
let copyright = document.querySelector("#year")
copyright.innerHTML = `<p>&copy; ${currentYear} Elliot Hill</p>`