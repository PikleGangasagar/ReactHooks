import React from 'react'

const ChildComp = (props) => {
    return (
        <div>
            <h2>Child Component</h2>

            <p>Employee Name: <strong>{props.name}</strong></p>
            <p>Employee Salary:<strong>{props.salary}</strong> </p>
            <button type="button" onClick={props.update} >Update details</button>
            <hr></hr>
        </div>
    )
}

export default ChildComp
