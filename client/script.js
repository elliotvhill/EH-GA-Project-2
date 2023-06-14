const apiUrl = `http://localhost:3001/api`
const baseUrl = `http://127.0.0.1:5500/client`
const venueList = document.querySelector('.venue-list')

const getVenues = async () => {
    // get data via axios
    let response = await axios.get(`${apiUrl}/venues`)
    // log the data to make sure it's correct
    // console.log(response)
    const venuesArr = response.data.venues
    let venuesHTML = ''
    venuesArr.forEach((venue) => {
        let venueName = venue.venue_name
        console.log(venueName)
        venuesHTML += `<li class="venues">${venueName}</li>`
        // render data on screen
    })
    venueList.innerHTML = venuesHTML

}



// const concertsBtn = document.querySelector('#concertsLink')

// VENUES
const venue1 = document.querySelector('#venue1')
const venue2 = document.querySelector('#venue2')
const venue3 = document.querySelector('#venue3')
const venue4 = document.querySelector('#venue4')

// CONCERTS
const firstConcert = document.querySelector('#concert1')
const secondConcert = document.querySelector('#concert2')
const thirdConcert = document.querySelector('#concert3')
const fourthConcert = document.querySelector('#concert4')
const fifthConcert = document.querySelector('#concert5')
const sixthConcert = document.querySelector('#concert6')

// FUNCTIONS
// concertsBtn.addEventListener('click', async () => {
//   let response = await axios.get(`${apiUrl}/concerts`)
//   let concert1 = response.data.collection.concerts[0]
//   firstConcert.innerHTML = `${concert1}`
//   console.log(concert1)
// })

// FOOTER
const currentYear = new Date().getFullYear()
const footerDate = () => {
  return currentYear
}
let copyright = document.querySelector('#year')
copyright.innerHTML = `<p>&copy; ${currentYear} Elliot Hill</p>`
