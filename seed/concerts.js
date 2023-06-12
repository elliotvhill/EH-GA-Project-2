const db = require("../db");
const { Venue, Concert } = require("../models");
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const venues = await Venue.find({});
  const venue_names = [
    "Forest Hills Stadium",
    "Seaside Park",
    "The Met Philadelphia",
    "Westville Music Bowl",
  ];
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
  ];
  await Concert.deleteMany();
  await Concert.insertMany(concerts);
  console.log("Created concerts");
};

const run = async () => {
  await main();
  db.close();
};
run();