const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");

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

// dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// mount routers
app.use("/api/v1/users", userRouter);

connectDB();

const PORT = process.env.PORT || 8000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
  )
);

// async function startServer() {
//   const port = process.env.APP_PORT || 5000;
//   app.listen(port, () => {
//     console.info(`Server started on port ${port}`);
//   });
// }

// startServer();
