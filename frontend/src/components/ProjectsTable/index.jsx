import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import TextField from "@mui/material/TextField";
import LinearProgress from "@mui/material/LinearProgress";
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
    if (key === "name") {
      setProjectsFilter({ ...projectsFilter, name: [{ value }] });
      setNameValue(value);
    } else setProjectsFilter({ ...projectsFilter, [key]: value });
  }

  const headers = [[], []];

  for (const [key, values] of Object.entries(headerValues)) {
    headers[0].push(headerLabels[key]);
    if (key !== "name") {
      const selectOptions = Array.from(values).map((val) => ({
        label: key === "progress" ? `${val}%` : val,
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
              updateFilter("name", e.target.value);
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
      let value = project[key];
      if (project[key] !== undefined) {
        if (key === "progress") {
          value = (
            <LinearProgress variant="determinate" value={project.progress} />
          );
        } else if (Array.isArray(project[key])) {
          value = (
            <ul>
              {project[key].map((v) => (
                <li>{v}</li>
              ))}
            </ul>
          );
        }
        row.cellData.push({
          value,
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
