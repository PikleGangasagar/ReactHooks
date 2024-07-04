import React, {useEffect, useState} from 'react'

const UseEffectComp = () => {

    const [count, setCount] = useState(0);
    const [salary, setSalary]=useState(60000);

    //case 1
    // useEffect(() => {
    //     console.log("use effect  call")
    //     setCount(count+1);
    // })
    //case 2
    // useEffect(() => {
    //     console.log("use effect  call")
    //     setCount(count+1);
    // },[])

    useEffect(() => {
        console.log("use effect  call")
        setCount(count+1);
    },[salary])
    return (
        <div>
            <h1>This is Use Effect Component</h1>
            <p>Counter value:<strong>{count}</strong> </p>
            <p>Salary:<strong>{salary}</strong></p>
            <button type='button' onClick={()=>setSalary(salary+1000)} >Click here</button>

        </div>
    )
}
export default UseEffectComp
