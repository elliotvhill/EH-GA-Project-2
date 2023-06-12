const db = require("../db");
const { Venue, Concert, Artist } = require("../models");
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
const venues = await Venue.find({});
const concerts = await Concert.find({});
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
  ];
    await Artist.deleteMany();
    await Artist.insertMany(artists);
    console.log(`Created artists`)
};

const run = async () => {
  await main();
  db.close();
};
run();