import { selector } from "recoil";

import { withCombinedFilters } from "@recoil/projectsTableFilter";
import withProgress from "./withProgress";

const isFilterMatch = (value, filters) => {
  const filterArray = Array.isArray(filters) ? filters : [filters];

  if (filterArray.length === 0) return true;

  if (Array.isArray(value)) {
    for (const val of value) {
      if (isFilterMatch(val, filterArray) === true) return true;
    }

    return false;
  }

  return filterArray.includes(value);
};

const projectsWithFilter = selector({
  key: "projectsWithFilter",
  get: ({ get }) => {
    const projects = get(withProgress);
    const filters = get(withCombinedFilters);

    const filterKeys = Object.keys(filters);
    if (filterKeys.length === 0) return projects;

    const filtered = projects.filter((project) => {
      for (const filterKey of filterKeys) {
        if (filterKey === "name") {
          if (!project.name.includes(filters.name[0])) return false;
        } else if (
          isFilterMatch(project[filterKey], filters[filterKey]) === false
        )
          return false;
      }

      return true;
    });
    return filtered;
  },
});

export default projectsWithFilter;
