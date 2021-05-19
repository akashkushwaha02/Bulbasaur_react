import React from "react";
import Dropdown from "../DropdownView";

let Filter = (()=>{
    let optionsData =[
        "First Name",
        "Last Name",
        "Project Name",
        "Address"
    ]
    return (
        <>
            <Dropdown options={optionsData}/>
        </>
    )
})

export default Filter;