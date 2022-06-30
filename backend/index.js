const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
// eslint-disable-next-line
const colors = require("colors");

// load env vars
dotenv.config();

const app = express();

// database
const connectDB = require("./db");

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routers
const userRouter = require("./src/routes/userRoutes");
const projectRouter = require("./src/routes/projectRoutes");

// dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// mount routers
app.use("/api/v1/users", userRouter);
app.use("/api/v1/projects", projectRouter);

connectDB();

const PORT = process.env.PORT || 8000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
  )
);
