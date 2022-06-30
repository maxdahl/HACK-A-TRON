import { selector } from "recoil";
import withProgress from "./withProgress";
import projectsHeaderLables from "./headerLabels";

const projectsWithTableHeaderValues = selector({
  key: "projectsWithTableHeaderValues",
  get: ({ get }) => {
    const projects = get(withProgress);
    const headers = get(projectsHeaderLables);
    const headerValues = {};

    for (const project of projects) {
      for (const [key, val] of Object.entries(project)) {
        if (headers[key]) {
          if (!headerValues[key]) headerValues[key] = new Set();
          if (Array.isArray(val)) {
            val.forEach((v) => headerValues[key].add(v));
          } else headerValues[key].add(val);
        }
      }
    }

    return headerValues;
  },
});

export default projectsWithTableHeaderValues;
