const dotenv = require("dotenv");

// load env vars
dotenv.config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
// eslint-disable-next-line
const colors = require("colors");

const app = express();

// database
const connectDB = require("./db");

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routers
const userRouter = require("./src/routes/userRoutes");
const projectRouter = require("./src/routes/projectRoutes");
const clientRouter = require("./src/routes/clientRoutes");

// dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// mount routers
app.use("/api/v1/users", userRouter);
app.use("/api/v1/projects", projectRouter);
app.use("/api/v1/clients", clientRouter);

connectDB();

const PORT = process.env.PORT || 8000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
  )
);
