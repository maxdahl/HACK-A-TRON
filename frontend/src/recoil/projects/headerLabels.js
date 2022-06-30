import { selector } from "recoil";

const projectsHeaderLabels = selector({
  key: "projectHeaderLabels",
  get: () => {
    return {
      name: "Project",
      location: "Location",
      progress: "Progress",
      openPositions: "Open positions",
      techStack: "Technologies",
      partners: "Partners",
      status: "Status",
    };
  },
});

export default projectsHeaderLabels;
