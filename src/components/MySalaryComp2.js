import React, { Component } from 'react'

export class MySalaryComp2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             salary: 60000
        }
    }
    SalaryInc(){
        this.setState((prevState)=>({
            salary: prevState.salary+1000
        }))
    }
    render() {
        return (
            <div>
                <h1>My Salary Component two</h1>
                <p>Salary: <strong>{this.state.salary}</strong> </p>
                <button type='button' onMouseOver={()=>this.SalaryInc()} >Click here</button>
            </div>
        )
    }
}

export default MySalaryComp2
