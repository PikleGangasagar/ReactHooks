import React, { Component } from 'react'

export class ConditinalRenComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isCond:true
             
        }
    }
    
    render() {
        //1. if else....
        /*let msg ="";
                <h2>Conditional Component Rendering</h2>
                if(this.state.isCond){
                   // return <h2>Admin Login successful</h2>
                   msg ="Admin Login successful"
                }
                else{
                    //return <h2>User Login successful</h2>
                    msg="User Login successful"
                } 
                //2.Elemet as variable
                return <h2>{msg}</h2>     
        */
       //3. Use of ternary operator
      // return (!this.state.isCond)?<h2>Admin login successful</h2>:<h2>User login successful</h2>

       //4.Use of short circuit
       return this.state.isCond && <h2>Admin login</h2>
    }
}

export default ConditinalRenComp
