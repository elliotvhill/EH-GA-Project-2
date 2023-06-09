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
      description: `Forest Hills Stadium is a historic outdoor music venue that has welcomed fans to the picturesque New York City neighborhood of Forest Hills, Queens for nearly 100 years. Designed to optimize acoustics and with no obstructed views, the 13,000 capacity stadium is the only outdoor venue of its kind and size in the city.`,
      image: undefined,
    },
    {
      venue_name: "Seaside Park",
      location: "Bridgeport, Connecticut",
      capacity: undefined,
      url: "https://www.bridgeportct.gov/content/341307/341415/342203.aspx",
      description: `With its 325 acres of lush lawns, shady glades and sports fields rolling toward Long Island Sound, this extensive municipal park offers many amenities including a bathing beach, bath house, ball fields, picnic areas and hiking trails. Visitors are delighted by the beaches, surf and sunshine along three miles of sparkling coastline. The park was laid out just after the Civil War by Calvert Vaux and Frederick Law Olmsted, whose other efforts include Manhattan's Central Park and Prospect Park in Brooklyn.`,
      image: undefined,
    },
    {
      venue_name: "The Met Philadelphia",
      location: "Philadelphia, Pennsylvania",
      capacity: 3500,
      url: "https://themetphilly.com/",
      description: `Located on North Broad Street, The Met Philadelphia, the former Philadelphia Metropolitan Opera House, is now open. Originally built in 1908 by opera impresario Oscar Hammerstein, The Met Philadelphia has undergone a $56 million restoration in partnership with Live Nation, Eric Blumenfeld and Holy Ghost Headquarters to transform the historic theater into the crown jewel of North Broad Street's renaissance -- and you can be part of the action.`,
      image: undefined,
    },
    {
      venue_name: "Westville Music Bowl",
      location: "New Haven, Connecticut",
      capacity: 9700,
      url: "https://www.westvillemusicbowl.com/",
      description: `Westville Music Bowl is a 3,000-9,700 capacity outdoor music venue offering a truly unique concert experience in the incredibly vibrant and cultural city of New Haven. See your favorite bands and artists under the stars, surrounded by a picturesque setting of trees and greenery. The venue's natural acoustics, couples with its state-of-the-art sound system, ensure that every performance is crystal clear and immersive.`,
      image: undefined,
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
