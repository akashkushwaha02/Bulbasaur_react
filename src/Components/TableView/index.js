import React from "react";
import './style.css';
const Table = ((props)=>{
    const {
        border = '',
        background = '',
        colspan = 0,
        rowspan = 0,
        size = '',
        borderless = '',
        hover = '',
        thead =[],
        tbody = [],
        margin = 0,
        maxWidth = ''
    } = props;

    return (
        Array.isArray(props.thead) && thead.length > 0 && Array.isArray(props.tbody) && tbody.length ?
        <table style={{maxWidth: {maxWidth}, margin: {margin}, background:{background}, border:{border} }}>
        <thead>
            <tr>
                {Array.isArray(props.thead) && thead.length > 0?
                props.thead.map((column,j) => (
                <th key={j} scope="row">{column}</th>
                )):''}
            </tr>
        </thead>
        <tbody>
            {Array.isArray(props.tbody) && tbody.length > 0?
            props.tbody.map((row, i) => {
                return <tr key={i} scope="row">
                    {Object.values(row).map((cell,j) => {
                    return <td key={j}>{cell}</td>
                    })}
                </tr>
                
            }) : <tr key={0}>No Records</tr>}  
            
        </tbody>
        </table>
        : 'No Table Heading and Body'
    );
});

export default Table;