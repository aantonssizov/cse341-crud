const swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.0" });

const doc = {
  info: { title: "CRUD API", description: "Api for CRUD application" },
  servers: [
    {
      url: "https://cse341-crud-t5pm.onrender.com",
    },
    {
      url: "localhost:7500",
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
    },
  },
};

const outputFile = "./swagger.json";
const routes = ["./server.js"];

swaggerAutogen(outputFile, routes, doc);
