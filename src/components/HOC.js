import React,{Component} from 'react'
const HOC = (WrapperComponent) => {

    class HocComp extends Component{       
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
        render(){
            return <WrapperComponent salary ={this.state.salary} SalaryInc ={()=>{this.SalaryInc()}} />
        }
    }
    return HocComp
}
export default HOC
