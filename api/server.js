const express = require("express");
const cors = require('cors');
const helmet = require('helmet');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const server = express();

const userRouter = require("../users/user-router")
const authRouter = require("../auth/auth-router");
const postRouter = require("../posts/post-router");

server.use(helmet());
server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json);
server.use(fileUpload())
server.use(express.json());
server.use("/api/auth", authRouter);
server.use("/api/users", userRouter);
server.use("/api/posts", postRouter);

server.get("/", (req, res) => {
  res.send({ Greeting: 'Greetings from Port 5000!!!' });
});

module.exports = server;