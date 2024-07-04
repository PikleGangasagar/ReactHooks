import React, { Component } from 'react'

class MyCounterComp extends Component {
    constructor(props)
        {
            super(props);
        
            this.state = {
                 count: 0
            }
        }
    CounterInc(){
        this.setState((prevState)=>({
            count:prevState.count+1 }))

    }
    CounterDec(){
        this.setState((prevState)=>({count:prevState.count-1}))
    }
    render(){  
        return (
            <div>
                <h2>This is my Counter Component</h2>
                <p>Counter Value is: <strong>{this.state.count}</strong> </p>
                <button type="button" onClick={()=>{this.CounterInc()}}>Counter++</button> 
                <br></br>
                <br></br>
                ========================================================================
                <br></br>
                <br></br>
                <button type="button" onClick={()=>{this.CounterDec()}}>Countdown--</button>
                <br></br>
                <br></br>
                =========================================================
            </div>
        )
    }
}

export default MyCounterComp
