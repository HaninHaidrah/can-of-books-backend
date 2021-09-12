"use strict";

const bookModel = require("../models/book.model");

const bookSeed = () => {
  const firstBook = new bookModel({
    title: "Request Kevin White to Speak",
    description:
      "AthleteSpeakers has built very close direct relationships over the years with top athletes, agents, publicists and managers. We specialize in assisting small, medium, and large companies as well as event planners with booking athletes like Kevin White for speaking engagements and appearances at trade shows, golf outings, casinos, conferences, conventions, and corporate events",
    status: "available",
    email: "haneen.hadey@gmail.com",
  });
  firstBook.save();

  const secondBook = new bookModel({
    title: "The Lord of the Rings",
    description:
      "The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil. Its many worlds and creatures were drawn from Tolkiens extensive knowledge of philology and folklore.",
    status: "unavailable",
    email: "oqla123@gmail.com",
  });

  secondBook.save();

  const thirdBook = new bookModel({
    title: "The Holy Bible.",
    description:
      "This ebook provides the essentials to understanding the Bible! Power packed biblical information to boost your confidence in scripture. Bible study. Gods Word. Scripture.",
    status: "available",
    email: "tamara122@gmail.com",
  });
  thirdBook.save();
};


module.exports=bookSeed;