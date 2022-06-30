const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// eslint-disable-next-line
const colors = require("colors");

// load env vars
dotenv.config();

// load models
// const User = require("./src/models/User");
const Project = require("./src/models/Project");

// connect to DB
mongoose.connect(process.env.MONGO_URI, {
  maxPoolSize: 100,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// read JSON files
// const users = JSON.parse(
//   fs.readFileSync(`${__dirname}/src/_data/user.json`, "utf-8")
// );
const projects = JSON.parse(
  fs.readFileSync(`${__dirname}/src/_data/project.json`, "utf-8")
);

// import into DB
const importData = async () => {
  try {
    // await User.create(users);
    await Project.create(projects);

    console.log("Data Imported...".green.inverse);
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

// delete data
const deleteData = async () => {
  try {
    // await User.deleteMany();
    await Project.deleteMany();

    console.log("Data Destroyed...".red.inverse);
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
