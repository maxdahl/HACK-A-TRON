import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import AnTableHead from "./AnTableHead";
import AnTableRow from "./AnTableRow";

import "./style.css";

function AnTable(props) {
  const { data, headers } = props;

  return (
    <Table>
      <AnTableHead headers={headers} key="an-table-head" />

      <TableBody>
        {data.map((row, index) => (
          <AnTableRow
            cellData={row.cellData}
            isOpen={row.isOpen}
            childRows={row.childRows}
            toggleOpen={row.toggleOpen}
            hasChildren={row.hasChildren}
            key={row.key ?? `antr-${index}`}
          />
        ))}
      </TableBody>
    </Table>
  );
}

export default AnTable;
