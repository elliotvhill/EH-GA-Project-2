const db = require("../db")
const { Venue, Concert, Artist } = require("../models")
db.on("error", console.error.bind(console, "MongoDB connection error:"))

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
    },
  ]
  await Venue.deleteMany()
  await Venue.insertMany(venues)
  console.log("Created venues")
}
const venue_names = [
  "Forest Hills Stadium",
  "Seaside Park",
  "The Met Philadelphia",
  "Westville Music Bowl",
]
const concerts = [
  {
    concert_day: "Oct 6, 2017",
    lineup: ["Daughter", "The National"],
    attendees: undefined,
    guests: ["Luke Hill"],
    ticket_price: 150,
    venue_id: venue_names[0],
    set_list: [
      `Nobody Else Will Be There`,
      `The System Only Dreams in Total Darkness`,
      `Walk It Back`,
      `Guilty Party`,
      `Don't Swallow the Cap`,
      `Afraid of Everyone`,
      `Dark Side of the Gym`,
      `I'll Still Destroy You`,
      `Turtleneck`,
      `I Need My Girl`,
      `Secret Meeting`,
      `Conversation 16`,
      `Slow Show`,
      `Apartment Story`,
      `Carin at the Liquor Store`,
      `Bloodbuzz Ohio`,
      `Day I Die`,
      `Fake Empire`,
      `About Today`,
      [
        `Pink Rabbits`,
        `The KKK Took My Baby Away`,
        `Mr. November`,
        `Terrible Love`,
        `Vanderlyle Crybaby Geeks`,
      ],
    ],
    album_tour: `Sleep Well Beast`,
  },
  {
    concert_day: "Sep 29, 2018",
    lineup: ["The National"],
    attendees: undefined,
    guests: ["Luke Hill", "Janelle Hill"],
    ticket_price: 150,
    venue_id: venue_names[0],
    set_list: [
      `Most of the Time`,
      `Nobody Else Will Be There`,
      `Don't Swallow the Cap`,
      `Guilty Party`,
      `I Should Live in Salt`,
      `Afraid of Everyone`,
      `Born to Beg`,
      `Empire Line`,
      `I Need My Girl`,
      `Sorrow`,
      `Wasp Nest`,
      `Secret Meeting`,
      `Conversation 16`,
      `Apartment Story`,
      `Carin at the Liquor Store`,
      `England`,
      `Day I Die`,
      `About Today`,
      [`Rylan`, `Bloodbuzz Ohio`, `Mr. November`, `Vanderlyle Crybaby Geeks`],
    ],
    album_tour: `The National Presents: There's No Leaving New York`,
    //   tour details and setlists: https://www.concertarchives.org/concerts/the-national-presents-there-s-no-leaving-new-york
  },
  {
    concert_day: "Sep 30, 2018",
    lineup: ["The National"],
    attendees: undefined,
    guests: ["Luke Hill"],
    ticket_price: 150,
    venue_id: venue_names[0],
    set_list: [
      `Light Years`,
      `The System Only Dreams in Total Darkness`,
      `Walk It Back`,
      `Sea of Love`,
      `Mistaken for Strangers`,
      `Squalor Victoria`,
      `Dark Side of the Gym`,
      `This Is the Last Time`,
      `I'll Still Destroy You`,
      `Turtleneck`,
      `Green Gloves`,
      `All the Wine`,
      `The Geese of Beverly Road`,
      `Slow Show`,
      `Pink Rabbits`,
      `Graceless`,
      `So Far Around the Bend`,
      `Fake Empire`,
      [
        `Maybe Not`,
        `Brainy`,
        `Terrible Love`,
        `About Today`,
        `Vanderlyle Crybaby Geeks`,
      ],
    ],
    album_tour: `The National Presents: There's No Leaving New York`,
    //   tour details and setlists: https://www.concertarchives.org/concerts/the-national-presents-there-s-no-leaving-new-york
  },
  {
    concert_day: "Sep 25, 2022",
    lineup: ["The National"],
    attendees: undefined,
    guests: ["Grant Hale"],
    ticket_price: 349,
    venue_id: venue_names[1],
    set_list: [
      `Don't Swallow the Cap`,
      `Bloodbuzz Ohio`,
      `The System Only Dreams in Total Darkness`,
      `I Need My Girl`,
      `Slow Show`,
      `Day I Die`,
      `Eucalyptus`,
      `Light Years`,
      `Graceless`,
      `Fake Empire`,
      `Terrible Love`,
    ],
    album_tour: `Sound on Sound Music Festival`,
  },
  {
    concert_day: "Aug 2, 2023",
    lineup: ["The National", "The Beths"],
    attendees: undefined,
    guests: ["Grant Hale", "Luke Hill", "Isabella Ness"],
    ticket_price: 80,
    venue_id: venue_names[2],
    set_list: [`TBA`],
    album_tour: `First Two Pages of Frankenstein`,
  },
  {
    concert_day: "Aug 3, 2023",
    lineup: ["The National", "The Beths"],
    attendees: undefined,
    guests: ["Grant Hale"],
    ticket_price: 60,
    venue_id: venue_names[3],
    set_list: [`TBA`],
    album_tour: `First Two Pages of Frankenstein`,
  },
  { timestamps: true },
]
await Concert.deleteMany()
await Concert.insertMany(concerts)
console.log("Created concerts")

const artists = [
  {
    artist: "The National",
    isHeadliner: true,
    image: `https://www.flickr.com/photos/raph_ph/52327368939/`,
  },
  {
    artist: "Daughter",
    isHeadliner: false,
    image: `https://www.icmp.ac.uk/sites/default/files/styles/news_details/public/daughter-band_0.jpg?itok=AE3gFS0U`,
  },
  {
    artist: "The Beths",
    isHeadliner: false,
    image: `https://www.flickr.com/photos/davidjlee/52697057674/`,
  },
  {
    artist: "Patti Smith",
    isHeadliner: false,
    image: `https://upload.wikimedia.org/wikipedia/commons/5/55/Patti_Smith%2C_1978.jpg`,
  },
]
await Artist.deleteMany()
await Artist.insertMany(artists)
console.log(`Created artists`)

const run = async () => {
  await main()
  db.close()
}
run()