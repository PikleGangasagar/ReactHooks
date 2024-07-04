import React, {Component} from "react";

class MyStateComp extends Component{
    constructor(){
        super();
        this.state = {
            empName:"Aarryaa Pikle",
            empSalary:158520
        }
        setTimeout(()=>{
        //     this.setState({empName:"Aarya Pikle",
        //         empSalary:this.state.empSalary+10000
        //     })

        this.setState((prevState)=>({
            empName:"Aarya Pikle",
            empSalary:prevState.empSalary+10000
        }))
         },3000);
    }
    render(){
        const{empName,empSalary} = this.state;
        const{company,address} = this.props;
        return <div>
            <h2>This is MyStateComp</h2>
            {/* <p>Employee Name is: <strong>{this.state.empName}</strong></p>
            <p>Employee Salary is: <strong>{this.state.empSalary}</strong> </p> */}
            <p>Employee Name is: <strong>{empName}</strong></p>
            <p>Employee Salary is: <strong>{empSalary}</strong> </p>
            ==================================================
            {/* <p>My Dream Company is:{this.props.company}</p>
            <p>Address is :{this.props.address}</p> */}
            <p>My Dream Company is:<strong>{company}</strong></p>
            <p>Address is :<strong>{address}</strong></p>
            ===================================================
        </div>
    }
}

export default MyStateComp;