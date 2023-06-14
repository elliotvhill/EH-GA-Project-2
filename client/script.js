const apiUrl = `http://localhost:3001/api`
// const baseUrl = `http://127.0.0.1:5500/client`
const mainContainer = document.querySelector('.container')
const mainContent = document.querySelector('.main-content')
const concertsBtn = document.querySelector('#concerts')
const venuesBtn = document.querySelector('#venues')
const artistsBtn = document.querySelector('#artists')
document.addEventListener('DOMContentLoaded', (event) => mainContainer.style.visibility = 'hidden')
showContent = () => mainContainer.style.visibility = 'visible'

// menu buttons
venuesBtn.addEventListener('click', async () => {
    let response = await axios.get(`${apiUrl}/venues`)
    const venuesArr = response.data.venues
    let venuesList = ''
    let venuesHTML = ''
    venuesArr.forEach((venue) => {
        let venueName = venue.venue_name
        venuesList += `<li class="venues">${venueName}</li>`
        venuesHTML = `<ul class="venues">${venuesList}</ul>`
    })
    showContent()
    mainContent.innerHTML = venuesHTML
})

concertsBtn.addEventListener('click', async () => {
    let response = await axios.get(`${apiUrl}/concerts`)
    const concertsArr = response.data.concerts
    let concertsList = ''
    let concertsHTML = ''
    concertsArr.forEach((concert) => {
        let concertDay = concert.concert_day
        concertsList += `<li class="concerts">${concertDay}</li>`
        concertsHTML = `<ul class="concerts">${concertsList}</ul>`
    })
    showContent()
    mainContent.innerHTML = concertsHTML
})

artistsBtn.addEventListener('click', async () => {
    let response = await axios.get(`${apiUrl}/artists`)
    const artistsArr = response.data.artists
    let artistList = ''
    let artistsHTML = ''
    artistsArr.forEach((artist) => {
        let artistName = artist.artist
        artistList += `<li class="artists">${artistName}</li>`
        artistsHTML = `<ul class="artists">${artistList}</ul`
    })
    showContent()
    mainContent.innerHTML = artistsHTML
})















// FOOTER
const currentYear = new Date().getFullYear()
const footerDate = () => {
  return currentYear
}
let copyright = document.querySelector('#year')
copyright.innerHTML = `<p>&copy; ${currentYear} Elliot Hill</p>`
