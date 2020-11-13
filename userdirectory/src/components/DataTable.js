import React from "react";
import DataBody from "./DataBody";
import "../styles/DataTable.css";

function DataTable({ headings, users, handleSort }) {
    return (
        <div className="dataTable mt-5">
            <table
            id="table"
            className="table table-striped table-hover table-condensed"
            >
                <thread>
                    <tr>
                        {headings.map(({ name, width }) => {
                            return (
                                <th
                                className="col"
                                key={name}
                                style={{ width }}
                                onClick={() => {
                                    handleSort(name.toLowerCase());
                                }}
                            >
                                {name}
                                <span className="pointer"></span>
                            </th>
                            );
                        })}
                    </tr>
                </thread>
                <DataBody users={users} />
            </table>
        </div>
    );
}

export default DataTable;