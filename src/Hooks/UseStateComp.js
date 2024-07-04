import React, {useState,useEffect} from 'react'

const UseStateComp = () => {
    const [count, setCount] = useState(0);
    const[name, setName] = useState("Ganga");
    const[breakFast,setBreakFast] = useState([
        {id:1, name:"Poha"},
        {id:2, name:"Dosa"},
        {id:3, name:"Dhokla"},
        {id:4, name:"Idli"}
    ])
    const counterInc=()=>{
        setCount(count+1)
    }

    useEffect(() => {
        setTimeout(()=>{
            let brArray = breakFast;
            let brIndex = breakFast.findIndex((b)=>b.id === 3); //index = 2
            //let brData = breakFast.find((b)=> b.id === 3) //returns complete object
            if(brArray.length>0){
    
                brArray.splice(brIndex,1,{name:"Upma"})
                setBreakFast(brArray)
            }
        },3000)
    }, [])
    return (
        <div>
            <h1>This is Use State Component</h1>
            <p>Count value: <strong>{count}</strong> </p>
            <button type='button' onClick={()=>counterInc()} >Counter+</button>{' '}
            <button type='button' onClick={()=>setCount(count+2)} >Counter++</button>
            <br/>
            <br/>
            -----------------------------------------------

            <p>Name is: <strong>{name}</strong> </p>
            <button type='button' onClick={()=>setName("Arya")} >Change Name</button>

            <ul>
                {
                    breakFast.map((val, index)=>{
                        //return <li key={index}> {val.name}</li>  //for array
                       return <li key={val.id}>{val.name}</li>
                    })
                }
            </ul>

        </div>
    )
}
export default UseStateComp