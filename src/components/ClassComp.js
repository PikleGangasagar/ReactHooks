import { Component } from "react";
class ClassComp extends Component{

    render(){
        return <div>
        <h3>PRN NO: {this.props.myPRN},  Company: {this.props.myCLG}</h3>
         =============================================================================== 
    </div>
        
    }
}
export default ClassComp;