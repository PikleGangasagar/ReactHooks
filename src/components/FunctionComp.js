//  function FunctionComp(){  
//        return <h2>Gangasagar Pikle</h2>
// }

const FunctionComp = (props)=> {
    return <div>
        <h2>Name :{props.myName}, Post: {props.myPost}</h2>   
    </div>
}

export default FunctionComp;