import { selector } from "recoil";

import projectsAtom from "./atom";

const projectsWithProgress = selector({
  key: "projectsWithProgress",
  get: ({ get }) => {
    const projects = get(projectsAtom);
    console.log(projects);
    return projects.map((project) => {
      return {
        ...project,
        progress: (project.progress[0] / project.progress[1]) * 100,
      };
    });
  },
});

export default projectsWithProgress;
