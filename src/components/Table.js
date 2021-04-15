import React from "react";

function Table(props) {
    return (
        <table className="table">
            <thead onClick={props.sortEmployees}>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Birthday</th>
                </tr>
            </thead>
            <tbody>
                {props.employees.map(employee => {
                    console.log(employee);
                    return(
                        <tr>
                            <td><img src={employee.imgae} alt="Images" /></td>
                            <td>{employee.name}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.email}</td>
                            <td>{employee.dateOfBirth}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
export default Table;