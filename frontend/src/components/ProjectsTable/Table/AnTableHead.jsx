import React from "react";

import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

function getHeaderRowCells(rowCells) {
  const cells = [];
  for (const [index, cell] of rowCells.entries()) {
    if (typeof cell === "string") {
      cells.push(<TableCell key={`${cell}-${index}`}>{cell}</TableCell>);
    } else {
      const label = cell.label ? cell.label : "";
      const className = cell.className ? cell.className : "";
      let key = cell.key ? cell.key : cell.label;

      if (!key) key = `nk-${index}-${Math.random()}`;

      let colSpan = 1;
      if (cell.colSpan) colSpan = cell.colSpan;

      let align = "left";
      if (cell.align) align = cell.align;

      cells.push(
        <TableCell
          className={className}
          key={key}
          colSpan={colSpan}
          align={align}
        >
          {label}
        </TableCell>
      );
    }
  }

  return cells;
}

function AnTableHead(props) {
  const { headers } = props;
  const rows = [];

  for (const [index, row] of headers.entries()) {
    rows.push(
      <TableRow key={`thr-${index}`}>{getHeaderRowCells(row)}</TableRow>
    );
  }

  return <TableHead key="table-head">{rows}</TableHead>;
}

export default AnTableHead;
