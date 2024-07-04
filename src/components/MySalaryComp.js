import React, { Component } from 'react'
import HOC from './HOC'
class MySalaryComp extends Component {
    render() {
        return (
            <div>
                <h1>My Salary Component One</h1>
                <p>My salary is: <strong>{this.props.salary}</strong></p>
                <button type='button' onClick={()=>this.props.SalaryInc()} >SalaryInc</button>
            </div>
        )
    }
}

export default HOC(MySalaryComp)  