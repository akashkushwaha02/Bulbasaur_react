import React from "react";
import './style.css'

let Dropdown = ((props)=>{
    return (<>
        <select onChange={dropDown} className='select-w-h-m-radius'> 
            <option>Select Filter</option> 
            {props.options.map((element,i)=>(
                <option key={i} value={element}>{element}</option> 
            ))}   
        </select>
    </>)
})

let dropDown = ((event)=>{
    console.log(event.target.value)
})

export default Dropdown;

