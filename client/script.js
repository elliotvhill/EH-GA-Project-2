const apiUrl = `http://localhost:3001/api`
const baseUrl = `http://127.0.0.1:5500/client`
const venueMenu = document.querySelector('#venues')
const venueList = document.querySelector('.venues')

const getVenues = async () => {
    let response = await axios.get(`${apiUrl}/venues`)
    const venuesArr = response.data.venues
    let venuesHTML = ''
    venuesArr.forEach((venue) => {
        let venueName = venue.venue_name
        console.log(venueName)
        venuesHTML += `<li class="venues">${venueName}</li>`
    })
    venueList.innerHTML = venuesHTML
}

venueMenu.addEventListener('click', async (event) => {
    event.preventDefault()
    console.log('venue menu clicked')
    getVenues()
})

// const concertsBtn = document.querySelector('#concertsLink')

// VENUES


// CONCERTS
// const firstConcert = document.querySelector('#concert1')
// const secondConcert = document.querySelector('#concert2')
// const thirdConcert = document.querySelector('#concert3')
// const fourthConcert = document.querySelector('#concert4')
// const fifthConcert = document.querySelector('#concert5')
// const sixthConcert = document.querySelector('#concert6')

// FUNCTIONS
// concertsBtn.addEventListener('click', async () => {
//   let response = await axios.get(`${apiUrl}/concerts`)
//   let concert1 = response.data.collection.concerts[0]
//   firstConcert.innerHTML = `${concert1}`
//   console.log(concert1)
// })

// FOOTER
// const currentYear = new Date().getFullYear()
// const footerDate = () => {
//   return currentYear
// }
// let copyright = document.querySelector('#year')
// copyright.innerHTML = `<p>&copy; ${currentYear} Elliot Hill</p>`
