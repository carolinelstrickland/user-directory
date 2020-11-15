import React, { useState, useEffect } from "react";
import axios from "axios";
const EmployeeTable = () => {
    const [sortType, setSortType] = useState("asc");
    console.log(sortType);
    const [employees, setEmployees] = useState([]);
    const [sortEmployees, setSortEmployees] = useState(employees);
    // console.log(sortEmployees);
    useEffect(() => {
    axios.get("https://randomuser.me/api/?results=10&nat=us").then(response => {
        console.log(response);
        setEmployees([...response.data.results])
    })
    }, [])
   //watching for for sorted employees state
	useEffect(() => {
		setSortEmployees(employees);
  }, [employees]);
    const sortToggler = () => sortType === "asc" ? setSortType("desc") : setSortType("asc" )
    useEffect(() => {
		sortType === "desc"
			? setSortEmployees(
					[...sortEmployees].sort((a, b) =>
						a.name.last.toLowerCase() > b.name.last.toLowerCase() ? 1 : -1
					)
			  )
			: setSortEmployees(
					[...sortEmployees].sort((a, b) =>
						b.name.last.toLowerCase() > a.name.last.toLowerCase() ? 1 : -1
					)
			  );
  }, [sortType]);
    return (
        <React.Fragment>
            <table>
                <tr>
                    <th>
                        Image
                    </th>
                    <th onClick={sortToggler}>
                        Name
                    </th>
                    <th>
                        Phone Number
                    </th>
                    <th>
                        Email
                    </th>
                </tr>
                {/* change here to sortEmployees instead of original employees */}
                {[...sortEmployees].map(employee => {
                    return (
                        <tr key={employee.email}>
                            <td>
                                <img src={employee.picture.medium} alt="" />
                            </td>
                            <td>
                                {employee.name.last} {employee.name.first}
                            </td>
                            <td>
                                {employee.phone}
                            </td>
                            <td>
                                {employee.email}
                            </td>
                        </tr>
                    )
                })}
            </table>
        </React.Fragment>
    )
}
export default EmployeeTable;