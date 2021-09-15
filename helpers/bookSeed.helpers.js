"use strict";

const bookModel = require("../models/book.model");

const bookSeed = () => {
  const firstBook = new bookModel({
    title: "Request Kevin White to Speak",
    description:
      "AthleteSpeakers has built very close direct relationships over the years with top athletes, agents, publicists and managers. We specialize in assisting small, medium, and large companies as well as event planners with booking athletes like Kevin White for speaking engagements and appearances at trade shows, golf outings, casinos, conferences, conventions, and corporate events",
    status: "available",
    email: "haneenhadey@gmail.com",
    img:"https://api.time.com/wp-content/uploads/2020/03/books-to-read-quarantine-coronavirus-feature-image.jpg"
  });
  firstBook.save();

  const secondBook = new bookModel({
    title: "The Lord of the Rings",
    description:
      "The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil. Its many worlds and creatures were drawn from Tolkiens extensive knowledge of philology and folklore.",
    status: "unavailable",
    email: "oqla123@gmail.com",
    img:"https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2020/03/1024/512/Lord-of-the-rings-books.jpg?ve=1&tl=1"
  });

  secondBook.save();

  const thirdBook = new bookModel({
    title: "The Holy Bible.",
    description:
      "This ebook provides the essentials to understanding the Bible! Power packed biblical information to boost your confidence in scripture. Bible study. Gods Word. Scripture.",
    status: "available",
    email: "tamara122@gmail.com",
    img:"https://st3.depositphotos.com/4431055/16857/i/1600/depositphotos_168571282-stock-photo-holy-bible-book.jpg"
  });
  thirdBook.save();
};


module.exports=bookSeed;