import React, { useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import MOCK_DATA from "../constants/MOCK_DATA.json";
import { COLUMNS } from "../constants/Columns";
import "../components/table.css";

function BasicTable() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = tableInstance;
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                <span>
                  {column.isSorted
                    ? column.isSortedDesc
                      ? ' <img draggable="false" role="img" class="emoji" alt="🔽" src="https://s.w.org/images/core/emoji/14.0.0/svg/1f53d.svg">'
                      : ' <img draggable="false" role="img" class="emoji" alt="🔼" src="https://s.w.org/images/core/emoji/14.0.0/svg/1f53c.svg">'
                    : ""}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
      {/* <tfoot>
        {footerGroups.map((footerGroup) => (
          <tr {...footerGroup.getFooterGroupProps()}>
            {footerGroup.headers.map((column) => (
              <td {...column.getFooterProps()}>{column.render("Footer")}</td>
            ))}
          </tr>
        ))}
      </tfoot> */}
    </table>
  );
}

export default BasicTable;
