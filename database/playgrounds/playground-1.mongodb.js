// Select the database to use.
use("crud");

// Insert a few documents into the books collection.
db.getCollection("books").insertMany([
  {
    title: "The Gulag Archipelago",
    author: "Aleksandr Solzhenitsyn",
    publishYear: 1973,
    pages: 640,
    genre: "Political History / Memoir",
    linkToBuy:
      "https://www.penguinrandomhouse.com/books/171732/the-gulag-archipelago-by-aleksandr-i-solzhenitsyn/",
    isBanned: true,
  },
  {
    title: "Darkness at Noon",
    author: "Arthur Koestler",
    publishYear: 1940,
    pages: 288,
    genre: "Political Fiction",
    linkToBuy:
      "https://www.harpercollins.com/products/darkness-at-noon-arthur-koestler",
    isBanned: true,
  },
  {
    title: "The Captive Mind",
    author: "Czesław Miłosz",
    publishYear: 1953,
    pages: 272,
    genre: "Political Philosophy",
    linkToBuy:
      "https://www.penguinrandomhouse.com/books/23424/the-captive-mind-by-czeslaw-milosz/",
    isBanned: false,
  },
  {
    title: "Secondhand Time",
    author: "Svetlana Alexievich",
    publishYear: 2013,
    pages: 496,
    genre: "Oral History / Politics",
    linkToBuy:
      "https://www.penguinrandomhouse.com/books/235961/secondhand-time-by-svetlana-alexievich/",
    isBanned: false,
  },
  {
    title: "We",
    author: "Yevgeny Zamyatin",
    publishYear: 1924,
    pages: 240,
    genre: "Political Dystopian Fiction",
    linkToBuy: "https://www.harpercollins.com/products/we-yevgeny-zamyatin",
    isBanned: true,
  },
]);

// Insert a few documents into the moovies collection.
db.getCollection("movies").insertMany([
  {
    title: "Burnt by the Sun",
    director: "Nikita Mikhalkov",
    publishYear: 1994,
    runtimeMinutes: 135,
    genre: "Political Drama",
    linkToBuy: "https://www.amazon.com/Burnt-Sun-Oleg-Menshikov/dp/B00005JPS8",
    isBanned: false,
  },
  {
    title: "Man of Marble",
    director: "Andrzej Wajda",
    publishYear: 1977,
    runtimeMinutes: 165,
    genre: "Political Cinema",
    linkToBuy: "https://store.criterion.com/products/man-of-marble",
    isBanned: true,
  },
  {
    title: "The Confession",
    director: "Costa-Gavras",
    publishYear: 1970,
    runtimeMinutes: 139,
    genre: "Political Thriller",
    linkToBuy: "https://www.amazon.com/Confession-Yves-Montand/dp/B0009X770A",
    isBanned: true,
  },
  {
    title: "Repentance",
    director: "Tengiz Abuladze",
    publishYear: 1984,
    runtimeMinutes: 153,
    genre: "Political Allegory",
    linkToBuy:
      "https://www.amazon.com/Repentance-Avtandil-Makharadze/dp/B00004W1S1",
    isBanned: true,
  },
  {
    title: "Katyn",
    director: "Andrzej Wajda",
    publishYear: 2007,
    runtimeMinutes: 122,
    genre: "Historical Political Drama",
    linkToBuy: "https://www.amazon.com/Katyn-Maja-Ostaszewska/dp/B002ZG97SW",
    isBanned: false,
  },
]);
