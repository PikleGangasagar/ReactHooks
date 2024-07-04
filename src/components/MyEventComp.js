import React, {Component} from "react";
class MyEventComp extends Component{
    greeting(){
        window.alert("Welcome to YCP AIT")
    }
    welcome(std1,std2,std3){
        window.alert(`Welcome ${std1},${std2},${std3}`);
    }
    welcome1(...std){
        window.alert(`${std}`);
    }
    render(){
        return <div>
            <h2>This is my Event Component</h2>
            <button type="button" onClick={()=>this.greeting()}>greeting</button>
            <br/>
            ===============================
            <h2 onChange={()=>this.welcome("Ganga","Arya","Sagar")}>Hover on me to call Welcome</h2>
            <br></br>
            ======================================
            <h3 onChange ={()=>this.welcome1("Radha","Kanha","Sachin")} >Click her</h3>
            ============================================================================
        </div>
    }
}
export default MyEventComp;