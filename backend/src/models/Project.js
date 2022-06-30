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
    progress: {
      type: String,
      enum: ["Ideation", "UI/UX", "Development", "Production", "Testing", null],
    },
    techStack: [],
    partners: [],
    status: [],
    estimatedTime: String,
    description: String,
    openPosition: String,

    organization: {
      // value comes from a put request as response from the frontend once user has created the org
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
