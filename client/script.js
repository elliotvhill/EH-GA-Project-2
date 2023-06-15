const apiUrl = `http://localhost:3001/api`
const mainContainer = document.querySelector('.container')
const mainContent = document.querySelector('.main-content')
const concertsBtn = document.querySelector('#concerts')
const venuesBtn = document.querySelector('#venues')
const artistsBtn = document.querySelector('#artists')
const sadDadsHome = document.querySelector('#landing')
const heroImage = '/images/matt-berninger-sep-2018-2-3.png'
let addBtn = document.querySelector('.add')
document.addEventListener('DOMContentLoaded', (event) => mainContainer.style.visibility = 'hidden')
showContent = () => mainContainer.style.visibility = 'visible'

// create concerts array
let concertsArr = ''
// /* when oct 6 2017 link is clicked */.addEventListener('click', async () => {
//     let response = await axios.get(`${apiUrl}/concerts`)
//     concertsInfo = response.data.concerts
//     console.log(concertsInfo)
// })

// create venues array
// create artists array

// show landing page image
sadDadsHome.addEventListener('click', async () => {
    showContent()
    mainContent.innerHTML = `<img
    src="${heroImage}" class="hero-image" alt="A photo of Matt Berninger singing live. He is leaning into the microphone and has his right hand extended over his head." />`
})

// menu buttons navigation
venuesBtn.addEventListener('click', async () => {
    let response = await axios.get(`${apiUrl}/venues`)
    const venuesArr = response.data.venues
    let venuesList = ''
    let venuesHTML = ''
    venuesArr.forEach((venue) => {
        let venueName = venue.venue_name
        let venueLoc = venue.location
        venuesList += `<li class="venues">${venueName} — ${venueLoc}</li>`
        venuesHTML = `<ul class="venues">${venuesList}</ul>`
    })
    showContent()
    mainContent.innerHTML = venuesHTML
    // make each venue name a link to view info
      // function / DOM element to display venue info, photo, etc.
      
    })

concertsBtn.addEventListener('click', async () => {
    let response = await axios.get(`${apiUrl}/concerts`)
    concertsArr = response.data.concerts
    let concertsList = ''
    let concertsHTML = ''
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
// make each concert date a link to view details, setlist, etc.
    // function / DOM element to display setlists
    // oct 6 2017 link -> concertsArr[0]
        // show date
            // concertDay
        // name of album/tour
        // lineup
            // let lineup = response.data.concerts.
        // headliner setlist
            // IF concertDay === 'oct 6, 2017'
            // THEN
            // let setList = response.data.concerts.set_list
        // encore setlist
            // let encoreSet = response.data.concerts.set_list[1]

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
// make each artist name a link to view info
    // function / DOM element to display artist info

// add a concert via form
    // let venueName;
    // let concertLoc;
    // let concertDay;
    // let concertLineup;
    // let newConcert;
    // addBtn.addEventListener('submit', function (event) {
    //     event.preventDefault()
    //     venueName = document.getElementById('venue_id').value
    //     concertLoc = document.getElementById('location').value
    //     concertDay = document.getElementById('concert_day').value
    //     concertLineup = document.getElementById('lineup').value
    //     newConcert = {
    //         "venue_id": venueName,
    //         "location": concertLoc,
    //         "concert_day": concertDay,
    //         "lineup": concertLineup,
    //     }
    //     console.log(newConcert)
    //     fetch(`${apiUrl}/concerts`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(newConcert)
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //         console.log('Data sent to server:', data)
    //         })
    //         .catch(error => {
    //         console.error('Error sending data to server:', error)
    //     })
    // })




// FOOTER
const currentYear = new Date().getFullYear()
const footerDate = () => {
  return currentYear
}
let copyright = document.querySelector('#year')
copyright.innerHTML = `<p>&copy; ${currentYear} Elliot Hill</p>`
