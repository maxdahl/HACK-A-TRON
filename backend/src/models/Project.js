const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      max: 50,
      trim: true,
      default: "",
    },
    location: {
      type: String,
      max: 50,
      trim: true,
      default: "",
    },
    field: String,
    progress: [],
    techStack: [],
    partners: [],
    status: String,
    description: String,
    openPosition: String,
    projectInfo: {},
    startingDate: String,
    duration: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
