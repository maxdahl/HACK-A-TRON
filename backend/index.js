/* eslint-disable no-restricted-syntax  */

require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

async function startServer() {
  const port = process.env.APP_PORT || 5000;
  app.listen(port, () => {
    console.info(`Server started on port ${port}`);
  });
}

startServer();
