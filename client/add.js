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
    fetch(`${apiUrl}/concerts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newConcert)
    })
        .then(response => response.json())
        .then(data => {
        console.log('Data sent to server:', data)
        })
        .catch(error => {
        console.error('Error sending data to server:', error)
    })
})