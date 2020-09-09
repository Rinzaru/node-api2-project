const express = require("express");
const cors = require("cors");
const server = express();
const port = 8000;
const welcomeRouter = require("./welcome/welcome-router");
const postRouter = require("./posts/posts-router");

server.use(express.json());
server.use(
  cors({
    methods: ["GET"],
  })
);
server.use(welcomeRouter);
server.use(postRouter);

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
