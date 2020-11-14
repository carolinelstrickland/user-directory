import React, { useState, useEffect } from "react";
import Wrapper from "./components/Wrapper";
import Header from"./components/Header";
import axios from "axios";

import "./App.css";
import EmployeeTable from "./components/EmpTable";

function App() {
    // const [employees, setEmployees] = useState([]);
    // useEffect(() => {
    // axios.get("https://randomuser.me/api/?results=10&nat=us").then(response => {
    //     console.log(response);
    //     setEmployees([...response.data.results])
    // })

    // }, [])
    return (
        <div className="App">
            <Wrapper>
                <Header />
                <EmployeeTable />
            </Wrapper>
        </div>
    );
}

export default App;