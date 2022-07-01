import Navbar from "@components/Navbar/Navbar";
import LinearProgress from "@mui/material/LinearProgress";
import TextField from "@mui/material/TextField";
import "./index.css";

import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import PageHeader from "@components/AddProject/order/PageHeader";
import PageTitleWrapper from "@components/AddProject/order/PageTitleWrapper";

import {
  projectsHeaderLabels,
  withFilter,
  withTableHeaderValues,
} from "@recoil/projects";

import projectsFilterAtom from "@recoil/projectsTableFilter";

import "./Table.css";
import AnTable from "./Table/AnTable";

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
            label="Search projects..."
            type="search"
            size="small"
            value={nameValue}
            onChange={(e) => {
              updateFilter("name", e.target.value);
            }}
            onFocus={(e) => {
              e.target.select();
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
        if (key === "name") {
          value = (
            // eslint-disable-next-line
            <Link to="/project">{project.name}</Link>
          );
        } else if (key === "progress") {
          value = (
            <LinearProgress variant="determinate" value={project.progress} />
          );
        } else if (Array.isArray(project[key])) {
          value = project[key].join(", ");
        }
        row.cellData.push({
          value,
        });
      }
    }

    data.push(row);
  }

  return (
    <>
      <PageTitleWrapper>
        <PageHeader location="Pojects Overview" />
      </PageTitleWrapper>
      <div className="project-card">
        <div className="container-project-card">
          <AnTable headers={headers} data={data} />
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default ProjectsTable;
