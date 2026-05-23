const swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.0" });

const doc = {
  info: { title: "CRUD API", description: "Api for CRUD application" },
  servers: [
    {
      url: "https://cse341-crud-t5pm.onrender.com",
    },
    {
      url: "http://localhost:7500/",
    },
  ],
  components: {
    schemas: {
      bookCreate: {
        $title: "TEST",
        $author: "TEST",
        $publishYear: 1900,
        $pages: 200,
        $genre: "TEST",
        $linkToBuy: "TEST",
        $isBanned: true,
      },
      bookUpdate: {
        title: "TEST",
        author: "TEST",
        publishYear: 1900,
        pages: 200,
        genre: "TEST",
        linkToBuy: "TEST",
        isBanned: true,
      },
      movieCreate: {
        $title: "Katyn",
        $director: "Andrzej Wajda",
        $publishYear: 2007,
        $runtimeMinutes: 122,
        $genre: "Historical Political Drama",
        $linkToBuy:
          "https://www.amazon.com/Katyn-Maja-Ostaszewska/dp/B002ZG97SW",
        $isBanned: false,
      },
      movieUpdate: {
        title: "Katyn",
        director: "Andrzej Wajda",
        publishYear: 2007,
        runtimeMinutes: 122,
        genre: "Historical Political Drama",
        linkToBuy:
          "https://www.amazon.com/Katyn-Maja-Ostaszewska/dp/B002ZG97SW",
        isBanned: false,
      },
    },
  },
};

const outputFile = "./swagger.json";
const routes = ["./server.js"];

swaggerAutogen(outputFile, routes, doc);
