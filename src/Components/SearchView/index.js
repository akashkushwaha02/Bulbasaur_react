import React from "react";
import './style.css'

let Search = (()=>{
    return(
        <>
            <input placeholder={'Search...'} className="input-search" onKeyUp={searchData}/>
        </>
    )
})


let searchData = ((event)=>{
    console.log(event.target.value);
})

export default Search;