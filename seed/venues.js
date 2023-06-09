const db = require('../db')
const { Venue } = require('../models')
db.on("error", console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const venues = [
    {
      venue_name: "Forest Hills Stadium",
      location: "Queens, New York",
      capacity: 13000,
      url: "https://foresthillsstadium.com/",
      description: null,
    },
    {
      venue_name: "Seaside Park",
      location: "Bridgeport, Connecticut",
      capacity: null,
      url: "https://www.bridgeportct.gov/content/341307/341415/342203.aspx",
      description: null,
    },
    {
      venue_name: "The Met Philadelphia",
      location: "Philadelphia, Pennsylvania",
      capacity: 3500,
      url: "https://themetphilly.com/",
      description: null,
    },
    {
      venue_name: "Westville Music Bowl",
      location: "New Haven, Connecticut",
      capacity: 5000,
      url: "https://www.westvillemusicbowl.com/",
      description: null,
    }
  ]
  await Venue.deleteMany()
  await Venue.insertMany(venues)
  console.log("Created venues")
}

const run = async () => {
  await main();
  db.close();
};
run();
