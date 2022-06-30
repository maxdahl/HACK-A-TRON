import { selector } from "recoil";

import filterAtom from "./atom";

const withCombinedFilters = selector({
  key: "withCombinedFilters",
  get: ({ get }) => {
    const filters = get(filterAtom);

    const combinedFilters = {};
    Object.entries(filters).forEach(([key, values]) => {
      if (values.length > 0) combinedFilters[key] = values.map((v) => v.value);
    });

    return combinedFilters;
  },
});

export default withCombinedFilters;
