import React, { Component } from 'react'
import ChildComp from './ChildComp'

export class ParentComp extends Component {

    Update(){
        this.setState((prevState)=>({
            empName:"Aarya Pikle",
            empSalary:prevState.empSalary+100}))     
    }
    constructor(props) {
        super(props)
    
        this.state = {
            empName: "Gangasagar",
            empSalary: 912103   
        }
    }  
    render() {

        return (
            <div>
                <h1>Parent Component</h1>
                <p>Employee Name: <strong>{this.state.empName}</strong></p>
                <p>Employee Salary:<strong>{this.state.empSalary}</strong> </p>
                <button type='button'onClick={()=>(this.Update())} >Update Details</button>
                <br></br> 
                ==========================================================================
                <br />
                {/* here we import child element  */}
                <br />
                <ChildComp name={this.state.empName} salary={this.state.empSalary} update={()=>(this.Update())}></ChildComp> 
            </div>
        )
    }
}

export default ParentComp
