import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import TextField from "@mui/material/TextField";

import { useRecoilValue, useRecoilState } from "recoil";

import {
  withFilter,
  withTableHeaderValues,
  projectsHeaderLabels,
} from "@recoil/projects";

import projectsFilterAtom from "@recoil/projectsTableFilter";

import AnTable from "./Table/AnTable";
import "./Table.css";

function ProjectsTable() {
  const projects = useRecoilValue(withFilter);
  const headerValues = useRecoilValue(withTableHeaderValues);
  const headerLabels = useRecoilValue(projectsHeaderLabels);

  const [projectsFilter, setProjectsFilter] =
    useRecoilState(projectsFilterAtom);

  const [nameValue, setNameValue] = useState("");

  function updateFilter(key, value) {
    setProjectsFilter({ ...projectsFilter, [key]: value });
  }

  const headers = [[], []];

  for (const [key, values] of Object.entries(headerValues)) {
    headers[0].push(headerLabels[key]);
    if (key !== "name") {
      const selectOptions = Array.from(values).map((val) => ({
        label: val,
        value: val,
      }));

      headers[1].push({
        label: (
          <MultiSelect
            options={selectOptions}
            value={projectsFilter[key] ?? []}
            onChange={(val) => {
              updateFilter(key, val);
            }}
          />
        ),
        key,
      });
    } else {
      headers[1].push({
        label: (
          <TextField
            id="outlined-search"
            label="Search field"
            type="search"
            value={nameValue}
            onChange={(e) => {
              setNameValue(e.target.value);
            }}
          />
        ),
      });
    }
  }
  const data = [];
  for (const project of projects) {
    const row = { cellData: [] };
    for (const key of Object.keys(headerLabels)) {
      if (project[key]) {
        row.cellData.push({
          value: project[key],
        });
      }
    }

    data.push(row);
  }

  return (
    <div>
      <AnTable headers={headers} data={data} />
    </div>
  );
}

export default ProjectsTable;
